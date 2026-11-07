import { expect, test } from "@playwright/test";

/**
 * Referral signup smoke — exercises the redeem UI path without requiring
 * SMTP or a seeded referral row. Full redeem→COMPLETED is covered by
 * apps/web/test/referrals.test.ts (unit) and register route integration.
 */
test.describe("Referral signup", () => {
  test("signup form shows optional referral field", async ({ page }) => {
    await page.goto("/signup");
    await expect(
      page.getByPlaceholder("Referral code (optional)"),
    ).toBeVisible();
  });

  test("?ref= prefills the referral code on signup", async ({ page }) => {
    await page.goto("/signup?ref=PEEL-TESTCODE");
    await expect(
      page.getByPlaceholder("Referral code (optional)"),
    ).toHaveValue("PEEL-TESTCODE");
  });

  test("signup still validates passwords when a referral code is present", async ({
    page,
  }) => {
    await page.goto("/signup?ref=PEEL-TESTCODE");
    await page.getByPlaceholder("Name").fill("Referral Tester");
    await page.getByPlaceholder("Email").fill("referral-e2e@example.com");
    await page
      .getByPlaceholder("Password (min 8 characters)")
      .fill("password123");
    await page.getByPlaceholder("Confirm password").fill("different");
    await page.getByRole("button", { name: /sign up/i }).click();
    await expect(page.getByText(/passwords do not match/i)).toBeVisible();
    await expect(
      page.getByPlaceholder("Referral code (optional)"),
    ).toHaveValue("PEEL-TESTCODE");
  });
});
