import { test as setup, expect } from "@playwright/test";

setup("authenticate", async ({ page }) => {
  await page.goto("http://localhost:3000/login");

  await page.locator("span", { hasText: "Login" }).click();

  await page.fill('input[name="username"]', process.env.TEST_AUTH0_EMAIL);
  await page.fill('input[name="password"]', process.env.TEST_AUTH0_PASSWORD);
  await page.click('button[name="action"]');

  await page.waitForURL("http://localhost:3000/*");

  const email = process.env.TEST_AUTH0_EMAIL;
  await expect(page.locator("nav .nav-email")).toHaveText(email);

  await page.context().storageState({ path: "tests/auth.json" });
});
