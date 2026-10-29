import { readPersistedStore } from "@/lib/storage";
import { useSettingsStore } from "@/stores/use-settings-store";

/**
 * Opt-in telemetry. When `enableTelemetry` is true, events are buffered
 * locally and flushed to Plausible (no PII — event name + generic path only).
 * Requires a separate user consent toggle (Settings → Usage telemetry).
 */

export interface TelemetryEvent {
  name: string;
  data?: Record<string, number | string | boolean>;
  timestamp: number;
}

const STORAGE_KEY = "fdh-telemetry";
const SETTINGS_KEY = "fdh-settings-storage";
const MAX_EVENTS = 200;
const PLAUSIBLE_DOMAIN = "frontenddevhelper.com";
const PLAUSIBLE_URL = "https://plausible.io/api/event";
export const PLAUSIBLE_ORIGIN = "https://plausible.io/*";

async function isTelemetryEnabled(): Promise<boolean> {
  if (useSettingsStore.getState().enableTelemetry) return true;
  try {
    const wrapped = await readPersistedStore<{ enableTelemetry?: boolean }>(
      SETTINGS_KEY,
    );
    return wrapped?.state?.enableTelemetry === true;
  } catch {
    return false;
  }
}

async function getStoredEvents(): Promise<TelemetryEvent[]> {
  const result = await chrome.storage.local.get(STORAGE_KEY);
  return (result[STORAGE_KEY] as TelemetryEvent[] | undefined) ?? [];
}

async function setStoredEvents(events: TelemetryEvent[]): Promise<void> {
  await chrome.storage.local.set({ [STORAGE_KEY]: events });
}

export async function trackEvent(
  name: string,
  data?: Record<string, number | string | boolean>,
): Promise<void> {
  if (!(await isTelemetryEnabled())) return;

  const event: TelemetryEvent = {
    name,
    data,
    timestamp: Date.now(),
  };

  const events = await getStoredEvents();
  events.push(event);

  if (events.length > MAX_EVENTS) {
    events.splice(0, events.length - MAX_EVENTS);
  }

  await setStoredEvents(events);
}

export async function flushTelemetry(): Promise<void> {
  if (!(await isTelemetryEnabled())) return;

  const events = await getStoredEvents();
  if (events.length === 0) return;

  try {
    for (const event of events.slice(-20)) {
      await fetch(PLAUSIBLE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: event.name,
          url: `https://${PLAUSIBLE_DOMAIN}/extension`,
          domain: PLAUSIBLE_DOMAIN,
          props: event.data,
        }),
        keepalive: true,
      });
    }
    await setStoredEvents([]);
  } catch {
    // Keep buffer on network failure; trim only.
    if (events.length > MAX_EVENTS) {
      await setStoredEvents(events.slice(-MAX_EVENTS));
    }
  }
}

export async function getTelemetryEvents(): Promise<TelemetryEvent[]> {
  return getStoredEvents();
}

export async function clearTelemetry(): Promise<void> {
  await setStoredEvents([]);
}

export async function getTelemetryStatus(): Promise<"disabled" | "network"> {
  return (await isTelemetryEnabled()) ? "network" : "disabled";
}
