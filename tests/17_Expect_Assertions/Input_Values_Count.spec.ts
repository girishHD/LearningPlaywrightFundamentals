import { test, expect } from '@playwright/test';

// 1.5 Locator Assertions — Input Values
// ✅ `toHaveValue` 
test('toHaveValue', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const input = page.getByPlaceholder('What needs to be done?');

    await input.fill('Automate everything');

    await expect(input).toHaveValue('Automate everything');
});

// ✅ `toHaveValue(RegExp)` 
test('toHaveValue regex', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const input = page.getByPlaceholder('What needs to be done?');

    await input.fill('Test-Case-123');

    await expect(input).toHaveValue(/Test-Case-\d+/);
});

// 1.6 Locator Assertions — Count
// ✅ `toHaveCount` 
test('toHaveCount', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const input = page.getByPlaceholder('What needs to be done?');

    await input.fill('Task A');
    await input.press('Enter');

    await input.fill('Task B');
    await input.press('Enter');

    await expect(page.locator('.todo-list li')).toHaveCount(2);
});