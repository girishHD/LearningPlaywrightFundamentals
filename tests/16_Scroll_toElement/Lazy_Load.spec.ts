import { test, expect } from "@playwright/test";
import { log } from "console";

test.describe("Lazy Load Scroll", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll");
    });

    test("scroll to lazy load", async ({ page }) => {
        // 5. lazy load scroll test
        await page.getByTestId("lazy-title").scrollIntoViewIfNeeded();
        await page.getByTestId("lazy-list").scrollIntoViewIfNeeded();

        const list = page.getByTestId("lazy-list").locator("li");
        const intialCount = await list.count();

        await list.last().scrollIntoViewIfNeeded();

        await expect.poll(async () => list.count(), {
            message: "expected items > 10",
            timeout: 10_000
        }).toBeGreaterThan(intialCount);

        const updatedCount = await list.count();
        console.log("IntialCount:", intialCount);
        console.log("UpdatedCount:", updatedCount);
        await page.pause();
    });
});