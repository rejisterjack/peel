export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import DashboardContent from "./dashboard-content";

export const metadata: Metadata = { title: "Dashboard · Peel" };

export default function DashboardPage() {
  return <DashboardContent />;
}
