import { test, expect } from "@playwright/test";
import path from "path";

const URL = "https://the-internet.herokuapp.com/upload";
test.describe("FileUpload handling", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test("locate FileUpload and upload", async ({ page }) => {

        const filePath = path.join(__dirname, "testdata.txt");
        console.log("File path:", filePath);

        await page.setInputFiles("#file-upload", filePath);
        await page.locator("#file-submit").click();

        expect(page.locator("h3")).toHaveText("File Uploaded!");
        expect(page.locator("#uploaded-files")).toHaveText("testdata.txt");

        await page.waitForTimeout(2000);
    });
});