import { prisma } from "@/lib/db";
import { sendReferralNotificationEmail } from "@/lib/email";

export const REFERRAL_COOKIE = "fdh-ref";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

export function referralExpiryCutoff(now = Date.now()): Date {
  return new Date(now - THIRTY_DAYS_MS);
}

/** Redeem a PENDING code for a newly created user. Invalid codes are ignored. */
export async function redeemReferralCode(
  userId: string,
  code: string,
  displayName: string,
): Promise<void> {
  const referral = await prisma.referral.findUnique({
    where: { referralCode: code },
    include: { referrer: { select: { id: true, email: true, name: true } } },
  });
  if (
    !referral ||
    referral.status !== "PENDING" ||
    referral.referredId ||
    referral.referrerId === userId
  ) {
    return;
  }
  await prisma.$transaction([
    prisma.referral.update({
      where: { id: referral.id },
      data: {
        referredId: userId,
        status: "COMPLETED",
        redeemedAt: new Date(),
      },
    }),
    prisma.user.update({
      where: { id: userId },
      data: { referredById: referral.referrerId },
    }),
  ]);
  void sendReferralNotificationEmail(
    referral.referrer.email,
    referral.referralCode,
    displayName,
  );
}
