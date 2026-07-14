import { test, expect } from '@playwright/test';

test("Verify the signup page has error with incorrect emailid", async ({ page }) => {
    page.goto("https://vwo.com/free-trial/");

    await page.waitForTimeout(5000);
    await page.getByRole('textbox', { name: "email" }).fill("abcd");

    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: "Create a Free Trial Account" }).click();

    let error_msg = await page.locator('//div[contains(@class,"invalid-reason")]').first().textContent();
    expect(error_msg).toContain("The email address you entered is incorrect.");
})