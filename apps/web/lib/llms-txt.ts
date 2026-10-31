import { catalogTools, TOOL_COUNT } from "@/data/tools";
import { SITE_URL, GITHUB_URL, GITHUB_RELEASES_URL, FIREFOX_ADDONS_URL } from "@/lib/site";

/**
 * Generators for llms.txt and llms-full.txt — the emerging convention
 * (llmstxt.org) for giving LLMs a curated, markdown map of a site.
 */

export function buildLlmsTxt(): string {
  const lines: string[] = [];
  lines.push(`# Peel`);
  lines.push("");
  lines.push(
    `> A free, open-source (MIT) Manifest V3 browser extension that bundles ${TOOL_COUNT} professional visual debugging tools for frontend developers into one package: CSS overlays, accessibility auditing, performance profiling, DOM/component inspection, design-token extraction, and AI-assisted fixes. Processing runs locally in the browser. Anonymous tool-activation counts are sent only if telemetry is turned on.`,
  );
  lines.push("");
  lines.push(`## Key facts`);
  lines.push("");
  lines.push(`- Product name: Peel`);
  lines.push(`- Website: ${SITE_URL}`);
  lines.push(`- Source code: ${GITHUB_URL} (MIT)`);
  lines.push(`- Price: Free, no paid tiers, no subscriptions, no account required`);
  lines.push(`- Browsers: Chrome 91+, Brave, Edge, Firefox`);
  lines.push(`- Install (Chrome/Edge/Brave): ${GITHUB_RELEASES_URL}`);
  lines.push(`- Install (Firefox): ${FIREFOX_ADDONS_URL}`);
  lines.push(`- Manifest V3 compliant, privacy-first: all tools run locally`);
  lines.push(`- Tool count: ${catalogTools().length} (alias landings are not counted)`);
  lines.push("");
  lines.push(`## Tools (${catalogTools().length})`);
  lines.push("");
  for (const tool of catalogTools()) {
    lines.push(`- [${tool.name}](${SITE_URL}/tools/${tool.slug}): ${tool.tagline}`);
  }
  lines.push("");
  lines.push(`## Optional`);
  lines.push("");
  lines.push(`- [Full tool reference (llms-full.txt)](${SITE_URL}/llms-full.txt): complete descriptions, features, FAQs for all tools`);
  lines.push(`- [Blog](${SITE_URL}/blog): debugging guides and workflow articles`);
  lines.push(`- [Comparisons](${SITE_URL}/compare): honest alternatives-to pages (Pesticide, WhatFont, axe DevTools, …)`);
  lines.push("");
  return lines.join("\n");
}

export function buildLlmsFullTxt(): string {
  const lines: string[] = [];
  lines.push(`# Peel — full tool reference`);
  lines.push("");
  lines.push(`> Complete machine-readable reference for all ${catalogTools().length} tools in the Peel browser extension. Source of truth: ${SITE_URL}`);
  lines.push("");
  for (const tool of catalogTools()) {
    lines.push(`## ${tool.name}`);
    lines.push("");
    lines.push(`URL: ${SITE_URL}/tools/${tool.slug}`);
    lines.push("");
    lines.push(tool.description);
    lines.push("");
    if (tool.features.length) {
      lines.push(`### Features`);
      lines.push("");
      for (const f of tool.features) {
        lines.push(`- **${f.title}**: ${f.description}`);
      }
      lines.push("");
    }
    if (tool.howItWorks.length) {
      lines.push(`### How it works`);
      lines.push("");
      tool.howItWorks.forEach((s, i) => {
        lines.push(`${i + 1}. **${s.title}**: ${s.description}`);
      });
      lines.push("");
    }
    if (tool.faq.length) {
      lines.push(`### FAQ`);
      lines.push("");
      for (const item of tool.faq) {
        lines.push(`**Q: ${item.question}**`);
        lines.push("");
        lines.push(item.answer);
        lines.push("");
      }
    }
    if (tool.relatedTools.length) {
      lines.push(`### Related tools`);
      lines.push("");
      for (const slug of tool.relatedTools) {
        lines.push(`- ${SITE_URL}/tools/${slug}`);
      }
      lines.push("");
    }
    lines.push(`---`);
    lines.push("");
  }
  return lines.join("\n");
}
