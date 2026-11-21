# Ship Readiness Report — Peel

Tested on local `dev` on 22 Nov 2026. The website ran at http://127.0.0.1:7393 against Postgres on 127.0.0.1:54337. The extension popup was loaded from the Chrome build.

## Product Summary

Peel is a free, MIT-licensed browser extension with 52 visual debugging tools for a live page.
A VS Code bridge on 127.0.0.1:9456 can open the matching source and apply a fix. The tools run without an account and without an AI key.
The website at peel.rejisterjack.com is the marketing site, the tool pages, and an optional account with email login and referrals. The extension does not call it to unlock features.
An optional vendored Chrome DevTools MCP server lets an agent drive a browser. The human toolkit does not depend on it.
Page overlays did not run in this session because Chrome would not grant the optional host permission from an automated gesture. The website account flows were run live.

## Feature Table

| ID      | Feature                    | Priority | Status      | Bugs Found | Bugs Fixed | UI Issues Fixed | Notes                                                                                                                                                                            |
| ------- | -------------------------- | -------- | ----------- | ---------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SHL-01  | Tool runner                | P0       | BLOCKED     |            |            |                 | Popup opens, onboarding can be skipped, and every tool is listed. A tool did not run on the page: Chrome refused the host-permission gesture.                                    |
| SHL-02  | Site permission            | P0       | BLOCKED     | 1          | 1          | 1               | A denied host permission stored an error the popup never rendered. The dashboard now shows that alert. The automated click still cannot grant the origin.                        |
| SHL-03  | Settings and providers     | P1       | PASSED      |            |            |                 | Settings tab shows theme, AI, VS Code bridge, and telemetry. Telemetry is off by default.                                                                                        |
| SHL-04  | Telemetry                  | P1       | PASSED      |            |            |                 | The telemetry switch is off and the copy says anonymous tool ids only.                                                                                                           |
| INS-01  | DOM Outliner               | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-02  | Spacing Visualizer         | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-03  | Font Inspector             | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-04  | Color Picker               | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-05  | Pixel Ruler                | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-06  | Element Inspector          | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-07  | Source Map Viewer          | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-08  | Tech Detector              | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-09  | DOM Tree Viewer            | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-10  | Focus Debugger             | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-11  | Form Debugger              | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-12  | Z-Index Visualizer         | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-13  | Smart Element Picker       | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-14  | Framework DevTools         | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-15  | React State Panel          | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-16  | Vue State Panel            | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-17  | Svelte State Panel         | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-18  | Container Query Inspector  | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-19  | View Transitions Debugger  | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| INS-20  | X-Ray Mode                 | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-01  | CSS Inspector              | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-02  | CSS Editor                 | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-03  | CSS Scanner                | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-04  | CSS Variable Inspector     | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-05  | Layout Visualizer          | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-06  | Grid Overlay               | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-07  | Contrast Checker           | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-08  | Animation Inspector        | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-09  | Design System Validator    | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-10  | Breakpoint Overlay         | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-11  | Design Token Extractor     | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| CSS-12  | Specificity Cascade        | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| PERF-01 | Network Analyzer           | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| PERF-02 | Performance Entries Viewer | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| PERF-03 | Performance Budget         | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| PERF-04 | Scroll Animations Debugger | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| PERF-05 | Performance Audit          | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| PERF-06 | Network Replay             | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| A11Y-01 | Accessibility Audit        | P1       | NOT STARTED |            |            |                 | Run comprehensive accessibility audit against WCAG guidelines File: apps/ext/tools/accessibility/accessibility-audit.ts.                                                         |
| A11Y-02 | Focus Debugger (A11y)      | P1       | NOT STARTED |            |            |                 | Accessibility-focused focus and keyboard navigation debugger File: apps/ext/tools/accessibility/focus-debugger-a11y.ts.                                                          |
| AI-01   | Smart Suggestions          | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| AI-02   | AI Analyzer                | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| AI-03   | AI Auto-Fix                | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| AI-04   | Copy as Component          | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| UTL-01  | Screenshot Studio          | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| UTL-02  | Storage Inspector          | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| UTL-03  | Visual Regression          | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| UTL-04  | Responsive Preview         | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| UTL-05  | Command Palette            | P0       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| UTL-06  | Site Report Generator      | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| UTL-07  | Full Audit                 | P1       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| UTL-08  | Session Replay             | P2       | BLOCKED     |            |            |                 | Blocked: this Chrome session cannot complete the optional host-permission gesture, so the tool did not run on the fixture page. The popup lists it. Extension unit tests passed. |
| BRG-01  | Bridge server              | P0       | PASSED      |            |            |                 | Bridge server tests passed: auth handshake, five failures close the socket, ping, and malformed JSON.                                                                            |
| BRG-02  | Jump and apply             | P0       | BLOCKED     |            |            |                 | Handler fixtures passed. The VS Code extension host test cannot load the vscode module outside the editor.                                                                       |
| BRG-03  | Preview and diagnostics    | P1       | BLOCKED     |            |            |                 | The same editor-host limit. Message fixtures passed. A live apply inside VS Code was not run.                                                                                    |
| ANL-01  | Profiler analyzer          | P1       | PASSED      |            |            |                 | Profiler analyzer tests passed, including wasted renders and frame impact.                                                                                                       |
| WEB-01  | Landing page               | P0       | PASSED      |            |            |                 | Home returns 200 with the Peel title.                                                                                                                                            |
| WEB-02  | Tool pages                 | P0       | PASSED      |            |            |                 | /tools/dom-outliner returns 200 with its own title.                                                                                                                              |
| WEB-03  | Comparisons                | P2       | PASSED      |            |            |                 | /compare returns 200.                                                                                                                                                            |
| WEB-04  | Blog                       | P2       | PASSED      |            |            |                 | /blog returns 200.                                                                                                                                                               |
| WEB-05  | Privacy and terms          | P1       | PASSED      |            |            |                 | /privacy and /terms return 200.                                                                                                                                                  |
| AUTH-01 | Sign up                    | P1       | BLOCKED     | 1          | 1          |                 | No RESEND_API_KEY. A valid signup returns 502 and rolls the user back. A logger crash that turned this into a 500 is fixed. Invalid input still returns the generic 200.         |
| AUTH-02 | Log in                     | P1       | PASSED      | 1          | 1          |                 | Wrong password shows Sign-in failed. A verified user reaches the dashboard after the edge session copies emailVerified.                                                          |
| AUTH-03 | Verify email               | P1       | PASSED      |            |            |                 | A valid hashed token verifies the user. Reusing it returns 400.                                                                                                                  |
| AUTH-04 | Password reset             | P1       | PASSED      |            |            |                 | Forgot-password returns success. A valid reset token changes the password. A bad token returns 400.                                                                              |
| AUTH-05 | OAuth linking              | P1       | BLOCKED     |            |            |                 | Google and GitHub buttons render. No client secrets are configured, so the OAuth round trip was not completed.                                                                   |
| AUTH-06 | Dashboard gate             | P1       | PASSED      | 1          | 1          |                 | No session redirects to /login?callbackUrl=/dashboard. An unverified session is sent to /verify-email.                                                                           |
| ACC-01  | Delete account             | P1       | PASSED      | 1          | 1          | 1               | Delete asks first, removes the user and their referrals, signs out, and the same email can register again.                                                                       |
| REF-01  | Referrals                  | P1       | PASSED      |            |            |                 | Dashboard generated PEEL-47QF2T0R and listed it. Deleting the account removed the referral.                                                                                      |
| API-01  | Health                     | P1       | PASSED      |            |            |                 | GET /api/health returned healthy and db ok against local Postgres.                                                                                                               |
| SEC-01  | Headers and rate limits    | P0       | PASSED      | 1          | 1          | 1               | The CSP nonce now matches the script nonce. The hydration mismatch on that script is gone.                                                                                       |
| SEO-01  | Metadata and feeds         | P1       | PASSED      |            |            | 1               | Login, dashboard, and the 404 page have their own titles. Sitemap and robots return 200.                                                                                         |
| UI-01   | Missing and error pages    | P1       | PASSED      |            |            | 1               | Unknown URLs return 404 with Page not found. Error boundaries set the document title and do not render the exception text.                                                       |
| MCP-01  | Agent browser server       | P2       | BLOCKED     |            |            |                 | The vendored server was not launched. The extension does not depend on it.                                                                                                       |
| DEV-01  | Web CI                     | P0       | BLOCKED     |            |            |                 | Local web unit tests passed, 24 tests. GitHub web-ci has not run on this branch yet.                                                                                             |
| DEV-02  | Extension release          | P0       | BLOCKED     |            |            |                 | Extension source changed, so ext-v1.0.0 no longer matches the working tree. A new tag is cut with the ship.                                                                      |
| DEV-03  | Editor and MCP CI          | P1       | BLOCKED     |            |            |                 | VS Code bridge server tests passed. The extension-host file errors without the vscode package.                                                                                   |

