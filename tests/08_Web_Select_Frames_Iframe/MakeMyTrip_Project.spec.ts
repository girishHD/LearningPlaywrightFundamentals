import { test, expect } from '@playwright/test';

test('Verify MakeMyTrip Custome Dropdown', async ({ page }) => {

    await page.goto("https://www.makemytrip.com/");
    await page.pause();
    // page.waitForSelector("[data-cy='closeModal']");
    // await page.waitForTimeout(10000);
    await page.locator("[data-cy='closeModal']").click();
    await page.pause();
    // await page.waitForTimeout(10000);
    const formCity = page.locator('.flightSearchWidget #fromCity');
    await formCity.click();
    await page.waitForTimeout(3000);
    await formCity.fill("Del");
    await formCity.filter({ hasText: "New Delhi" }).click();

});