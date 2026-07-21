import { test, expect } from '@playwright/test';

test('Verify how to handle multiple elements', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.waitForTimeout(5000);

    const rightpanelLinksText: string[] = await page.locator('a.list-group-item').allInnerTexts();

    console.log(rightpanelLinksText.length);

    for (const link of rightpanelLinksText) {
        console.log(link);

    }

    for (const linkText of rightpanelLinksText) {
        if (linkText === "Forgotten Password") {
            await page.getByText(linkText).first().click();
            break;
        }
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));

    }
    await page.waitForTimeout(5000);
});