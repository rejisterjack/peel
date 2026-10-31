import { describe, expect, it } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { toolCount, toolMetadata } from "../../tools/metadata";
import { loadTool } from "../../tools/lazy-registry";

/**
 * Lightweight post-build smoke checks (extension e2e stand-in).
 * Full Chromium extension automation is finicky on CI; these assertions
 * catch manifest/permission/catalog regressions after `bun run build`.
 */
describe("extension build smoke", () => {
  const manifestPath = join(
    process.cwd(),
    ".output/chrome-mv3/manifest.json",
  );

  it("toolCount matches product claim (52)", () => {
    expect(toolCount).toBe(52);
  });

  it("loads copy-as-component and svelte-state-panel", async () => {
    const copy = await loadTool("copy-as-component");
    const svelte = await loadTool("svelte-state-panel");
    expect(copy?.id).toBe("copy-as-component");
    expect(typeof copy?.run).toBe("function");
    expect(svelte?.id).toBe("svelte-state-panel");
    expect(typeof svelte?.run).toBe("function");
  });

  it("web SEO catalog includes every extension tool id", () => {
    const toolsTsPath = join(process.cwd(), "../web/data/tools.ts");
    expect(existsSync(toolsTsPath)).toBe(true);
    const toolsTs = readFileSync(toolsTsPath, "utf8");
    for (const id of Object.keys(toolMetadata)) {
      expect(toolsTs, `missing SEO page for ${id}`).toContain(`slug: "${id}"`);
    }
    expect(toolsTs).toContain("export const TOOL_COUNT = 52");
  });

  it("built manifest uses optional host permissions (opt-in)", () => {
    if (!existsSync(manifestPath)) {
      // Build not present — skip in unit-only runs; ext-ci builds first.
      return;
    }
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as {
      optional_host_permissions?: string[];
      host_permissions?: string[];
      permissions?: string[];
    };
    expect(manifest.permissions).toContain("activeTab");
    expect(manifest.optional_host_permissions?.length).toBeGreaterThan(0);
    expect(manifest.host_permissions ?? []).toHaveLength(0);
  });

  it("firefox manifest carries the gecko id and the same permission posture", () => {
    const config = readFileSync(join(process.cwd(), "wxt.config.ts"), "utf8");
    expect(config).toContain('id: "peel@frontenddevhelper.com"');
    const built = [
      ".output/firefox-mv3/manifest.json",
      ".output/firefox-mv2/manifest.json",
    ]
      .map((relative) => join(process.cwd(), relative))
      .find((candidate) => existsSync(candidate));
    if (!built) return;
    const manifest = JSON.parse(readFileSync(built, "utf8")) as {
      browser_specific_settings?: { gecko?: { id?: string } };
      optional_host_permissions?: string[];
      host_permissions?: string[];
      permissions?: string[];
    };
    expect(manifest.browser_specific_settings?.gecko?.id).toBe(
      "peel@frontenddevhelper.com",
    );
    expect(manifest.permissions).toContain("activeTab");
    expect(manifest.host_permissions ?? []).toHaveLength(0);
    if (manifest.optional_host_permissions) {
      expect(manifest.optional_host_permissions.length).toBeGreaterThan(0);
    }
  });
});
