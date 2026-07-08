import { test, expect } from "@playwright/test";

test("two users interact", async ({ browser }) => {
    let context1 = await browser.newContext();
    let page1 = await context1.newPage();

    let context2 = await browser.newContext();
    let page2 = await context2.newPage();

    await page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    console.log("Admin URL:", page1.url());

    await page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("Guest URL:", page2.url());
    await context1.close();
    await context2.close();

});