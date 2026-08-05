import { test, expect } from '@playwright/test';

// 5. Modifiers & Advanced Assertions
// 5.1 `.not`  
// ✅ Negation Assertions
test('not modifier', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
        page.getByRole('heading', { level: 1 })
    ).not.toHaveText('Selenium');
});

// 5.2 `expect.soft`  
// ✅ Soft Assertions
test('soft assertions', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect.soft(page).toHaveTitle(/Playwright/);

    await expect.soft(
        page.getByRole('heading', { level: 1 })
    ).toBeVisible();
});

// 5.3 `expect.poll`  
// ✅ Polling Assertions
test('expect.poll', async ({ request }) => {
    await expect
        .poll(async () => {
            const response = await request.get(
                'https://reqres.in/api/users/2'
            );

            return response.status();
        })
        .toBe(200);
});

// 5.4 Custom Timeout
// ✅ Per Assertion Timeout
test('custom timeout', async ({ page }) => {
    await page.goto(
        'https://the-internet.herokuapp.com/dynamic_loading/2'
    );

    await page.getByRole('button', {
        name: 'Start',
    }).click();

    await expect(
        page.locator('#finish')
    ).toBeVisible({
        timeout: 15_000,
    });
});

// 5.5 Real-World Example
// ✅ TodoMVC Flow
test('todo flow', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const input = page.getByPlaceholder(
        'What needs to be done?'
    );

    const items = page.locator('.todo-list li');

    await expect(items).toHaveCount(0);

    await input.fill('Master Playwright');
    await input.press('Enter');

    await expect(items).toHaveCount(1);

    await expect(items.first()).toContainText(
        'Master Playwright'
    );
});
