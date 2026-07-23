import { test, expect } from '@playwright/test';

test('Verify custom dropdown', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    await page.getByTestId("lang-trigger").click();
    await page.getByRole('option', { name: "TypeScript" }).click();
    await page.waitForTimeout(3000);

    await page.locator("#framework-trigger").click();
    await page.getByText("Vue", { exact: true }).click();
    await page.waitForTimeout(3000);

    await page.locator("#experience-trigger").click();
    await page.locator("[data-value='Mid-level (4-6 years)']").click();
    await page.waitForTimeout(2000);

});