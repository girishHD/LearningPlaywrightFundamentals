import { test, expect } from '@playwright/test';

test('Verify Advance Dropdown', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

    // ① Single — searchable
    await page.locator("#rs-single").click();
    await page.getByRole('option', { name: "WebdriverIO" }).click();
    await page.waitForTimeout(2000);

    // ②  Multi — chips with remove
    await page.locator("#rs-multi").click();
    await page.getByText("Pytest", { exact: true }).click();
    await page.getByText("JUnit", { exact: true }).click();
    await page.getByText("Cucumber", { exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel("Remove Cucumber", { exact: true }).click();
    await page.keyboard.press("Escape");
    await page.waitForTimeout(2000);

    // ③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();
    await page.keyboard.press("Escape");
    await page.waitForTimeout(2000);

    // ⑤ Async — fetched on type
    await page.locator("#rs-async").click();
    await page.getByTestId("rs-async-input").fill("pun");
    expect(page.getByTestId("rs-async-menu")).toContainText("Pune");
    await page.getByRole('option', { name: "pune" }).click();
});