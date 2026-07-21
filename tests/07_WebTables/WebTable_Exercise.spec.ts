import { test, expect } from '@playwright/test';

test('Verify search entry from table and verify details', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    const searchBoxField = page.locator('#employee-search');
    await searchBoxField.fill('Meera.Rao');

    const row = page.locator("tr[data-username='Meera.Rao'] td");

    const cellValue = await row.allInnerTexts();
    console.log(cellValue);

    await page.locator("//td[text()='Meera.Rao']/preceding-sibling::td/input").click();
    await page.waitForTimeout(5000);

});