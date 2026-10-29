import * as Sentry from "@sentry/nextjs";

export function reportError(error: unknown): void {
  Sentry.captureException(error);
}
