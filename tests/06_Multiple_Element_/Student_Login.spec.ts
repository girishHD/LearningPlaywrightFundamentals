import { test, expect } from '@playwright/test';

test('Verify student login', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    // await page.locator('#email').fill("abc@gmail.com");
    await page.getByRole('textbox', { name: "email" }).fill("abc@gmail.com");

    // await page.locator('#password').fill("abc1234");
    await page.getByRole('textbox', { name: "password" }).fill("abc1234");

    await page.getByRole('button', { name: "Login to Practice Account" }).click();

    await page.waitForTimeout(3000);

    console.log(page.url());


    expect(page.url()).toContain("?email=abc%40gmail.com&password=abc1234");
});