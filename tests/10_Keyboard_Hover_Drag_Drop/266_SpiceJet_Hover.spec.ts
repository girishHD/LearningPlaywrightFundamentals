import { test, expect } from '@playwright/test';

test('Hover', async ({ page }) => {

    await page.goto("https://www.spicejet.com/");

    await page.getByText("Add-ons", { exact: true }).hover();

    await page.getByText("FlyEarly", { exact: true }).click();

});