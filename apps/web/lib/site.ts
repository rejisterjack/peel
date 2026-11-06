export const SITE_URL = "https://peel.rejisterjack.com";
export const SITE_NAME = "Peel";
import { TOOL_COUNT } from "@/data/tools";

export const SITE_TAGLINE = `${SITE_NAME} — ${TOOL_COUNT} visual debugging tools in one browser extension`;
export const GITHUB_URL = "https://github.com/rejisterjack/peel";
export const GITHUB_RELEASES_URL = `${GITHUB_URL}/releases`;
export const DOWNLOAD_URL = GITHUB_RELEASES_URL;

export const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "CCBot",
  "Bytespider",
  "Applebot-Extended",
  "cohere-ai",
] as const;
