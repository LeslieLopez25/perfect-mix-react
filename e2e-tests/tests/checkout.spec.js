import { test, expect } from "@playwright/test";

test.describe("E2E Checkout Flow", () => {
  test.use({ storageState: "tests/auth.json" });

  test("user can add items to cart and complete checkout", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const email = process.env.TEST_AUTH0_EMAIL;
    await expect(page.locator("nav .nav-email")).toHaveText(email);

    const addToCartButtons = page.locator("text=Add to Cart");
    await addToCartButtons.nth(0).click();
    await addToCartButtons.nth(1).click();

    await page.getByTestId("cart-icon").click();

    const cartItems = page.locator(".cart-item");
    await expect(cartItems).toHaveCount(2);

    const frame = page.frameLocator("iframe[name^='__privateStripeFrame']");
    await frame.locator("input[name='cardnumber']").waitFor();
    await frame.locator("input[name='cardnumber']").fill("4242424242424242");
    await frame.locator("input[name='exp-date']").fill("12/34");
    await frame.locator("input[name='cvc']").fill("123");
    await frame.locator("input[name='postal']").fill("12345");

    await page.click("button:has-text('Pay Now')");

    await expect(page.getByText(/receipt/i)).toBeVisible();

    await page.click("button:has-text('Close')");

    await expect(page.getByText(/Cart is empty/i)).toBeVisible();

    await expect(page.locator("nav .nav-email")).toHaveText(email);
    await page.click("button:has-text('Logout')");
  });
});
