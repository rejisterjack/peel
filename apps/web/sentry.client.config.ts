import * as Sentry from "@sentry/nextjs";

/**
 * Client-side Sentry initialization.
 *
 * Activates only when `NEXT_PUBLIC_SENTRY_DSN` is set, so dev and CI without
 * a DSN don't try to send events. The unconditional `@sentry/nextjs` import
 * is intentional — the package is now in `dependencies`, not optional.
 */
export function initClientSentry(): void {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    release: process.env.NEXT_PUBLIC_SENTRY_RELEASE,
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 1.0,
    debug: false,
    sendDefaultPii: false,
    ignoreErrors: [
      "top.GLOBALS",
      "ResizeObserver loop limit exceeded",
      "ResizeObserver loop completed with undelivered notifications",
      "Network request failed",
      "Load failed",
    ],
  });
}

/** @deprecated Use initClientSentry from instrumentation-client.ts. */
export function register(): void {
  initClientSentry();
}

export const onRequestError = Sentry.captureRequestError;
