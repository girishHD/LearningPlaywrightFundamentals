import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Verify Frameset', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    const mainFrame: FrameLocator = page.frameLocator("[name = 'main']");

    const heading = await mainFrame.locator("h2").innerText();
    console.log(heading);

    const allFrames: Locator[] = await page.locator("//frame").all();

    for (let frame of allFrames) {
        console.log(await frame.getAttribute("name"), ":", await frame.getAttribute("src"));
    }

    let sideFrame: FrameLocator = page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

});