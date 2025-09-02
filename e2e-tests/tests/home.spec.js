import { test, expect } from "@playwright/test";

test("should stay logged in with save state", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const email = process.env.TEST_AUTH0_EMAIL;
  await expect(page.locator("nav .nav-email")).toHaveText(email);

  await expect(page.getByText(/testperfectmix@test.com/i)).toBeVisible();
});
