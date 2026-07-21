import { test, expect, Page, Locator } from '@playwright/test';

async function findUserEmail(page: Page, name: string): Promise<Locator> {
    while (true) {
        let row = page.locator("#employees-tbody tr").filter({ hasText: name });
        if (await row.count()) return row;

        const next = page.getByTestId("next-page");
        if (await next.isDisabled()) throw new Error("Row not found " + row);
        await next.click();
    }
}

test('Verify user email from table', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    let name = "Mia Hoffmann";
    let row = await findUserEmail(page, name);

    let email = await row.locator("td[data-col='email']").innerText();

    console.log(`Email Id of ${name} is ${email}`);
});