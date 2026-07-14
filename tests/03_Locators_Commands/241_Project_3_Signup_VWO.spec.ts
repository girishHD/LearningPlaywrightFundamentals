import { test, expect } from '@playwright/test';

test("Verify the signup page has error with incorrect emailid", async ({ page }) => {
    page.goto("https://vwo.com/free-trial/");

    await page.waitForTimeout(5000);
    page.locator('#page-v1-step1-email').fill('abcd');

    await page.locator('#page-free-trial-step1-cu-gdpr-consent-checkbox').click();
    await page.locator('//button[text()="Create a Free Trial Account"]').click();

    let error_msg = await page.locator('//div[contains(@class,"invalid-reason")]').first().textContent();

    expect(error_msg).toContain("The email address you entered is incorrect.");
})