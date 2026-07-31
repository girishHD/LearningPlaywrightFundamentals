import { test, expect } from "@playwright/test";
import path from "path";

test.describe("Download Resume", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://qajobfit.com/dashboard?tab=builder");
    })

    test("Download resume from QAJobFit", async ({ page }) => {
        const [staticDownload] = await Promise.all([
            page.waitForEvent("download"),
            page.locator("button[fdprocessedid='5ckcl']").click()
        ]);

        const filePath = path.join("out", staticDownload.suggestedFilename());
        await staticDownload.saveAs(filePath);
    });

});