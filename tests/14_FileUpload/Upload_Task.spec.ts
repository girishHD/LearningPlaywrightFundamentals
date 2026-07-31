import { test, expect } from "@playwright/test";
import path from "path";

const URL = "https://app.thetestingacademy.com/student/settings";

const PIC = path.join(__dirname, "PIC.jpg");
test.describe("Upload Image", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test("Upload Pic and verify", async ({ page }) => {
        page.setInputFiles("input[id='avatar-upload']", PIC);
        await page.pause();
    });
});