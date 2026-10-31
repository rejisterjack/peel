import { beforeEach, describe, expect, it, vi } from "vitest";
import { useSettingsStore } from "@/stores/use-settings-store";
import { flushTelemetry, trackEvent } from "@/lib/telemetry";

let localStore: Record<string, unknown> = {};

beforeEach(() => {
  localStore = {};
  useSettingsStore.getState().updateSetting("enableTelemetry", false);
  (global.chrome as any).storage.local = {
    get: (keys?: string | string[]) => {
      if (keys === undefined) return Promise.resolve({ ...localStore });
      const arr = Array.isArray(keys) ? keys : [keys];
      const out: Record<string, unknown> = {};
      for (const k of arr) if (k in localStore) out[k] = localStore[k];
      return Promise.resolve(out);
    },
    set: (obj: Record<string, unknown>) => {
      Object.assign(localStore, obj);
      return Promise.resolve();
    },
    remove: (keys: string | string[]) => {
      const arr = Array.isArray(keys) ? keys : [keys];
      for (const k of arr) delete localStore[k];
      return Promise.resolve();
    },
  };
  vi.stubGlobal("fetch", vi.fn());
});

describe("telemetry", () => {
  it("does not call Plausible when telemetry is off", async () => {
    await trackEvent("tool_activated", { tool: "dom-outliner" });
    await flushTelemetry();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("buffers an event and flushes it to Plausible when telemetry is on", async () => {
    useSettingsStore.getState().updateSetting("enableTelemetry", true);
    vi.mocked(fetch).mockResolvedValue(new Response(null, { status: 202 }));

    await trackEvent("tool_activated", { tool: "dom-outliner" });
    await flushTelemetry();

    expect(fetch).toHaveBeenCalledTimes(1);
    const body = JSON.parse(
      (vi.mocked(fetch).mock.calls[0]?.[1] as RequestInit).body as string,
    );
    expect(body.name).toBe("tool_activated");
    expect(body.domain).toBe("frontenddevhelper.com");
    expect(body.url).toBe("https://frontenddevhelper.com/extension");
    expect(body.props).toEqual({ tool: "dom-outliner" });
    const stored = localStore["fdh-telemetry"] as unknown[];
    expect(stored).toEqual([]);
  });
});
