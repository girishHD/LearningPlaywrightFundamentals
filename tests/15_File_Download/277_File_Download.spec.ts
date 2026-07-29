import { test, expect } from "@playwright/test";
import path from "path";

const URL = "https://app.thetestingacademy.com/playwright/widgets/upload-download";
test.describe("File Downloafd Code", () => {
    test.beforeEach(async ({ page }) => {
        page.goto(URL);
    });

    test("Verify the download button is working and we are able to save the file", async ({ page }) => {

        const [staticDownload] = await Promise.all([
            page.waitForEvent("download"),
            page.locator("#dl_static").click()
        ]);
        const filepath = path.join('out', staticDownload.suggestedFilename())
        await staticDownload.saveAs(filepath);
    });
});
