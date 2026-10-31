import { beforeEach, describe, expect, it, vi } from "vitest";

const init = vi.fn();
const captureException = vi.fn();

vi.mock("@sentry/nextjs", () => ({
  init: (...args: unknown[]) => init(...args),
  captureException: (...args: unknown[]) => captureException(...args),
  captureRequestError: vi.fn(),
}));

describe("Sentry init", () => {
  beforeEach(() => {
    init.mockClear();
    captureException.mockClear();
    delete process.env.NEXT_PUBLIC_SENTRY_DSN;
    vi.resetModules();
  });

  it("initializes the client without a runtime guard when no DSN is set", async () => {
    const { initClientSentry } = await import("../sentry.client.config");
    initClientSentry();
    expect(init).toHaveBeenCalledWith(
      expect.objectContaining({ dsn: undefined, sendDefaultPii: false }),
    );
  });

  it("initializes the server SDK when the Node runtime calls register", async () => {
    process.env.NEXT_RUNTIME = "nodejs";
    process.env.NEXT_PUBLIC_SENTRY_DSN = "https://public@sentry.example/1";
    const { register } = await import("../sentry.server.config");
    await register();
    expect(init).toHaveBeenCalledWith(
      expect.objectContaining({
        dsn: "https://public@sentry.example/1",
        sendDefaultPii: false,
      }),
    );
    delete process.env.NEXT_RUNTIME;
  });

  it("reportError forwards to captureException", async () => {
    const { reportError } = await import("../lib/report-error");
    const error = new Error("render failed");
    reportError(error);
    expect(captureException).toHaveBeenCalledWith(error);
  });
});
