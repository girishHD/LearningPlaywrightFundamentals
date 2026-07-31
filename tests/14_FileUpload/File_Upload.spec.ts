import { test, expect } from "@playwright/test";
import path from "path";

const URL = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";

const FILE1 = path.join(__dirname, "TextFile1.doc");
const FILE2 = path.join(__dirname, "TextFile2.doc");

test.describe("Mulitple FileUpload handling", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test("locate multiple FileUpload and upload", async ({ page }) => {

        await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
            [FILE1, FILE2]
        );

        expect(page.getByText('TextFile1.doc')).toHaveText("TextFile1.doc");
        expect(page.getByText('TextFile2.doc')).toHaveText("TextFile2.doc");

        await page.waitForTimeout(2000);
    });
});