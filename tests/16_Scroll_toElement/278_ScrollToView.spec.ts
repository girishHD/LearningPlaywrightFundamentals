import { test, expect } from "@playwright/test";
import { log } from "console";

test.describe("Scroll to View", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll");
    });

    test("scroll to view", async ({ page }) => {
        // 1. scrollIntoViewIfNeeded
        await page.getByTestId("deep-anchor").scrollIntoViewIfNeeded();
        await page.getByTestId("deep-anchor").click();

        // 2. ScrollBy 1000 px
        await page.evaluate(() => window.scrollBy(0, 1000));

        // 3. jump to bottom
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await expect(page.getByTestId("cta-button")).toBeEnabled();

        // 4. jump back to top
        await page.evaluate(() => window.scrollTo(0, 0));

        // 5. lazy load scroll test
        await page.getByTestId("lazy-title").scrollIntoViewIfNeeded();
        const list = page.getByTestId("lazy-list").locator("li");
        const intialCount = await list.count();

        await page.getByTestId("lazy-item-10").scrollIntoViewIfNeeded();
        await page.waitForTimeout(3000);
        const updatedCount = await list.count();
        console.log("IntialCount:", intialCount);
        console.log("UpdatedCount:", updatedCount);

        await page.pause();
    });
});