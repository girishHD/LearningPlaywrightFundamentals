import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify select', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/dropdown");

    const options = await page.locator("#dropdown").locator("option").allTextContents();
    console.log(options);

    // Scenario 1
    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown", "Option 2");
    await page.waitForTimeout(3000);

    // Scenario 2
    const dropdown = page.locator("#dropdown");
    await dropdown.selectOption("Option 1");
    await page.waitForTimeout(3000);

});