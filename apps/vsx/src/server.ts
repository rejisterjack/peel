import { randomUUID } from "node:crypto";
import { WebSocketServer, WebSocket } from "ws";
import {
  generateBridgeToken,
  timingSafeEqualString,
  validateBridgeMessage,
  type BridgeMessageEnvelope,
} from "@repo/bridge-protocol";

export interface BridgeMessage extends BridgeMessageEnvelope {}

type MessageHandler = (message: BridgeMessage, ws: WebSocket) => void;

interface ClientState {
  authed: boolean;
  clientId: string | null;
  authFailures: number;
}

const MAX_AUTH_FAILURES = 5;

export class BridgeServer {
  private wss: WebSocketServer | null = null;
  private clients = new Map<WebSocket, ClientState>();
  private handlers = new Set<MessageHandler>();
  private _port: number = 9456;
  private _running = false;
  private expectedToken: string | null = null;
  private pending = new Map<
    string,
    {
      resolve: (value: unknown) => void;
      reject: (error: Error) => void;
      timer: ReturnType<typeof setTimeout>;
    }
  >();

  constructor(expectedToken?: string) {
    if (expectedToken !== undefined) {this.expectedToken = expectedToken;}
  }

  get port(): number {
    return this._port;
  }
  get running(): boolean {
    return this._running;
  }
  get clientCount(): number {
    return this.clients.size;
  }
  get authToken(): string | null {
    return this.expectedToken;
  }

  start(port: number = 9456): void {
    if (this._running) {
      this.stop();
    }
    this._port = port;

    if (this.expectedToken === null) {
      this.expectedToken = generateBridgeToken();
    }

    // Loopback only — do not bind all interfaces (LAN exposure risk).
    this.wss = new WebSocketServer({ port, host: "127.0.0.1" });
    this._running = true;

    this.wss.on("connection", (ws) => {
      this.clients.set(ws, {
        authed: false,
        clientId: null,
        authFailures: 0,
      });

      ws.on("message", (raw) => {
        let parsed: unknown;
        try {
          parsed = JSON.parse(raw.toString());
        } catch {
          return;
        }

        const state = this.clients.get(ws);
        if (!state) {return;}

        if (
          typeof parsed === "object" &&
          parsed !== null &&
          (parsed as { type?: string }).type === "Auth"
        ) {
          const auth = parsed as {
            payload?: { token?: string; client?: string };
          };
          const presented = auth.payload?.token ?? "";
          const client = auth.payload?.client ?? "unknown";
          if (
            this.expectedToken !== null &&
            timingSafeEqualString(presented, this.expectedToken)
          ) {
            state.authed = true;
            state.clientId = client;
            state.authFailures = 0;
            this.send(ws, { type: "AuthOk", payload: { client } });
          } else {
            state.authFailures += 1;
            this.send(ws, {
              type: "AuthFail",
              payload: { reason: "invalid token" },
            });
            if (state.authFailures >= MAX_AUTH_FAILURES) {
              ws.close();
            }
          }
          return;
        }

        if (!state.authed) {
          return;
        }

        if (
          typeof parsed === "object" &&
          parsed !== null &&
          (parsed as { type?: string }).type === "Ping"
        ) {
          this.send(ws, { type: "Pong" });
          return;
        }

        const result = validateBridgeMessage(parsed);
        if (!result.success) {
          console.warn(
            "[Peel] Dropping malformed bridge message:",
            result.error.issues,
          );
          return;
        }

        const message = result.message as BridgeMessage;
        if (message.type === "Response" && message.requestId) {
          const pending = this.pending.get(message.requestId);
          if (pending) {
            clearTimeout(pending.timer);
            this.pending.delete(message.requestId);
            if (typeof message.error === "string" && message.error.length > 0) {
              pending.reject(new Error(message.error));
            } else {
              pending.resolve(message.result);
            }
          }
        }
        for (const handler of this.handlers) {
          handler(message, ws);
        }
      });

      ws.on("close", () => {
        this.clients.delete(ws);
      });
      ws.on("error", () => {
        this.clients.delete(ws);
      });
    });

    this.wss.on("error", (err: NodeJS.ErrnoException) => {
      if (err.code === "EADDRINUSE") {
        console.error(`[Peel] Port ${port} is already in use`);
      }
      this._running = false;
    });
  }

  stop(): void {
    for (const ws of this.clients.keys()) {
      ws.close();
    }
    this.clients.clear();
    this.wss?.close();
    this.wss = null;
    this._running = false;
  }

  send(ws: WebSocket, message: BridgeMessage): void {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    }
  }

  broadcast(message: BridgeMessage): number {
    const data = JSON.stringify(message);
    let sent = 0;
    for (const [ws, state] of this.clients) {
      if (state.authed && ws.readyState === WebSocket.OPEN) {
        ws.send(data);
        sent += 1;
      }
    }
    return sent;
  }

  request(
    method: string,
    payload: Record<string, unknown> = {},
    timeoutMs = 8000,
  ): Promise<unknown> {
    const requestId = randomUUID();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(requestId);
        reject(new Error(`Request ${method} timed out`));
      }, timeoutMs);
      this.pending.set(requestId, { resolve, reject, timer });
      const sent = this.broadcast({
        type: "Request",
        requestId,
        method,
        payload,
      });
      if (sent === 0) {
        clearTimeout(timer);
        this.pending.delete(requestId);
        reject(new Error(`No authed client for ${method}`));
      }
    });
  }

  onMessage(handler: MessageHandler): () => void {
    this.handlers.add(handler);
    return () => {
      this.handlers.delete(handler);
    };
  }
}
