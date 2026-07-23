import { test, expect, FrameLocator } from '@playwright/test';

test('Verify Multiple Iframe', async ({ page }) => {

    await page.goto("https://selectorshub.com/iframe-scenario/");

    const frame1: FrameLocator = page.frameLocator("#pact1");
    const frame2: FrameLocator = frame1.frameLocator("#pact2");
    const frame3: FrameLocator = frame2.frameLocator("#pact3");

    await frame1.locator("#inp_val").fill("Rucha");
    await frame2.locator("#jex").fill("Pooja");
    await frame3.locator("#glaf").fill("Ahmedabad");

    const headingText = await frame1.locator("//h6").innerText();
    console.log(headingText);
});