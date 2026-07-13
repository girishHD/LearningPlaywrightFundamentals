// https://app.vwo.com/#/login

import { test, expect } from '@playwright/test';

test("TC#1 - Verify that the app.vwo login error msg", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    // Default Locators
    // id, name, className, Tag., Custom Locator (via CSS selector)
    // id => #id
    // className => .
    // name => [name="value"]
    // Tag => [tag]

    let usernameField = page.locator("#login-username");
    let passwordField = page.locator("#login-password");
    let logonButton = page.locator("#js-login-btn");

    await usernameField.fill("admin@admin");
    await passwordField.fill("pass123");
    await logonButton.click();

    let error_message = page.locator("#js-notification-box-msg");
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");
});