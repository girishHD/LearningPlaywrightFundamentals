import { test, expect } from '@playwright/test';

test('Verify your first TC', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/ttacart', {
        timeout: 50000
    });
});