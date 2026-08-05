import { test, expect } from '@playwright/test';

// 1.7 Locator Assertions — Accessibility
// ✅ `toHaveRole` 
test('toHaveRole', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toHaveRole('link');
});

// ✅ `toHaveAccessibleName` 
test('toHaveAccessibleName', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toHaveAccessibleName('Get started');
});

// ✅ `toMatchAriaSnapshot` 
test('toMatchAriaSnapshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.locator('nav').first()
    ).toMatchAriaSnapshot(`
    - navigation
  `);
});

// 1.8 Locator Assertions — Visual Testing
// ✅ `toHaveScreenshot` 
test('toHaveScreenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('heading', { level: 1 })
    ).toHaveScreenshot('hero-heading.png');
});