import { describe, expect, test } from "bun:test";
import {
  formatInspectElement,
  performanceAuditHtml,
  previewDiffBase,
} from "../performance-audit-view";

describe("editor message fixtures", () => {
  test("writes every computed style and the full html", () => {
    const html = "x".repeat(800);
    const text = formatInspectElement({
      selector: "#main",
      html,
      computedStyles: { color: "red", display: "flex" },
    });
    expect(text).toContain(html);
    expect(text).toContain("color: red");
    expect(text).toContain("display: flex");
    expect(text).not.toContain("x".repeat(500) + "…");
  });

  test("uses payload.original as the diff base", () => {
    expect(previewDiffBase("before", "document")).toBe("before");
    expect(previewDiffBase("", "document")).toBe("document");
    expect(previewDiffBase(undefined, "document")).toBe("document");
  });

  test("lists every opportunity title in the webview html", () => {
    const html = performanceAuditHtml({
      metrics: [
        { metric: "LCP", value: 120, rating: "good" },
        { metric: "CLS", value: 0.02, rating: "good" },
      ],
      opportunities: [
        { id: "a", title: "Reduce unused CSS", savingsMs: 40 },
        { id: "b", title: "Serve images in next-gen formats", savingsMs: 80 },
      ],
    });
    expect(html).toContain("LCP");
    expect(html).toContain("CLS");
    expect(html).toContain("Reduce unused CSS");
    expect(html).toContain("Serve images in next-gen formats");
  });
});
