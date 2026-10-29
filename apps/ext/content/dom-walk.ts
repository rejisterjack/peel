export interface DomWalkStats {
  closedShadowRoots: number;
  crossOriginFrames: number;
}

type ShadowOpener = (node: Element) => ShadowRoot | null;

function closedShadowOpener(): ShadowOpener | null {
  const chromeDom = (
    globalThis as unknown as {
      chrome?: { dom?: { openOrClosedShadowRoot?: ShadowOpener } };
    }
  ).chrome?.dom;
  return chromeDom?.openOrClosedShadowRoot ?? null;
}

function isClosedShadowHost(el: Element): boolean {
  if (el.shadowRoot) return false;
  const opener = closedShadowOpener();
  if (!opener) return false;
  try {
    const root = opener(el);
    return root != null;
  } catch {
    return false;
  }
}

/**
 * Visit light-DOM elements, open shadow trees, and same-origin frames.
 * Closed shadow roots and cross-origin frames are counted and not read.
 */
export function walkOpenShadowAndSameOriginFrames(
  root: ParentNode,
  visit: (el: Element) => void,
  stats: DomWalkStats = { closedShadowRoots: 0, crossOriginFrames: 0 },
): DomWalkStats {
  const elements = root.querySelectorAll("*");
  for (const el of elements) {
    visit(el);
    if (el.shadowRoot) {
      walkOpenShadowAndSameOriginFrames(el.shadowRoot, visit, stats);
    } else if (isClosedShadowHost(el)) {
      stats.closedShadowRoots += 1;
    }
    if (el instanceof HTMLIFrameElement || el instanceof HTMLFrameElement) {
      let doc: Document | null = null;
      try {
        doc = el.contentDocument;
      } catch {
        doc = null;
      }
      if (doc) {
        walkOpenShadowAndSameOriginFrames(doc, visit, stats);
      } else {
        stats.crossOriginFrames += 1;
      }
    }
  }
  return stats;
}

export function domWalkSkipLine(stats: DomWalkStats): string {
  return `Skipped ${stats.closedShadowRoots} closed shadow roots and ${stats.crossOriginFrames} cross-origin frames.`;
}

export function mountDomWalkNote(stats: DomWalkStats): HTMLElement {
  const note = document.createElement("div");
  note.dataset.fdhDomWalk = "skip-count";
  note.textContent = domWalkSkipLine(stats);
  note.style.cssText =
    "position:fixed;bottom:8px;left:8px;z-index:2147483646;background:#0f172a;color:#e2e8f0;font:12px/1.4 system-ui,sans-serif;padding:6px 8px;border-radius:6px;pointer-events:none;";
  document.documentElement.appendChild(note);
  return note;
}
