import { test, expect } from "@playwright/test";

const URL = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";
test.describe("Shadow handling", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test("locate shadow DOM and assert visible", async ({ page }) => {
        // single shadow root
        const card = page.getByTestId("card-account-card");
        await card.locator("input[name='email']").fill("student@thetestingacademy.com");
        await card.locator("input[name='password']").fill("password");
        await card.getByTestId("card-account-submit").click();

        expect(card.getByTestId("card-account-status")).toContainText("student@thetestingacademy.com")

        //  buttons with role + aria-label
        const cart = page.getByTestId("counter-cart");
        await cart.getByRole("button", { name: "Increment" }).click();
        await cart.getByRole("button", { name: "Increment" }).click();
        expect(cart.getByTestId("counter-value")).toHaveText("5");

        // shadow inside shadow
        const outerShadow = page.getByTestId("nested-host");
        await outerShadow.getByTestId("card-inside-email").fill("ujjwal@thetestingacdemy.com");
        await outerShadow.getByTestId("card-inside-password").fill("ujjwal@123");
        await outerShadow.getByTestId("card-inside-submit").click();

        await page.waitForTimeout(2000);
    });
});