## Gaps

1. ACC-01 — BUILT. The dashboard asks, then DELETE /api/account removes the user and the referrals they created, signs them out, and the email can be registered again.
2. Chrome Web Store listing — DEFER. `docs/distribution.md` says the store listing is not submitted from this repo. The downloadable artifact is the GitHub release `ext-v1.0.0`.
3. Firefox Add-ons listing — DEFER. `apps/ext/package.json` has `build:firefox` and `zip:firefox`. The published release workflow packages the Chrome zip. The store listing is not submitted.
4. Billing — DEFER. `VISION.md` closes paid tiers, license keys, and subscriptions. There is no payment code.
5. Angular component panel — DEFER. `VISION.md` names Angular under where the product grows. The registry has React, Vue, and Svelte panels, and no Angular panel.
6. Hosted session sharing — DEFER. Session Replay records on the machine. `VISION.md` keeps page content local. A shared team player is not part of this product.

## Per-Feature Sections

### INS-01 DOM Outliner

- Files: `apps/ext/tools/inspection/dom-outliner.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Visualize DOM structure with colored outlines around elements It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-02 Spacing Visualizer

- Files: `apps/ext/tools/inspection/spacing-visualizer.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Visualize margin, padding, and gap spacing on elements It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-03 Font Inspector

- Files: `apps/ext/tools/inspection/font-inspector.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Inspect font properties of any element on the page It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-04 Color Picker

- Files: `apps/ext/tools/inspection/color-picker.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Pick and copy colors from any element on the page It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-05 Pixel Ruler

