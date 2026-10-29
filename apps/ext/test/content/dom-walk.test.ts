import { describe, expect, it } from "vitest";
import {
  domWalkSkipLine,
  walkOpenShadowAndSameOriginFrames,
} from "@/content/dom-walk";

describe("walkOpenShadowAndSameOriginFrames", () => {
  it("includes an open shadow child and a same-origin frame, and counts a cross-origin frame", () => {
    const host = document.createElement("div");
    const shadow = host.attachShadow({ mode: "open" });
    const inner = document.createElement("span");
    inner.id = "shadow-child";
    shadow.appendChild(inner);

    const same = document.createElement("iframe");
    const cross = document.createElement("iframe");
    document.body.append(host, same, cross);

    const sameDoc = document.implementation.createHTMLDocument("same");
    const framed = sameDoc.createElement("p");
    framed.id = "framed";
    sameDoc.body.appendChild(framed);
    Object.defineProperty(same, "contentDocument", { value: sameDoc });
    Object.defineProperty(cross, "contentDocument", {
      get() {
        throw new Error("cross-origin");
      },
    });

    const seen: string[] = [];
    const stats = walkOpenShadowAndSameOriginFrames(document.body, (el) => {
      if (el.id) seen.push(el.id);
    });

    expect(seen).toContain("shadow-child");
    expect(seen).toContain("framed");
    expect(stats.crossOriginFrames).toBe(1);
    expect(domWalkSkipLine(stats)).toContain("1 cross-origin");
  });
});
