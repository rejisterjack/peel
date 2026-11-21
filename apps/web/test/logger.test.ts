import { describe, expect, it } from "vitest";
import { logger } from "@/lib/logger";

describe("logger", () => {
  it("logs an error object without throwing", () => {
    expect(() =>
      logger.error("Registration email failed", {
        requestId: "req",
        error: new Error("RESEND_API_KEY not configured"),
      }),
    ).not.toThrow();
  });
});
