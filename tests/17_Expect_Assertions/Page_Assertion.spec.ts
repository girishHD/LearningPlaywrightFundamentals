import { test, expect } from '@playwright/test';

// 2. Page Assertions
// ✅ `toHaveTitle` 
test('toHaveTitle', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);
});

// ✅ `toHaveURL` 
test('toHaveURL', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveURL('https://playwright.dev/');
});

// ✅ Page Screenshot
test('page screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveScreenshot('homepage.png', {
        fullPage: true,
    });
});