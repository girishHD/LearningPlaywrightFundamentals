import { test, expect } from "@playwright/test";

// 1.4 Locator Assertions — Attributes, Classes & CSS
// ✅ `toHaveAttribute` 
test('toHaveAttribute', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toHaveAttribute('href', '/docs/intro');
});

// ✅ `toHaveClass` 
test('toHaveClass', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const input = page.getByPlaceholder('What needs to be done?');

    await input.fill('Learn Playwright');
    await input.press('Enter');

    await expect(
        page.locator('.todo-list li').first()
    ).toHaveClass(/toggle/);
    await page.pause();
});

// ✅ `toHaveCSS` 
test('toHaveCSS', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toHaveCSS('display', 'inline-block');
});

// ✅ `toHaveJSProperty` 
test('toHaveJSProperty', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

    await expect(checkbox2).toHaveJSProperty('checked', true);
});