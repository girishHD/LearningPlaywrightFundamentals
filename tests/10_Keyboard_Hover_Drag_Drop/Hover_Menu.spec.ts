import { test, expect } from '@playwright/test';

test('Verify Hover Menu options', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    await page.getByTestId("nav-add-ons").hover();

    console.log(await page.getByLabel("Add-ons submenu").allInnerTexts());

    await page.getByLabel("Add-ons submenu").getByText("Wi-Fi").click();

    await page.keyboard.press("Escape");

    console.log(await page.getByTestId("hover-output").innerText());
});