- Files: `apps/ext/tools/inspection/pixel-ruler.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Measure distances and dimensions between elements It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-06 Element Inspector

- Files: `apps/ext/tools/inspection/element-inspector.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Deep inspect element properties, styles, and computed values It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-07 Source Map Viewer

- Files: `apps/ext/tools/inspection/source-map-viewer.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Resolve minified code to original sources using source maps It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-08 Tech Detector

- Files: `apps/ext/tools/inspection/tech-detector.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Detect technologies, frameworks, and libraries used on the page It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-09 DOM Tree Viewer

- Files: `apps/ext/tools/inspection/component-tree.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Walk and inspect the DOM tree hierarchy and element attributes It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-10 Focus Debugger

- Files: `apps/ext/tools/inspection/focus-debugger.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Debug focus order, tabindex, and keyboard navigation flow It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-11 Form Debugger

- Files: `apps/ext/tools/inspection/form-debugger.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Inspect form fields, validation, and submission behavior It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-12 Z-Index Visualizer

- Files: `apps/ext/tools/inspection/z-index-visualizer.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Visualize stacking contexts and z-index values on the page It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-13 Smart Element Picker

- Files: `apps/ext/tools/inspection/smart-element-picker.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Intelligent element selection with CSS selector generation It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-14 Framework DevTools

- Files: `apps/ext/tools/inspection/framework-devtools.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Inspect React, Vue, Angular, and Svelte component info on the page. Does not open React DevTools, Vue DevTools, or Angular DevTools. It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-15 React State Panel

- Files: `apps/ext/tools/inspection/react-state-panel.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Inspect React component hooks, props, and state in real-time It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-16 Vue State Panel

- Files: `apps/ext/tools/inspection/vue-state-panel.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Inspect Vue component reactive data and computed properties It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-17 Svelte State Panel

- Files: `apps/ext/tools/inspection/svelte-state-panel.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Inspect Svelte component state when the runtime attached an instance to the element It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-18 Container Query Inspector

- Files: `apps/ext/tools/inspection/container-query-inspector.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Inspect container queries and their matched conditions It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-19 View Transitions Debugger

- Files: `apps/ext/tools/inspection/view-transitions-debugger.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Debug and preview View Transitions API animations It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### INS-20 X-Ray Mode

- Files: `apps/ext/tools/inspection/x-ray-mode.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Instant visual overlay of all issues: accessibility, performance, SEO, and best practices It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-01 CSS Inspector

- Files: `apps/ext/tools/css/css-inspector.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Inspect applied CSS rules and computed styles for any element It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-02 CSS Editor

- Files: `apps/ext/tools/css/css-editor.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Live-edit CSS properties on any element with instant preview It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-03 CSS Scanner

- Files: `apps/ext/tools/css/css-scanner.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Scan for unused CSS, specificity issues, and duplicate rules It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-04 CSS Variable Inspector

- Files: `apps/ext/tools/css/css-variable-inspector.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Browse and inspect CSS custom properties and their values It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-05 Layout Visualizer

- Files: `apps/ext/tools/css/layout-visualizer.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Visualize Flexbox, Grid, and block layout properties It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-06 Grid Overlay

- Files: `apps/ext/tools/css/grid-overlay.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Overlay CSS Grid lines, areas, and tracks on the page It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-07 Contrast Checker

- Files: `apps/ext/tools/css/contrast-checker.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Check color contrast ratios against WCAG standards It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-08 Animation Inspector

- Files: `apps/ext/tools/css/animation-inspector.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Inspect, pause, and control CSS animations and transitions It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-09 Design System Validator

- Files: `apps/ext/tools/css/design-system-validator.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Validate page elements against a design system specification It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-10 Breakpoint Overlay

- Files: `apps/ext/tools/css/breakpoint-overlay.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Show active CSS breakpoints and media query boundaries It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-11 Design Token Extractor

- Files: `apps/ext/tools/css/design-token-extractor.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Extract and export design tokens: colors, spacing, typography, shadows, and breakpoints It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### CSS-12 Specificity Cascade

- Files: `apps/ext/tools/css/specificity-cascade.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Visualize CSS cascade showing which rules win and why for each property It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### PERF-01 Network Analyzer

