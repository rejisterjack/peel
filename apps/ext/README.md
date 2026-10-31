# Peel — Ultimate Frontend Developer Toolkit

> **One extension. Every visual debugging tool you actually need.**
> Built for Chrome & Firefox · Manifest V3 · Open Source

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/rejisterjack/peel)
[![Tools](https://img.shields.io/badge/tools-52-success.svg)](#features)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Manifest](https://img.shields.io/badge/manifest-v3-orange.svg)](#)

---

## Why Peel?

Frontend developers rely on 8–12 separate browser extensions for visual debugging. Most are built on deprecated Manifest V2 and are now broken on modern browsers.

**Peel is the unified, modern replacement.**

- **52 tools** in one extension
- **Manifest V3** from day one
- **Free and local-first** — inspection runs in the browser
- **Open source**
- **Modern stack** — React 19, shadcn/ui, Zustand, WXT, Tailwind CSS v4

---

## Features

### Inspection (20)

| Tool | Description |
| --- | --- |
| DOM Outliner | Visualize DOM structure with colored outlines around elements |
| Spacing Visualizer | Visualize margin, padding, and gap spacing on elements |
| Font Inspector | Inspect font properties of any element on the page |
| Color Picker | Pick and copy colors from any element on the page |
| Pixel Ruler | Measure distances and dimensions between elements |
| Element Inspector | Deep inspect element properties, styles, and computed values |
| Source Map Viewer | Resolve minified code to original sources using source maps |
| Tech Detector | Detect technologies, frameworks, and libraries used on the page |
| DOM Tree Viewer | Walk and inspect the DOM tree hierarchy and element attributes |
| Focus Debugger | Debug focus order, tabindex, and keyboard navigation flow |
| Form Debugger | Inspect form fields, validation, and submission behavior |
| Z-Index Visualizer | Visualize stacking contexts and z-index values on the page |
| Smart Element Picker | Intelligent element selection with CSS selector generation |
| Framework DevTools | Inspect React, Vue, Angular, and Svelte component info on the page. Does not open React DevTools, Vue DevTools, or Angular DevTools. |
| React State Panel | Inspect React component hooks, props, and state in real-time |
| Vue State Panel | Inspect Vue component reactive data and computed properties |
| Svelte State Panel | Inspect Svelte component state when the runtime attached an instance to the element |
| Container Query Inspector | Inspect container queries and their matched conditions |
| View Transitions Debugger | Debug and preview View Transitions API animations |
| X-Ray Mode | Instant visual overlay of all issues: accessibility, performance, SEO, and best practices |

### CSS (12)

| Tool | Description |
| --- | --- |
| CSS Inspector | Inspect applied CSS rules and computed styles for any element |
| CSS Editor | Live-edit CSS properties on any element with instant preview |
| CSS Scanner | Scan for unused CSS, specificity issues, and duplicate rules |
| CSS Variable Inspector | Browse and inspect CSS custom properties and their values |
| Layout Visualizer | Visualize Flexbox, Grid, and block layout properties |
| Grid Overlay | Overlay CSS Grid lines, areas, and tracks on the page |
| Contrast Checker | Check color contrast ratios against WCAG standards |
| Animation Inspector | Inspect, pause, and control CSS animations and transitions |
| Design System Validator | Validate page elements against a design system specification |
| Breakpoint Overlay | Show active CSS breakpoints and media query boundaries |
| Design Token Extractor | Extract and export design tokens: colors, spacing, typography, shadows, and breakpoints |
| Specificity Cascade | Visualize CSS cascade showing which rules win and why for each property |

### Performance (6)

| Tool | Description |
| --- | --- |
| Network Analyzer | Analyze network requests, payloads, and loading performance |
| Performance Entries Viewer | Visualize performance.measure / mark / resource / longtask entries as a timeline |
| Performance Budget | Set and monitor performance budgets for page metrics |
| Scroll Animations Debugger | Debug scroll-driven animations and scroll-linked effects |
| Performance Audit | Measure Core Web Vitals and get actionable performance suggestions |
| Network Replay | Capture, replay, and export network requests as cURL, fetch, or Postman |

### Accessibility (2)

| Tool | Description |
| --- | --- |
| Accessibility Audit | Run comprehensive accessibility audit against WCAG guidelines |
| Focus Debugger (A11y) | Accessibility-focused focus and keyboard navigation debugger |

### AI (4)

| Tool | Description |
| --- | --- |
| Smart Suggestions | AI-powered design and code suggestions for the current page |
| AI Analyzer | Analyze page structure, patterns, and issues using AI |
| AI Auto-Fix | AI-powered automatic fix suggestions with diff preview |
| Copy as Component | Hover any element, copy as production-ready component code |

### Utilities (8)

| Tool | Description |
| --- | --- |
| Screenshot Studio | Capture, annotate, and export page screenshots |
| Storage Inspector | Browse and manage localStorage, sessionStorage, and cookies |
| Visual Regression | Capture and compare visual snapshots for regression testing |
| Responsive Preview | Preview the page at different screen sizes and device viewports |
| Command Palette | Quick-access command palette for all tools and actions |
| Site Report Generator | Generate comprehensive reports about page quality and metrics |
| Full Audit | One-click comprehensive audit across accessibility, performance, SEO, and best practices |
| Session Replay | Record and replay debugging sessions for team collaboration |

---

## Installation

### Manual Installation (Developer Mode)

```bash
# 1. Clone the repository
git clone https://github.com/rejisterjack/peel.git
cd peel

# 2. Install dependencies
bun install

# 3. Build the extension
bun run build

# 4. Load in Chrome
# → Open chrome://extensions
# → Enable "Developer mode" (top right toggle)
# → Click "Load unpacked"
# → Select the .output/chrome-mv3 folder
```

---

## Keyboard Shortcuts

| Shortcut      | Action                   |
| ------------- | ------------------------ |
| `Alt+Shift+D` | Toggle DOM Outliner      |
| `Alt+Shift+I` | Toggle Element Inspector |
| `Alt+Shift+P` | Open Command Palette     |
| `Alt+Shift+0` | Disable All Tools        |

Additional shortcuts can be assigned at `chrome://extensions/shortcuts`.

---

## Development

```bash
# Start development server with hot reload
bun run dev

# Build for production
bun run build

# Build for Firefox
bun run build:firefox

# Type check
bun run compile
```

---

## Project Structure

```
peel/
├── entrypoints/
│   ├── background.ts        # Service worker (message router)
│   ├── content.ts           # Content script (tool runner)
│   └── popup/               # React popup UI
├── tools/                   # Tool definitions by category
├── components/              # React components (shadcn/ui)
├── stores/                  # Zustand state management
├── hooks/                   # React hooks
├── lib/                     # Shared utilities, types, messaging
└── content/                 # Content script infrastructure
    ├── tool-runner.ts       # Tool lifecycle manager
    ├── overlay-manager.ts   # Shadow DOM overlay system
    ├── dom-walk.ts          # Open-shadow and same-origin walk
    └── highlight-engine.ts  # Element picker/highlight
```

---

## Tech Stack

| Layer               | Technology                  |
| ------------------- | --------------------------- |
| Extension Framework | WXT (Web Extension Toolkit) |
| UI                  | React 19 + shadcn/ui        |
| Styling             | Tailwind CSS v4             |
| State Management    | Zustand                     |
| Validation          | Zod                         |
| Build               | WXT + Vite                  |
| Package Manager     | Bun                         |

---

## Security and Privacy

- **Local-first**: inspection, overlays, and exports run in the browser.
- **Host access is opt-in**: content scripts inject after you enable Peel on a site.
- **Optional AI**: requests go to the provider you configure when you use an AI tool.
- **Optional telemetry**: when enabled, a tool id is sent to Plausible. URLs, selectors, and page content are not.
- **Closed shadow roots and cross-origin frames** are counted and not read. Open shadow trees and same-origin frames are included.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE) © Peel Contributors
