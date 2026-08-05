import { test, expect } from '@playwright/test';

// 1.2 Locator Assertions — Element State
// ✅ `toBeEnabled` 
test('toBeEnabled', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await expect(
        page.getByPlaceholder('What needs to be done?')
    ).toBeEnabled();
});

// ✅ `toBeDisabled` 
test('toBeDisabled', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

    await page.getByRole('button', { name: 'Enable' }).click();

    await expect(
        page.locator('input[type="text"]')
    ).toBeEnabled();
});

// ✅ `toBeEditable` 
test('toBeEditable', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await expect(
        page.getByPlaceholder('What needs to be done?')
    ).toBeEditable();
});

// ✅ `toBeChecked` 
test('toBeChecked', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

    await expect(checkbox2).toBeChecked();
});

// ✅ `toBeChecked({ checked: false })` 
test('unchecked checkbox', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1 = page.locator('input[type="checkbox"]').nth(0);

    await expect(checkbox1).toBeChecked({ checked: false });
});

// ✅ `toBeEmpty` 
test('toBeEmpty', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await expect(
        page.getByPlaceholder('What needs to be done?')
    ).toBeEmpty();
});

// ✅ `toBeFocused` 
test('toBeFocused', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const input = page.getByPlaceholder('What needs to be done?');

    await input.focus();

    await expect(input).toBeFocused();
});
