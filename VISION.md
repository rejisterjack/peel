# Peel

A browser extension that gives frontend engineers a unified visual toolkit
for inspecting, measuring, and fixing pages — with a direct line back to
the editor. Free, MIT-licensed, and works entirely offline.

---

## The problem

Visual frontend debugging is broken by fragmentation. A typical frontend
engineer has six to eight extensions installed: one for outlines, one for
fonts, one for spacing, one for contrast, one for color, one for measuring.
Each was reasonable the day it was installed. Together they cost memory,
create conflicting shortcuts, and accumulate trust risk. A wave of extension
acquisitions turned once-trusted tools into adware. Manifest V2 is being
retired, so many of these tools are simply going to stop working.

Chrome DevTools handles source, network, and runtime inspection well. It
does not give a cohesive on-page view of spacing, stacking, typography,
contrast, and component cost while you are looking at a live page. Those
checks often happen in CI, after the pull request is already open, when
fixing them costs the most.

Peel replaces that pile of extensions with one tool that earns and keeps
your trust.

---

## Who it is for

**Primary:** Working frontend engineers who debug layout, CSS, accessibility,
and performance in the browser every day.

**Secondary:** Designers and reviewers who need the same picture without
learning a second toolchain.

The person we build for already has a browser and an editor open. They want
a tool they can invoke by name, see drawn on the page, and dismiss. It
should work on a laptop with no account and no API key.

---

## What it is

Peel is a browser extension. Everything else exists to support it.

| Surface | Role |
|---|---|
| **Browser extension** | The product. Visual inspection tools — spacing, stacking, typography, contrast, focus order, performance — behind a single command palette. Manifest V3. Chrome, Edge, Brave, Firefox. |
| **VS Code bridge** | A loopback WebSocket connecting what you see on the page to the file you edit. Jump to source, apply a fix, preview a diff. |
| **Website** | Documentation, per-tool pages, and distribution. The extension never calls home to unlock features. |
| **MCP server** | Optional. Lets AI agents drive the browser for page inspection. The human toolkit does not depend on it in any way. |

---

## Core beliefs

**See it on the page.**
The defining tools draw on the document itself: outlines, spacing, grid,
stacking contexts, focus order, contrast. A panel of numbers is a fallback.
If the answer is spatial, the tool should be spatial.

**One interaction model.**
One command palette, one shortcut scheme, one place to turn a tool on.
The person types what they want and it runs on the current tab. Every tool
follows the same pattern.

**Local by default.**
Tools run in the browser. Page content, screenshots, and session data stay
on the machine. Nothing phones home to make the toolkit function. Telemetry
is off unless the person turns it on explicitly.

**Free with no gates.**
MIT licensed. No paid tier, no license key, no subscription, no team plan.
Every tool works for everyone, always. This does not change.

**The editor is part of the loop.**
Seeing a bug on the page is half the job. The fix has to land in the file.
A finding that cannot reach the editor is an unfinished tool.

**AI assists. It does not gate.**
Every visual tool works without a model configured. AI analysis and
suggestions run only when the person sets up a provider and explicitly asks.
Disabling AI removes that feature. It does not degrade anything else.

**Open source is the trust model.**
One auditable codebase replaces twelve vendors you cannot read. The project
stays small, dependency-light, and free of a hidden control plane. A
contributor should be able to add a tool by following the extension's own
patterns, without learning a private platform.

**Permissions are earned, not assumed.**
Host access is requested when a tool is activated, scoped to the origin it
needs, and explained in plain language. A new tool does not justify a new
always-on permission.

---

## What done looks like

- A developer uninstalls their pile of single-purpose extensions and keeps
  this one.
- A layout or stacking bug is understood on the page in seconds, and the
  fix lands in the source file through the bridge in one gesture.
- An accessibility or contrast failure is visible before the pull request,
  not in CI after it.
- Someone reading the repository finds no license check, no required account,
  and no network call the tools depend on to function.
- The Chrome Web Store page, the Firefox listing, and the documentation all
  tell the same story this document tells.

---

## Where it grows

**Visual depth first.**
Stacking contexts, flex and grid, spacing, typography, design tokens, focus
order, contrast, and component render cost. These are the reasons to reach
for Peel instead of DevTools.

**The editor loop.**
Jump to source, apply a fix, and surface a diagnostic should feel like one
gesture, not a setup ritual.

**Framework awareness.**
React, Vue, Angular, and Svelte component inspection where the page exposes
a component tree. Overlay tools stay useful on any site. Shadow DOM and
cross-origin iframes degrade in documented ways rather than pretending to
see through the browser's security model.

**Handoff artifacts.**
Screenshots, site reports, and structured exports — JSON, Markdown, SARIF
— so a finding survives the debugging session and can be attached to a pull
request when the person asks.

Agent features stay optional and standards-based. They do not pull Peel
toward a hosted copilot, a required key, or a telemetry business.

---

## Decision filter

Before building anything, ask:

1. Can the person see the answer on the page?
2. Does it work with the website and every LLM turned off?
3. Does it land in the editor, or is it only a picture?
4. Does it ask for less trust than the extensions it replaces?
5. Would we ship it if we could never charge for it?

If the answer to any of these is no, it does not belong in Peel.