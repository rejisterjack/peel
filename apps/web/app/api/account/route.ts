import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { enforceRateLimit } from "@/lib/rate-limit";

export async function DELETE(request: Request) {
  const limited = await enforceRateLimit(request, {
    limit: 5,
    windowSeconds: 60,
    identifierSuffix: "account-delete",
  });
  if (limited) return limited;

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return Response.json({ error: "Account not found" }, { status: 404 });
  }

  await prisma.$transaction([
    prisma.referral.deleteMany({ where: { referrerId: userId } }),
    prisma.emailVerification.deleteMany({ where: { userId } }),
    prisma.user.delete({ where: { id: userId } }),
  ]);

  return Response.json({ ok: true });
}
