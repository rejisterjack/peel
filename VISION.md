# Vision — Frontend Dev Helper

A frontend engineer installs one extension and can see, measure, and fix the
page in place — then land that fix in the editor. No pile of abandoned
plugins. No license server. No model required for the tools to work.

This document is the product compass. Execution status lives in
[`MASTER_PLAN.md`](MASTER_PLAN.md) and [`MASTER_PLAN_EXT.md`](MASTER_PLAN_EXT.md).
If a decision conflicts with what is written here, change this document on
purpose. Do not carve out a quiet exception.

---

## The problem

Visual frontend work has been split across a graveyard of single-purpose
browser extensions: one for outlines, one for fonts, one for color, one for
contrast, one for measuring, one for screenshots. Each was reasonable on the
day it was installed. Together they cost memory, conflicting shortcuts,
review surface, and trust. A wave of extension buyouts turned popular tools
into adware. Browsers are now turning off Manifest V2, so many of those tools
are simply going to stop.

Chrome DevTools remains the place for source, network, and deep runtime
inspection. It does not give a cohesive, on-page way to see spacing, stacking,
type, contrast, and component cost while you are looking at the page. Those
checks often wait for CI, after the pull request is already open.

The job is to put that visual layer back in one place a person can audit,
and to connect what they see on the page to the file they will actually edit.

## Who it is for

Working frontend engineers who debug layout, CSS, accessibility, and
performance in the browser every day. Also designers and reviewers who live
in the rendered page and need the same picture without learning a second
toolchain.

The person we optimize for already has a browser and an editor open. They
want a tool they can invoke by name, see drawn on the page, and dismiss.
They should be able to do that on a laptop with no account and no API key.

AI coding agents are a secondary audience. An optional, vendored Chrome
DevTools MCP server can drive the browser for an agent. That surface exists
so agents can inspect a page. It is not the product, and the human toolkit
does not depend on it.

## The product

Frontend Dev Helper is a free, MIT-licensed toolkit. The browser extension is
the product. Everything else exists to support it.

| Surface | Role |
| --- | --- |
| **Browser extension** (`apps/ext`) | Fifty visual tools — inspection, CSS, performance, accessibility, utilities — plus optional AI assist. Manifest V3. Chrome, Edge, Brave, and Firefox. Overlays, a command palette, a DevTools pane, and a side panel. |
| **VS Code bridge** (`apps/vsx`) | Loopback WebSocket on `127.0.0.1`. Jump to source, apply a fix, preview a diff, publish diagnostics. The page and the file are one loop. |
| **Web app** (`apps/web`) | Marketing site, per-tool pages, accounts, and referrals. Distribution and explanation. The extension does not call it to unlock features. |
| **MCP server** (`apps/mcp`) | Vendored Chrome DevTools MCP. Optional agent surface. Not required to use any tool. |

Shared packages (`bridge-protocol`, `profiler-contract`, `profiler-analyzer`)
keep the wire format and the React profiler analysis honest and testable
outside the browser.

The extension stays useful when the website, the account system, and every
language model are unreachable.

## Beliefs

These are the rules a new tool, permission, or dependency has to satisfy.

**See it on the page.** The distinctive tools draw on the document: outlines,
spacing, grid, stacking contexts, focus order, contrast. A panel of numbers
is a fallback. If the answer is spatial, the tool should be spatial.

**One interaction model.** One palette, one shortcut scheme, one place to
turn a tool on. The person types what they want — contrast, grid, z-index —
and it runs on the current tab. Fifty tools, one way to invoke them.

**Local by default.** Tools run in the browser. Page content, screenshots,
session recordings, and baselines stay on the machine. Credentials (AI keys,
GitHub token, bridge secret) are encrypted at rest. The bridge binds
loopback only and authenticates every message. Telemetry is off unless the
person turns it on. Nothing phones home to make the toolkit function.

**Free, with no entitlement check.** MIT. No paid tier, no license key, no
subscription, no team plan. Referrals live on the website as a way to spread
the project. They never gate a tool.

**The editor is part of the loop.** Seeing a bug on the page is half the job.
Jump to the source, apply the CSS or the fix, and surface the diagnostic in
the editor. A finding that cannot land in a file is an unfinished tool.

**AI assists. It does not gate.** Every visual tool works with no model. AI
analysis, suggestions, and fixes run only when the person configures a
provider — including a local model — and explicitly asks. The page is sent
to that provider at that moment, and nowhere else. Disabling AI removes the
feature. It does not degrade the rest of the extension.

**Permissions are earned.** Host access exists because a visual tool has to
run on the page being inspected. It is requested when a tool is activated,
scoped to that origin, and explained. A new tool does not justify a new
always-on permission.

**A shorter catalog of tools that work beats a longer list of names.** Fifty
is a commitment to coverage, not a score to inflate. A tool ships when it
does the job its name claims, on real pages, including single-page apps.
Depth on stacking, layout, type, contrast, and render cost matters more than
another utility that duplicates DevTools.

**Open source is the trust model.** One codebase a person can read replaces
twelve vendors they cannot. Supply-chain risk is why the project stays
small, auditable, and free of a hidden control plane.

## What good looks like

- A developer uninstalls the single-purpose extensions and keeps this one.
- A layout or stacking bug is understood on the page in seconds, and the edit
  lands in the source file through the bridge.
- An accessibility or contrast failure is visible in the tab, before the pull
  request, not only in CI.
- Someone reading the repository finds no license check, no required account,
  and no network call the tools need in order to run.
- A contributor can add a tool by following the extension's own patterns,
  without learning a private platform or a billing integration.
- The Chrome Web Store, Firefox Add-ons, and the docs tell the same story
  this document tells.

## Where it should grow

Grow the things DevTools does not make cohesive, and the loop back to the
editor.

- **Visual depth.** Stacking contexts, flex and grid, spacing, type, design
  tokens, focus order, contrast, and React render cost. These are the
  reasons to open the extension instead of the built-in DevTools.
- **The bridge.** Jump to source, apply a fix, preview a diff, and publish
  diagnostics should feel like one gesture, not a setup ritual. The wire
  protocol stays explicit and validated.
- **Honest coverage.** Framework-aware inspection (React, Vue, Angular,
  Svelte) where the page actually exposes a component tree. Overlay tools
  stay useful on any site. Shadow DOM and cross-origin iframes degrade
  in documented ways rather than pretending to see through the browser's
  security model.
- **Reports a person can hand off.** Site reports, screenshots, and exports
  (JSON, Markdown, SARIF, and the like) exist so a finding survives the
  debugging session and can be shared or posted to a pull request when the
  person asks.
- **Distribution.** Store listings, per-tool pages, and the command palette
  are how someone discovers a capability. Marketing explains the toolkit.
  It does not become a second product.

Agent features stay optional and standards-based. They do not pull the
extension toward a hosted copilot, a required key, or a telemetry business.

## Decision filter

When choosing what to build, ask:

1. Can the person see the answer on the page?
2. Does it work with the website and every LLM turned off?
3. Does it land in the editor, or is it only a picture?
4. Does it ask for less trust than the extensions it replaces?
5. Would we still ship it if we could not charge for it?

If the answer to the last question is no, it does not belong in this project.
