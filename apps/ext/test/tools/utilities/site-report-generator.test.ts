import { describe, beforeEach, vi, it, expect } from 'vitest';
import {
  siteReportDownload,
  siteReportGenerator,
} from '@/tools/utilities/site-report-generator';
import type { AuditResult } from '@/lib/export-service';
import { runStandardToolTests } from '../../helpers';

const sample: AuditResult = {
  url: "https://example.com",
  timestamp: 1,
  overallScore: 80,
  categories: {
    accessibility: { score: 80, issues: [] },
    performance: { score: 80, issues: [] },
    seo: { score: 80, issues: [] },
    bestPractices: { score: 80, issues: [] },
    css: { score: 0, issues: [] },
  },
};

describe('siteReportGenerator', () => {
  beforeEach(() => {
    document.body.textContent = '';
    vi.clearAllMocks();
  });

  runStandardToolTests(siteReportGenerator, {
    id: 'site-report-generator',
    name: 'Site Report Generator',
    category: 'utility',
    icon: 'FileBarChart',
  }, {
    includePerformance: true,
    includeAccessibility: true,
    includeSEO: true,
    includeBestPractices: true,
    format: 'html',
  });

  it.each([
    ["html", "text/html", "html"],
    ["json", "application/json", "json"],
    ["markdown", "text/markdown", "md"],
    ["sarif", "application/json", "sarif"],
  ])("selects %s and matches the download MIME type", (format, mime, ext) => {
    const file = siteReportDownload(format, sample);
    expect(file.mime).toBe(mime);
    expect(file.extension).toBe(ext);
  });

  it("sarif export is valid JSON with a SARIF schema", () => {
    const file = siteReportDownload("sarif", sample);
    const parsed = JSON.parse(file.body) as { version?: string; $schema?: string };
    expect(parsed.version).toBe("2.1.0");
    expect(parsed.$schema).toContain("sarif");
  });

  it('should have report section toggles', () => {
    const schema = siteReportGenerator.configSchema;
    expect(schema.includePerformance).toBeDefined();
    expect(schema.includeAccessibility).toBeDefined();
    expect(schema.includeSEO).toBeDefined();
    expect(schema.includeBestPractices).toBeDefined();
  });
});
