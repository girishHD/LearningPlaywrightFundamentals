import { test, expect } from '@playwright/test';

test('Verify how to handle multiple lements', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.getByTestId('forgotten-password-link').click();

    await page.waitForTimeout(5000);
});