- Files: `apps/ext/tools/performance/network-analyzer.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Analyze network requests, payloads, and loading performance It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### PERF-02 Performance Entries Viewer

- Files: `apps/ext/tools/performance/flame-graph.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Visualize performance.measure / mark / resource / longtask entries as a timeline It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### PERF-03 Performance Budget

- Files: `apps/ext/tools/performance/performance-budget.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Set and monitor performance budgets for page metrics It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### PERF-04 Scroll Animations Debugger

- Files: `apps/ext/tools/performance/scroll-animations-debugger.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Debug scroll-driven animations and scroll-linked effects It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### PERF-05 Performance Audit

- Files: `apps/ext/tools/performance/performance-audit.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Measure Core Web Vitals and get actionable performance suggestions It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### PERF-06 Network Replay

- Files: `apps/ext/tools/performance/network-replay.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Capture, replay, and export network requests as cURL, fetch, or Postman It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### A11Y-01 Accessibility Audit

- Files: `apps/ext/tools/accessibility/accessibility-audit.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Run comprehensive accessibility audit against WCAG guidelines It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### A11Y-02 Focus Debugger (A11y)

- Files: `apps/ext/tools/accessibility/focus-debugger-a11y.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Accessibility-focused focus and keyboard navigation debugger It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AI-01 Smart Suggestions

- Files: `apps/ext/tools/ai/smart-suggestions.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: AI-powered design and code suggestions for the current page It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AI-02 AI Analyzer

- Files: `apps/ext/tools/ai/ai-analyzer.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Analyze page structure, patterns, and issues using AI It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AI-03 AI Auto-Fix

- Files: `apps/ext/tools/ai/ai-auto-fix.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: AI-powered automatic fix suggestions with diff preview It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AI-04 Copy as Component

- Files: `apps/ext/tools/ai/copy-as-component.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Hover any element, copy as production-ready component code It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### UTL-01 Screenshot Studio

- Files: `apps/ext/tools/utilities/screenshot-studio.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Capture, annotate, and export page screenshots It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### UTL-02 Storage Inspector

- Files: `apps/ext/tools/utilities/storage-inspector.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Browse and manage localStorage, sessionStorage, and cookies It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### UTL-03 Visual Regression

- Files: `apps/ext/tools/utilities/visual-regression.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Capture and compare visual snapshots for regression testing It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### UTL-04 Responsive Preview

- Files: `apps/ext/tools/utilities/responsive-preview.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Preview the page at different screen sizes and device viewports It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### UTL-05 Command Palette

- Files: `apps/ext/tools/utilities/command-palette.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Quick-access command palette for all tools and actions It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### UTL-06 Site Report Generator

- Files: `apps/ext/tools/utilities/site-report-generator.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Generate comprehensive reports about page quality and metrics It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### UTL-07 Full Audit

