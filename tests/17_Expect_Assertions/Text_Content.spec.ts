import { test, expect } from "@playwright/test";

// 1.3 Locator Assertions — Text Content
// ✅ `toHaveText` 
test('toHaveText', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toHaveText('Get started');
});

// ✅ `toHaveText(RegExp)` 
test('toHaveText regex', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('heading', { level: 1 })
    ).toHaveText(/Playwright/);
});

// ✅ `toContainText` 
test('toContainText', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('heading', { level: 1 })
    ).toContainText('Playwright');
});

// ✅ `toContainText({ ignoreCase: true })` 
test('ignore case', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('heading', { level: 1 })
    ).toContainText('playwright', {
        ignoreCase: true,
    });
});
