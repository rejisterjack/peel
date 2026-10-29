/**
 * Encrypted-at-rest secret storage for the Peel extension.
 *
 * Threat model:
 *   `chrome.storage.local` is NOT encrypted on disk — its backing IndexedDB
 *   file can be read by anyone with filesystem access to the user's profile
 *   directory. The AES-GCM key is stored there too, separate from the
 *   ciphertext blob, so secrets survive a browser restart. A copy of the
 *   profile taken while the browser is closed can decrypt those secrets.
 *   Content scripts cannot read `chrome.storage.local` unless the extension
 *   grants them access; this module runs in the extension process.
 *
 * Approach:
 *   - Generate a random 256-bit AES-GCM key on first run and persist the raw
 *     bytes in `chrome.storage.local` under `fdh-secret-key`.
 *   - A key left in `chrome.storage.session` by an older build is copied into
 *     local storage once, then removed from session storage.
 *   - Encrypt each secret with that key + a fresh IV per write, store the
 *     `{ iv, ciphertext }` blob under `fdh-secrets-blob`.
 *
 * Performance: WebCrypto AES-GCM is native and ~microsecond for these
 * sizes, so the async API here is the only overhead.
 */

const SESSION_KEY_NAME = "fdh-secret-key";
const LOCAL_KEY_NAME = "fdh-secret-key";
const LOCAL_BLOB_NAME = "fdh-secrets-blob";

interface EncryptedBlob {
  iv: string; // base64
  ciphertext: string; // base64
}

interface SecretsBlob {
  aiApiKey?: EncryptedBlob;
  githubToken?: EncryptedBlob;
  bridgeToken?: EncryptedBlob;
}

type SecretField = keyof SecretsBlob;

let cachedKey: CryptoKey | null = null;

/** Drops the in-memory key so the next read loads it from storage. */
export function clearCachedSecretKey(): void {
  cachedKey = null;
}

function readRawKey(value: unknown): ArrayBuffer | null {
  if (value instanceof ArrayBuffer) return value;
  if (ArrayBuffer.isView(value)) {
    const view = value as ArrayBufferView;
    return view.buffer.slice(
      view.byteOffset,
      view.byteOffset + view.byteLength,
    ) as ArrayBuffer;
  }
  if (Object.prototype.toString.call(value) !== "[object ArrayBuffer]") {
    return null;
  }
  const source = value as ArrayBuffer;
  const copy = new ArrayBuffer(source.byteLength);
  new Uint8Array(copy).set(new Uint8Array(source));
  return copy;
}

async function importRawKey(raw: ArrayBuffer): Promise<CryptoKey> {
  cachedKey = await crypto.subtle.importKey(
    "raw",
    raw,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"],
  );
  return cachedKey;
}

async function getOrCreateKey(): Promise<CryptoKey> {
  if (cachedKey) return cachedKey;

  const fromLocal = await chrome.storage.local.get(LOCAL_KEY_NAME);
  const localRaw = readRawKey(fromLocal[LOCAL_KEY_NAME]);
  if (localRaw) return importRawKey(localRaw);

  const fromSession = await chrome.storage.session.get(SESSION_KEY_NAME);
  const sessionRaw = readRawKey(fromSession[SESSION_KEY_NAME]);
  if (sessionRaw) {
    const raw = sessionRaw;
    await chrome.storage.local.set({ [LOCAL_KEY_NAME]: raw });
    if (typeof chrome.storage.session.remove === "function") {
      await chrome.storage.session.remove(SESSION_KEY_NAME);
    }
    return importRawKey(raw);
  }

  // First run — generate a new 256-bit key. It must be extractable so the
  // raw bytes can be persisted; otherwise exportKey throws.
  const key = await crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );
  const raw = await crypto.subtle.exportKey("raw", key);
  await chrome.storage.local.set({ [LOCAL_KEY_NAME]: raw });
  cachedKey = key;
  return key;
}

function bufToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    const byte = bytes[i];
    if (byte === undefined) continue;
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

function base64ToBuf(b64: string): ArrayBuffer {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

async function encrypt(plaintext: string): Promise<EncryptedBlob> {
  const key = await getOrCreateKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const enc = new TextEncoder();
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(plaintext),
  );
  return { iv: bufToBase64(iv.buffer), ciphertext: bufToBase64(ciphertext) };
}

async function decrypt(blob: EncryptedBlob): Promise<string> {
  const key = await getOrCreateKey();
  const iv = new Uint8Array(base64ToBuf(blob.iv));
  const dec = new TextDecoder();
  try {
    const plaintext = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      base64ToBuf(blob.ciphertext),
    );
    return dec.decode(plaintext);
  } catch {
    // Key mismatch (e.g. session key rotated) — treat as empty so the user
    // is prompted to re-enter the secret in Settings.
    return "";
  }
}

async function readBlob(): Promise<SecretsBlob> {
  const result = await chrome.storage.local.get(LOCAL_BLOB_NAME);
  return (result[LOCAL_BLOB_NAME] as SecretsBlob) ?? {};
}

async function writeBlob(blob: SecretsBlob): Promise<void> {
  await chrome.storage.local.set({ [LOCAL_BLOB_NAME]: blob });
}

/**
 * Read a decrypted secret. Returns '' if not set OR if decryption fails
 * (ciphertext written under a different key).
 */
export async function getSecret(field: SecretField): Promise<string> {
  const blob = await readBlob();
  const entry = blob[field];
  if (!entry) return "";
  return decrypt(entry);
}

/**
 * Write a secret. Empty/null plaintext clears the field.
 */
export async function setSecret(
  field: SecretField,
  plaintext: string,
): Promise<void> {
  const blob = await readBlob();
  if (!plaintext) {
    delete blob[field];
  } else {
    blob[field] = await encrypt(plaintext);
  }
  await writeBlob(blob);
}

/**
 * Migrate a plaintext secret from the legacy storage.local location into
 * encrypted-at-rest storage. Idempotent — once migrated, the plaintext copy
 * is deleted and subsequent calls are no-ops.
 *
 * Called on extension startup (background SW init).
 */
export async function migrateLegacySecrets(): Promise<void> {
  // The legacy secrets lived under fdh-settings-storage.state.{ai.github,vscode}.
  const LEGACY = "fdh-settings-storage";
  const stored = (await chrome.storage.local.get(LEGACY))[LEGACY] as
    | {
        state?: {
          ai?: { apiKey?: string };
          github?: { token?: string };
          vscode?: { bridgeToken?: string };
        };
      }
    | undefined;

  const state = stored?.state;
  if (!state) return;

  let migrated = false;

  if (state.ai?.apiKey) {
    await setSecret("aiApiKey", state.ai.apiKey);
    state.ai.apiKey = "";
    migrated = true;
  }
  if (state.github?.token) {
    await setSecret("githubToken", state.github.token);
    state.github.token = "";
    migrated = true;
  }
  if (state.vscode?.bridgeToken) {
    await setSecret("bridgeToken", state.vscode.bridgeToken);
    state.vscode.bridgeToken = "";
    migrated = true;
  }

  if (migrated) {
    await chrome.storage.local.set({ [LEGACY]: stored });
    console.info("[Peel] Migrated plaintext secrets to encrypted storage.");
  }
}
