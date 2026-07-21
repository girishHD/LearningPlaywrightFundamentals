import { test, expect } from '@playwright/test';

test('Verify Webtable checkBox', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    await page.locator("//td[text()='Ananya.Iyer']/preceding-sibling::td/input[@type='checkbox']").click();

    // css sudo class
    await page.locator("tr:has(td:text('Rohan.Mehta'))").locator("td").first().click();

    await page.waitForTimeout(5000);

});