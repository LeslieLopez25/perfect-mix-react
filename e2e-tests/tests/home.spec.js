import { test, expect } from "@playwright/test";

test("should stay logged in with save state", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page.getByText(/welcome/i)).toBeVisible();

  await expect(page.getByText(/testperfectmix@test.com/i)).toBeVisible();
});
