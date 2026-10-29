import type { ToolDefinition } from "../types";
import {
  addOverlayElement,
  removeOverlayElement,
} from "../../content/overlay-manager";

export interface SvelteInstanceInfo {
  name: string;
  state: Record<string, unknown>;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object") return null;
  return value as Record<string, unknown>;
}

function stateFromInstance(inst: Record<string, unknown>): Record<string, unknown> {
  const dollar = asRecord(inst.$$);
  const ctx = asRecord(inst.ctx) ?? asRecord(dollar?.ctx);
  if (ctx) {
    const state: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(ctx)) {
      if (typeof value === "function") continue;
      state[key] = value;
    }
    return state;
  }
  const capture = inst.$capture_state;
  if (typeof capture === "function") {
    try {
      const captured = asRecord(capture.call(inst));
      if (captured) return captured;
    } catch {
      // Instance capture can throw if the component is already destroyed.
    }
  }
  return {};
}

function nameFromInstance(inst: Record<string, unknown>): string {
  const component = asRecord(inst.component);
  const ctor = asRecord(inst.constructor);
  const name =
    (typeof component?.name === "string" && component.name) ||
    (typeof inst.name === "string" && inst.name) ||
    (typeof ctor?.name === "string" && ctor.name !== "Object" && ctor.name) ||
    "SvelteComponent";
  return name;
}

/**
 * Read a Svelte component instance when the runtime attached one to the element.
 * Closed or unattached instances stay unread.
 */
export function readSvelteInstance(element: Element): SvelteInstanceInfo | null {
  let node: Element | null = element;
  while (node) {
    const bag = node as Element & Record<string, unknown>;
    for (const key of Object.keys(bag)) {
      if (key !== "$$" && !key.startsWith("__svelte")) continue;
      const inst = asRecord(bag[key]);
      if (!inst) continue;
      return { name: nameFromInstance(inst), state: stateFromInstance(inst) };
    }
    node = node.parentElement;
  }
  return null;
}

export const svelteStatePanel: ToolDefinition = {
  id: "svelte-state-panel",
  name: "Svelte State Panel",
  description:
    "Inspect Svelte component state when the runtime attached an instance to the element",
  category: "inspection",
  icon: "Hexagon",
  configSchema: {
    liveUpdate: { type: "boolean", label: "Live Updates", default: true },
  },
  run: (ctx, config) => {
    const liveUpdate = (config?.liveUpdate as boolean) ?? true;
    const panel = document.createElement("div");
    panel.style.cssText =
      "position:fixed;top:16px;right:16px;width:360px;max-height:70vh;overflow:auto;" +
      "z-index:2147483647;background:#1e1e2e;color:#cdd6f4;font:13px/1.4 system-ui,sans-serif;" +
      "border:1px solid #45475a;border-radius:12px;padding:12px;box-shadow:0 8px 32px rgba(0,0,0,.45);";
    const title = document.createElement("div");
    title.textContent = "Svelte State";
    title.style.cssText = "font-weight:600;margin-bottom:8px;";
    const body = document.createElement("pre");
    body.style.cssText =
      "margin:0;white-space:pre-wrap;font:12px/1.4 ui-monospace,monospace;color:#a6adc8;";
    body.textContent =
      "Hover an element. If Svelte attached an instance, its state is shown here.";
    panel.append(title, body);
    addOverlayElement(panel);

    const onMove = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element) || panel.contains(target)) return;
      const info = readSvelteInstance(target);
      if (!info) {
        body.textContent =
          "No Svelte instance is attached to this element.";
        return;
      }
      body.textContent = `${info.name}\n${JSON.stringify(info.state, null, 2)}`;
    };

    const eventName = liveUpdate ? "mousemove" : "click";
    document.addEventListener(eventName, onMove, true);
    const cleanup = () => {
      document.removeEventListener(eventName, onMove, true);
      removeOverlayElement(panel);
    };
    ctx.onInvalidated(cleanup);
    return cleanup;
  },
};
