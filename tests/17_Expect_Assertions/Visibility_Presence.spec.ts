import { test, expect } from '@playwright/test';

// 1.1 Locator Assertions — Visibility & Presence

// ✅ `toBeVisible` 
test('toBeVisible', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('link', { name: 'Get started' })
    ).toBeVisible();
});

// ✅ `toBeHidden` 
test('toBeHidden', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await expect(page.locator('#finish')).toBeHidden();
});

// ✅ `toBeAttached` 
test('toBeAttached', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page.locator('footer')).toBeAttached();
});

// ✅ `toBeAttached({ attached: false })` 
test('toBeAttached detached', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await expect(page.locator('.todo-list li')).toHaveCount(0);

    await expect(
        page.locator('.todo-list li').first()
    ).toBeAttached({ attached: false });
});

// ✅ `toBeInViewport` 
test('toBeInViewport', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('heading', { level: 1 })
    ).toBeInViewport();
});

// ✅ `toBeInViewport({ ratio })` 
test('toBeInViewport with ratio', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('heading', { level: 1 })
    ).toBeInViewport({ ratio: 0.5 });
});
