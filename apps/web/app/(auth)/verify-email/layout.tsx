import type { Metadata } from "next";

export const metadata: Metadata = { title: "Verify email · Peel" };

export default function VerifyEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
