import { test, expect } from '@playwright/test';

test('Verify Find the First Terminated Employee', async ({ page }) => {

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

    await page.getByRole('textbox', { name: "username" }).fill("admin");

    await page.getByRole('textbox', { name: "password" }).fill("Awesomeqa@4321");

    await page.locator("button[type='submit']").click();

    await expect(page.getByAltText('profile picture')).toBeVisible();

    //((//div[contains(@class,"oxd-table-row")])[7]/div)[6]

    const firstPart = "(//div[contains(@class,'oxd-table-row')])[";
    const secondPart = "]/div[";
    const thirdPart = "]"

    const row = page.locator("//div[contains(@class,'oxd-table-row')]");
    const rowCount = await row.count();

    const cols = page.locator("(//div[contains(@class,'oxd-table-row')])[7]/div");

    const colsCount = await cols.count();

    for (let i = 2; i <= rowCount; i++) {
        for (let j = 2; j <= colsCount; j++) {
            const cellPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            const cellText = await page.locator(cellPath).innerText();
            if (cellText.includes("Terminated")) {
                console.log(`${firstPart}${i}${secondPart}${j + 3}${thirdPart}${'/div/button'}`);
                await page.locator(`${firstPart}${i}${secondPart}${j + 3}${thirdPart}${'/div/button'}`).first().click();
                const alertbox = page.locator("//button[text()=' No, Cancel ']");
                await expect(alertbox).toBeVisible();
                await alertbox.click();
                break;

            }
        }
    }
});