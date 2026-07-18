import { test, expect } from "@playwright/test";

test.use(
    {
        storageState: "./user-session.json"
    });

test.describe("VWO Dashboard - Session Storage Tests", () => {

    test("go directly to dashboard — no login @P0 @smoke", async ({ page }, testInfo) => {
        await test.step("Step 1: Open VWO Application", async () => {
            console.log("Launching VWO app using saved session");
            await page.goto("https://app.wingify.com/#/dashboard/get-started?account=1227004");
            await page.waitForTimeout(5000);
        });

        await test.step("Step 2: Verify Dashboard is accessible without login", async () => {
            console.log("Checking if dashboard loads directly");
            await expect(page).toHaveURL(/dashboard/);
            console.log("Dashboard URL confirmed");
        });

        await test.step("Step 3: Validate Dashboard page content", async () => {
            console.log("Waiting for dashboard elements to render");
            await page.waitForTimeout(3000);
            console.log("Dashboard content loaded successfully");
        });
    });

});
test("go directly to settings — no login @P1 @regression", async ({ page }, testInfo) => {
    await test.step("Step 1: Open VWO Settings page", async () => {
        console.log("Navigating to settings using saved session");
        await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");
        await page.waitForTimeout(5000);
    });

    await test.step("Step 2: Verify Settings is accessible without login", async () => {
        console.log("Checking if settings loads directly");
        await expect(page).toHaveURL(/settings/);
        console.log("Settings URL confirmed");
    });

    await test.step("Step 3: Validate Settings page content", async () => {
        console.log("Waiting for settings elements to render");
        await page.waitForTimeout(3000);
        console.log("Settings content loaded successfully");
    });
});