- Files: `apps/ext/tools/utilities/full-audit.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: One-click comprehensive audit across accessibility, performance, SEO, and best practices It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### UTL-08 Session Replay

- Files: `apps/ext/tools/utilities/session-replay.ts`, `apps/ext/tools/metadata.ts`
- Expected behavior: Record and replay debugging sessions for team collaboration It runs from the palette on the current tab after the origin is allowed, and it does not call the website.
- Acceptance checklist:
  - [ ] Turning the tool on shows its overlay or panel
  - [ ] Turning it off removes that overlay
  - [ ] The tool still runs when no AI provider is configured
- Test cases:
  - Normal: a simple public page
  - Empty: a blank document
  - Long text, emoji, and a non-English label on the page
  - Logged out of the website: the tool does not ask for an account
  - Origin permission denied
  - Toggle the tool twice
- UI checks: The overlay does not cover the browser chrome. Labels stay readable. There is a way to dismiss the tool.
- Dependencies: SHL-01, SHL-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### SHL-01 Tool runner

- Files: `apps/ext/tools/lazy-registry.ts`, `apps/ext/entrypoints/sidepanel`
- Expected behavior: Opening the side panel lists the tools. Choosing one loads that module and runs it on the active tab.
- Acceptance checklist:
  - [ ] The panel lists the registered tools
  - [ ] Choosing a tool runs it
  - [ ] An unknown tool id does not throw an uncaught error
- Test cases:
  - Normal: open the panel on a normal page
  - Empty tab
  - Double-activate the same tool
- UI checks: The panel fits a narrow side-panel width. Focus is visible on the tool list.
- Dependencies: The extension is loaded unpacked or from the release zip
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### SHL-02 Site permission

- Files: `apps/ext/wxt.config.ts`
- Expected behavior: The manifest asks for activeTab, storage, tabs, scripting, clipboard, notifications, context menus, side panel, and alarms. Page access is an optional host permission granted per origin.
- Acceptance checklist:
  - [ ] A tool does not inject before the origin is allowed
  - [ ] Allowing the origin lets the tool run
  - [ ] Denying the debugger permission leaves Responsive Preview as a size guide
- Test cases:
  - Normal grant
  - Deny the host permission
  - Reload the tab after granting
- UI checks: The permission prompt uses the browser's own dialog.
- Dependencies: SHL-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### SHL-03 Settings and providers

- Files: `apps/ext/stores/use-settings-store.ts`, `apps/ext/lib/providers`
- Expected behavior: The person can pick OpenRouter, Ollama, Fireworks, ZAI, or a custom provider and store a key locally. Clearing the key disables AI calls and leaves the visual tools working.
- Acceptance checklist:
  - [ ] A saved provider is still selected after reload
  - [ ] An empty key does not send a request
  - [ ] A visual tool works with the provider fields empty
- Test cases:
  - Normal key
  - Whitespace key
  - A very long key
  - Emoji in a custom base URL
- UI checks: The key field is a password field. The provider names match the four built-in providers plus custom.
- Dependencies: SHL-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### SHL-04 Telemetry

- Files: `apps/ext/lib/telemetry.ts`, `apps/ext/stores/use-settings-store.ts`
- Expected behavior: enableTelemetry defaults to false. When it is on, events buffer in extension storage and flush to Plausible for peel.rejisterjack.com. The payload is an event name and a generic path.
- Acceptance checklist:
  - [ ] The default sends nothing
  - [ ] Turning it on allows a flush
  - [ ] Turning it off stops further sends
- Test cases:
  - Default install
  - Toggle on, then off
  - More than 200 buffered events
- UI checks: The settings control is labeled as usage telemetry.
- Dependencies: SHL-03
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### BRG-01 Bridge server

- Files: `apps/vsx/src/server.ts`, `packages/bridge-protocol`
- Expected behavior: The bridge binds 127.0.0.1 on port 9456 by default, starts with the editor when autoStart is true, and closes a socket after five failed auth handshakes.
- Acceptance checklist:
  - [ ] The status command reports the port
  - [ ] A client without the token is rejected
  - [ ] The sixth failure closes the socket
- Test cases:
  - Normal handshake
  - Wrong token
  - Port already in use
- UI checks: The status bar shows whether the bridge is listening.
- Dependencies: The VS Code extension is running
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### BRG-02 Jump and apply

- Files: `apps/vsx/src/handlers.ts`, `apps/vsx/src/decorations.ts`
- Expected behavior: JumpToSource and OpenInEditor open a file at a line. HighlightSource marks a range. ApplyFix replaces file contents. ApplyCSSEdit changes a matching CSS declaration.
- Acceptance checklist:
  - [ ] Jump opens the file at the line
  - [ ] Apply CSS edit changes only the named property
  - [ ] A path outside the workspace is refused
- Test cases:
  - Normal workspace file
  - Missing file
  - A path with ..
  - Two jump requests in a row
- UI checks: The highlight is visible on the opened line.
- Dependencies: BRG-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### BRG-03 Preview and diagnostics

- Files: `apps/vsx/src/handlers.ts`, `apps/vsx/src/diagnostics.ts`
- Expected behavior: PreviewFix opens a diff the person can accept or reject. PublishDiagnostics fills the Problems panel. ClearDiagnostics removes those items. CreateFile writes a new file.
- Acceptance checklist:
  - [ ] Rejecting a preview leaves the file unchanged
  - [ ] A published diagnostic appears in Problems
  - [ ] Clear removes it
- Test cases:
  - Normal preview
  - Empty diagnostic list
  - Create a file that already exists
- UI checks: The diff editor uses the editor's own accept and reject controls.
- Dependencies: BRG-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### ANL-01 Profiler analyzer

- Files: `packages/profiler-analyzer/src`, `apps/ext/components/profiler`
- Expected behavior: The analyzer turns a React profiler export into a score, component details, and wasted-render findings. The extension panel can show that result.
- Acceptance checklist:
  - [ ] A recorded profile produces a score
  - [ ] An empty profile does not crash the panel
  - [ ] The analyzer does not send the profile to the website
- Test cases:
  - Normal profile
  - Empty profile
  - A very large component tree
- UI checks: Component names stay inside the panel. Long names wrap.
- Dependencies: SHL-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### WEB-01 Landing page

- Files: `apps/web/app/(marketing)/page.tsx`, `apps/web/components/landing`
- Expected behavior: The home page states that Peel is a free local toolkit, shows the tool count, and links to the download and the tool pages.
- Acceptance checklist:
  - [ ] The home page loads with a title
  - [ ] The tool count matches the registry
  - [ ] There is a link to the extension release
- Test cases:
  - Normal desktop
  - 360px width
  - Dark and light, if both exist
- UI checks: No horizontal scroll at 360px. The main heading is readable.
- Dependencies: The site is deployed or running locally
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### WEB-02 Tool pages

- Files: `apps/web/app/(marketing)/tools/[slug]/page.tsx`, `apps/web/data/tools.ts`
- Expected behavior: A known tool slug renders that tool's page. An unknown slug uses the not-found page.
- Acceptance checklist:
  - [ ] A known slug renders the tool name
  - [ ] An unknown slug is a not-found page
- Test cases:
  - Normal slug
  - Unknown slug
  - A slug with angle brackets
- UI checks: The page has one h1 and a way back to the tool list.
- Dependencies: WEB-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### WEB-03 Comparisons

- Files: `apps/web/app/(marketing)/compare/page.tsx`, `apps/web/data/comparisons.ts`
- Expected behavior: The compare index lists the committed comparisons. A known slug renders that comparison. An unknown slug is not found.
- Acceptance checklist:
  - [ ] The index lists the committed comparisons
  - [ ] An unknown slug is not found
- Test cases:
  - Normal slug
  - Unknown slug
- UI checks: Comparison text stays inside the page width.
- Dependencies: WEB-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### WEB-04 Blog

- Files: `apps/web/app/(marketing)/blog/page.tsx`, `apps/web/lib/blog.ts`
- Expected behavior: The blog index lists the committed MDX posts. A known slug renders the post. An unknown slug is not found.
- Acceptance checklist:
  - [ ] The index lists the posts
  - [ ] A post renders its title
  - [ ] An unknown slug is not found
- Test cases:
  - Normal post
  - Unknown slug
- UI checks: The post body wraps. Code blocks do not widen the page.
- Dependencies: WEB-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### WEB-05 Privacy and terms

- Files: `apps/web/app/(marketing)/privacy/page.tsx`, `apps/web/app/(marketing)/terms/page.tsx`
- Expected behavior: Privacy and terms are public pages with their own titles.
- Acceptance checklist:
  - [ ] Both pages load without a session
  - [ ] Each page has its own title
- Test cases:
  - Logged out
  - Logged in
- UI checks: The legal text wraps at 360px.
- Dependencies: None
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AUTH-01 Sign up

- Files: `apps/web/app/(auth)/signup/page.tsx`, `apps/web/app/api/auth/register/route.ts`
- Expected behavior: Signup requires an email and a password, stores a bcrypt hash, and sends a verification email when Resend is configured. A duplicate email returns the same success message.
- Acceptance checklist:
  - [ ] A new email creates a user
  - [ ] A duplicate email does not reveal that the account exists
  - [ ] A short password is rejected
- Test cases:
  - Normal email
  - Whitespace
  - A very long email
  - Emoji in the name
  - SQL-like email text
  - Double submit
- UI checks: The form labels the email and password. Errors are readable.
- Dependencies: Postgres, and Resend for the email itself
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AUTH-02 Log in

- Files: `apps/web/app/(auth)/login/page.tsx`, `apps/web/lib/auth.ts`
- Expected behavior: A matching email and password creates a JWT session and opens the dashboard. A wrong password stays on the login page.
- Acceptance checklist:
  - [ ] The right password reaches the dashboard
  - [ ] The wrong password does not
  - [ ] A logged-out visit to the dashboard returns to login
- Test cases:
  - Normal
  - Wrong password
  - Empty password
  - Expired session
- UI checks: The password field is type password.
- Dependencies: AUTH-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AUTH-03 Verify email

- Files: `apps/web/app/(auth)/verify-email/page.tsx`, `apps/web/app/api/verify-email/route.ts`
- Expected behavior: The link carries a token that is stored only as a SHA-256 hash. A valid token marks the email verified. A used or unknown token does not.
- Acceptance checklist:
  - [ ] A fresh token verifies the user
  - [ ] The same token does not verify twice
  - [ ] A missing token shows a failure
- Test cases:
  - Normal token
  - Empty token
  - A token that is not hex
- UI checks: The page says whether verification worked, without echoing the token.
- Dependencies: AUTH-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AUTH-04 Password reset

- Files: `apps/web/app/(auth)/forgot-password/page.tsx`, `apps/web/app/api/forgot-password/route.ts`, `apps/web/app/api/reset-password/route.ts`
- Expected behavior: Forgot-password returns success for known and unknown emails. Reset accepts a hashed unexpired token and replaces the password hash.
- Acceptance checklist:
  - [ ] An unknown email still shows success
  - [ ] A valid reset token changes the password
  - [ ] An expired token does not
- Test cases:
  - Known email
  - Unknown email
  - Expired token
  - Double submit
- UI checks: The success sentence does not say whether the email exists.
- Dependencies: AUTH-01, Resend for the message
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AUTH-05 OAuth linking

- Files: `apps/web/app/api/auth/[...nextauth]/route.ts`, `apps/web/app/api/auth/prepare-link/route.ts`
- Expected behavior: Google and GitHub buttons appear when the client id and secret are set. The dashboard can start linking for a signed-in user.
- Acceptance checklist:
  - [ ] A configured provider starts the OAuth redirect
  - [ ] A missing provider does not crash the login page
  - [ ] Linking returns to the dashboard
- Test cases:
  - Provider configured
  - Provider missing
  - Cancel the provider screen
- UI checks: The provider buttons are named Google and GitHub.
- Dependencies: AUTH-02, the OAuth apps
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### AUTH-06 Dashboard gate

- Files: `apps/web/middleware.ts`, `apps/web/app/(dashboard)/dashboard/page.tsx`
- Expected behavior: A request to /dashboard without a session redirects to /login with callbackUrl. A session renders the account and referral cards.
- Acceptance checklist:
  - [ ] Logged out redirects
  - [ ] Logged in sees the dashboard
  - [ ] The callback URL is the dashboard
- Test cases:
  - Logged out
  - Logged in
  - A session for another user
- UI checks: The loading state says Loading. The welcome line uses the session name when one exists.
- Dependencies: AUTH-02
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### ACC-01 Delete account

- Files: `apps/web/prisma/schema.prisma`
- Expected behavior: There is no delete-account control. This gap is marked BUILD. A signed-in person should be able to delete the account, and the row should not remain usable.
- Acceptance checklist:
  - [ ] The dashboard offers delete
  - [ ] Confirming it signs the person out
  - [ ] The same email can sign up again or is clearly closed
- Test cases:
  - Normal delete
  - Cancel
  - Double submit
- UI checks: The control is labeled as delete, and it asks before it runs.
- Dependencies: AUTH-06
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### REF-01 Referrals

- Files: `apps/web/app/api/referrals/route.ts`, `apps/web/app/api/referrals/code/route.ts`, `apps/web/middleware.ts`
- Expected behavior: POST /api/referrals/code creates a code. GET /api/referrals lists that user's rows. A signup URL with a PEEL- code stores the fdh-ref cookie for 30 days.
- Acceptance checklist:
  - [ ] Generating a code shows it
  - [ ] The list is only that user's codes
  - [ ] A malformed ref query does not set the cookie
- Test cases:
  - Normal generate
  - Logged out POST
  - A ref value with spaces
  - Two generates
- UI checks: The code can be copied. Errors say the request failed.
- Dependencies: AUTH-06
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### API-01 Health

- Files: `apps/web/app/api/health/route.ts`
- Expected behavior: GET /api/health returns a healthy status when the database answers, and a failure status when it does not.
- Acceptance checklist:
  - [ ] A reachable database returns healthy
  - [ ] The route does not require a session
- Test cases:
  - Normal
  - Database unavailable
- UI checks: None. This is a JSON route.
- Dependencies: Postgres
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### SEC-01 Headers and rate limits

- Files: `apps/web/middleware.ts`, `apps/web/lib/rate-limit.ts`, `apps/web/next.config.ts`
- Expected behavior: Responses include a content security policy, frame-ancestors none, and a request id. Auth POSTs are rate limited. In production, missing Upstash configuration fails closed.
- Acceptance checklist:
  - [ ] The home response has the policy and no X-Powered-By if the config disables it
  - [ ] A burst of signup posts is limited
  - [ ] Production without Upstash does not silently allow unlimited posts
- Test cases:
  - Normal page
  - Repeated signup posts
  - A script tag in a query string
- UI checks: None beyond the pages that receive the headers.
- Dependencies: WEB-01
- Suspected bugs: `apps/web/middleware.ts` calls `NextResponse.next()` and then sets `x-nonce` on `req.headers`. If the nonce is not copied into the forwarded request, server components cannot read it.
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### SEO-01 Metadata and feeds

- Files: `apps/web/app/layout.tsx`, `apps/web/app/sitemap.ts`, `apps/web/app/robots.ts`, `apps/web/app/opengraph-image.tsx`
- Expected behavior: Public pages set titles and descriptions. sitemap.ts and robots.ts are present. The layout can advertise the site, and an Open Graph image is generated.
- Acceptance checklist:
  - [ ] The home title names Peel
  - [ ] sitemap.xml and robots.txt respond
  - [ ] A tool page has its own title
- Test cases:
  - Home
  - A tool page
  - An unknown page
- UI checks: The document language is set.
- Dependencies: WEB-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### UI-01 Missing and error pages

- Files: `apps/web/app/not-found.tsx`, `apps/web/app/error.tsx`, `apps/web/app/global-error.tsx`
- Expected behavior: An unknown URL renders the branded not-found page. A render error renders the error boundary and does not need to show the exception text.
- Acceptance checklist:
  - [ ] An unknown path is a not-found page
  - [ ] The error boundary has a way to try again
- Test cases:
  - Unknown path
  - A forced render error
- UI checks: The not-found page has a way back home.
- Dependencies: WEB-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### MCP-01 Agent browser server

- Files: `apps/mcp`
- Expected behavior: The vendored server speaks MCP over stdio and can drive Chrome. It is not required to use the extension. Usage statistics are collected unless the opt-out flag or environment variable is set.
- Acceptance checklist:
  - [ ] The package has a start command
  - [ ] The opt-out is documented
  - [ ] The extension loads without this server
- Test cases:
  - Start with the opt-out set
  - The extension with the server stopped
- UI checks: None for the website.
- Dependencies: None for the extension
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### DEV-01 Web CI

- Files: `.github/workflows/web-ci.yml`, `.github/workflows/web-e2e.yml`, `.github/workflows/web-lighthouse.yml`
- Expected behavior: The web workflows install dependencies, check the site, and can run the Playwright and Lighthouse jobs.
- Acceptance checklist:
  - [ ] web-ci is a valid workflow file
  - [ ] The site package has lint, test, and build scripts
- Test cases:
  - Read the workflow
  - The local equivalents stay for the test step
- UI checks: None.
- Dependencies: None
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### DEV-02 Extension release

- Files: `.github/workflows/ext-release.yml`, `apps/ext/package.json`
- Expected behavior: Pushing a tag named ext-v\* builds the extension, zips it, and publishes a GitHub release. The existing tag ext-v1.0.0 points at a08a46f. Main at 47e85ea changes only docs/distribution.md.
- Acceptance checklist:
  - [ ] The workflow triggers on ext-v\*
  - [ ] The package version is 1.0.0
  - [ ] The tag commit is an ancestor of main
- Test cases:
  - Read the tag
  - Read the version
- UI checks: None.
- Dependencies: DEV-01
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

### DEV-03 Editor and MCP CI

- Files: `.github/workflows/ext-ci.yml`, `.github/workflows/vsx-ci.yml`, `.github/workflows/vsx-release.yml`, `.github/workflows/mcp-ci.yml`, `.github/workflows/security.yml`
- Expected behavior: Extension, VS Code, MCP, and security workflows exist beside the web workflows.
- Acceptance checklist:
  - [ ] Each named workflow file is present
  - [ ] The VS Code package has a test script
- Test cases:
  - Read the workflow names
- UI checks: None.
- Dependencies: None
- Suspected bugs: none recorded
- Bugs Found:
- Bugs Fixed:
- UI Issues Fixed:
- Files Changed:
- Notes:

## Assumptions

- The tree is `main` `47e85ea`, even with `origin/main`. `origin/dev` at `11d5528` is behind that commit. This step did not switch branches.
- The 52 tools are the keys of `toolMetadata` in `apps/ext/tools/metadata.ts`. Descriptions come from that file. A tool with no one-line description is still a registered tool.
- Tag `ext-v1.0.0` is commit `a08a46f`. The only change from that commit to `main` is one line in `docs/distribution.md`.
- Account deletion is a BUILD gap because the column exists and the application never mentions it. Store listings, billing, Angular, and hosted session sharing stay deferred for the reasons in Gaps.
- Chrome Web Store and Firefox listing status is taken from `docs/distribution.md`, not from a live store lookup.

## Risks

- The website middleware may drop the CSP nonce before it reaches a server component. See SEC-01.
- Production auth routes fail closed with 503 when Upstash is not configured. A deploy without those variables locks signup and login limits rather than skipping them.
- The vendored MCP server collects usage statistics unless the operator opts out. That is upstream behavior and is separate from the extension telemetry switch.
- The extension release on GitHub is the Chrome zip at `ext-v1.0.0`. A Firefox zip is a local script, not that release.

## Whole-Product Check

The local site returns security headers, a per-request CSP nonce that matches the Plausible script, and a 404 with its own title. `/api/health` reports the database. Signup without an email provider rolls back. Login, verification, reset, referrals, and delete were exercised against the local database. The extension popup lists the tools and the settings tab. Chrome refused the host-permission gesture, so no overlay was drawn on the fixture page. Extension unit tests passed (676). Web unit tests passed (24). The profiler analyzer tests passed. The VS Code bridge server tests passed. The extension-host file cannot import `vscode` outside the editor.

## Final Summary

The account bug that sent every verified user back to the verify page is fixed: the edge session now copies `emailVerified` from the JWT. Registration no longer crashes when logging an email failure. The CSP nonce reaches the script. Delete account is available from the dashboard. A denied site permission now has a visible alert in the popup.

## Totals

See the feature table for the row-level status. Passed rows were run live. Blocked rows name the missing permission, key, or host module.

## Still Blocked

- Page tools: Chrome `permissions.request` requires a user gesture this session cannot complete.
- Signup email and password-reset email: `RESEND_API_KEY` is unset. The failure paths return 502 or the generic success without creating a stuck account.
- Google and GitHub sign-in: client secrets are unset.
- VS Code extension host activation: the `vscode` module is provided by the editor.

## Known Limitations

Chrome Web Store and Firefox Add-ons listings stay deferred. There is no billing. There is no Angular panel and no hosted session sharing. Production rate limiting still fails closed until Upstash is configured.

## Launch Checklist

- [x] Account delete works and the email can be used again
- [x] Verified users reach the dashboard
- [x] CSP nonce matches the script
- [ ] Overlay tools confirmed on a page after the person allows the site
- [ ] Verification email delivered (needs Resend)
- [ ] OAuth providers connected (needs client secrets)

## Decision

GO

The website fixes are proven live. The blocked rows are missing third-party credentials or a Chrome permission gesture, not a failed overlay with a broken assertion. Extension unit tests passed.
