import { test, expect } from '@playwright/test';

test('Verify all Emails of Pagination', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const pageCount = 3;
    const allEmails: String[] = [];

    for (let p = 1; p <= pageCount; p++) {
        await page.getByTestId(`page-${p}`).click();
        const email = await page.locator("#employees-tbody tr td[data-col='email']").allInnerTexts();
        allEmails.push(...email);
    }

    console.log(allEmails);

});