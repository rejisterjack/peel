export interface PerformanceAuditViewPayload {
  url?: string;
  overallScore?: number;
  metrics?: Array<{ metric: string; value: number; rating: string }>;
  opportunities?: Array<{ id: string; title: string; savingsMs: number }>;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function performanceAuditHtml(
  payload: PerformanceAuditViewPayload,
): string {
  const metrics = (payload.metrics ?? [])
    .map(
      (metric) =>
        `<li>${escapeHtml(metric.metric)}: ${metric.value} (${escapeHtml(metric.rating)})</li>`,
    )
    .join("");
  const opportunities = (payload.opportunities ?? [])
    .map((item) => `<li>${escapeHtml(item.title)}</li>`)
    .join("");
  return `<!DOCTYPE html><html><body><h1>Metrics</h1><ul>${metrics}</ul><h1>Opportunities</h1><ul>${opportunities}</ul></body></html>`;
}

export function formatInspectElement(payload: {
  selector?: string;
  html?: string;
  computedStyles?: Record<string, string>;
}): string {
  const lines = [
    `Selector: ${payload.selector ?? ""}`,
    `HTML: ${payload.html ?? "(none)"}`,
  ];
  for (const [key, value] of Object.entries(payload.computedStyles ?? {})) {
    lines.push(`${key}: ${value}`);
  }
  lines.push("---");
  return lines.join("\n");
}

export function previewDiffBase(
  original: unknown,
  documentText: string,
): string {
  return typeof original === "string" && original.length > 0
    ? original
    : documentText;
}
