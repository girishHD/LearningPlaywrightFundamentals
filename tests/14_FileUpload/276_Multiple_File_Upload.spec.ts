import { test, expect } from "@playwright/test";
import path from "path";

const URL = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";
test.describe("Mulitple FileUpload handling", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test("locate multiple FileUpload and upload", async ({ page }) => {

        await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
            [{
                name: "file1.png",
                mimeType: "image/png",
                buffer: Buffer.from("image from file1")
            },
            {
                name: "file2.jpg",
                mimeType: "image/jpeg",
                buffer: Buffer.from("text from file2")
            }
            ]);

        await page.waitForTimeout(2000);
    });
});