import { describe, expect, it, vi, beforeEach } from "vitest";

/**
 * Route-level tests for referral APIs.
 * Run with: bunx vitest run (from apps/web when vitest is configured)
 * or bundled into web unit test script.
 */

const mockAuth = vi.fn();
const mockFindMany = vi.fn();
const mockFindFirst = vi.fn();
const mockFindUnique = vi.fn();
const mockCreate = vi.fn();
const mockUpdateMany = vi.fn();

vi.mock("@/lib/auth", () => ({
  auth: () => mockAuth(),
}));

vi.mock("@/lib/db", () => ({
  prisma: {
    referral: {
      findMany: (...args: unknown[]) => mockFindMany(...args),
      findFirst: (...args: unknown[]) => mockFindFirst(...args),
      findUnique: (...args: unknown[]) => mockFindUnique(...args),
      create: (...args: unknown[]) => mockCreate(...args),
      updateMany: (...args: unknown[]) => mockUpdateMany(...args),
    },
  },
}));

vi.mock("@/lib/rate-limit", () => ({
  enforceRateLimit: vi.fn(async () => null),
}));

vi.mock("@/lib/logger", () => ({
  logger: { info: vi.fn(), error: vi.fn(), warn: vi.fn() },
}));

vi.mock("@/lib/crypto", () => ({
  randomCode: () => "ABCDEFGH",
}));

describe("GET /api/referrals", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 401 when unauthenticated", async () => {
    mockAuth.mockResolvedValue(null);
    const { GET } = await import("../app/api/referrals/route");
    const res = await GET(new Request("http://localhost/api/referrals"));
    expect(res.status).toBe(401);
  });

  it("returns referrals for the authenticated user", async () => {
    mockAuth.mockResolvedValue({ user: { id: "u1" } });
    mockFindMany.mockResolvedValue([
      {
        id: "r1",
        referralCode: "PEEL-ABCDEFGH",
        status: "PENDING",
        reward: null,
        redeemedAt: null,
        createdAt: new Date("2026-01-01"),
        referredId: null,
      },
    ]);
    const { GET } = await import("../app/api/referrals/route");
    const res = await GET(new Request("http://localhost/api/referrals"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.referrals).toHaveLength(1);
    expect(body.referrals[0].referralCode).toBe("PEEL-ABCDEFGH");
    expect(body.referrals[0].referred).toBeNull();
  });

  it("returns EXPIRED for a pending code older than 30 days", async () => {
    mockAuth.mockResolvedValue({ user: { id: "u1" } });
    mockUpdateMany.mockResolvedValue({ count: 1 });
    const createdAt = new Date(Date.now() - 31 * 24 * 60 * 60 * 1000);
    mockFindMany.mockResolvedValue([
      {
        id: "r-old",
        referralCode: "PEEL-OLDCODE1",
        status: "PENDING",
        reward: null,
        redeemedAt: null,
        createdAt,
        referredId: null,
      },
    ]);
    const { GET } = await import("../app/api/referrals/route");
    const res = await GET(new Request("http://localhost/api/referrals"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.referrals[0].status).toBe("EXPIRED");
    expect(mockUpdateMany).toHaveBeenCalled();
  });
});

describe("POST /api/referrals/code", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("mints a new code even when the user already has one", async () => {
    mockAuth.mockResolvedValue({ user: { id: "u1" } });
    mockFindFirst.mockResolvedValue({ referralCode: "PEEL-EXISTING" });
    mockFindUnique.mockResolvedValue(null);
    mockCreate.mockResolvedValue({ referralCode: "PEEL-ABCDEFGH" });
    const { POST } = await import("../app/api/referrals/code/route");
    const res = await POST(new Request("http://localhost/api/referrals/code"));
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.referralCode).toBe("PEEL-ABCDEFGH");
    expect(body.referralCode).not.toBe("PEEL-EXISTING");
    expect(mockCreate).toHaveBeenCalled();
  });

  it("creates a new code when none exists", async () => {
    mockAuth.mockResolvedValue({ user: { id: "u1" } });
    mockFindFirst.mockResolvedValue(null);
    mockFindUnique.mockResolvedValue(null);
    mockCreate.mockResolvedValue({ referralCode: "PEEL-ABCDEFGH" });
    const { POST } = await import("../app/api/referrals/code/route");
    const res = await POST(new Request("http://localhost/api/referrals/code"));
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.referralCode).toBe("PEEL-ABCDEFGH");
  });
});
