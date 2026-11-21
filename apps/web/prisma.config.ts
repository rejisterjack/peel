import "dotenv/config";
import type { PrismaConfig } from "prisma";
import { env } from "prisma/config";

// `bun install` runs `prisma generate` from the web postinstall. Generate does
// not connect, but Prisma still loads this file and refuses a missing URL.
// Workflows that install the repo without a database get a local placeholder.
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "postgresql://ci:ci@127.0.0.1:5432/ci";
}

/**
 * Prisma v7 configuration.
 *
 * - `dotenv/config` is imported first because Prisma v7 no longer auto-loads
 *   .env files, and Bun's auto-load doesn't apply during `postinstall` /
 *   `prisma generate` (which run with a restricted env). Explicit loading
 *   keeps the CLI working in every context.
 * - The connection URL comes from DATABASE_URL in apps/web/.env.
 * - No `directUrl` is configured: we're on Neon, and the pooler URL in
 *   DATABASE_URL handles both query traffic (pooled) and DDL/migrations
 *   (Neon's pooler routes DDL to the leader automatically).
 * - At runtime we instantiate `PrismaClient` with the `@prisma/adapter-neon`
 *   driver adapter in lib/db.ts — that is required in v7.
 */
export default {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    // Bun runs TypeScript natively, so we don't need tsx as a devDep.
    seed: "bun run prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
} satisfies PrismaConfig;
