import { test, expect, FrameLocator } from '@playwright/test';

test('Verify iframe', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    const vehicleFrame: FrameLocator = page.frameLocator('#frame-one');

    await vehicleFrame.locator("#RESULT_TextField-1").fill("Grand i10");

    await vehicleFrame.locator("#RESULT_TextField-2").fill("Girish");

    await vehicleFrame.locator("#RESULT_TextField-3").fill("MH-31-AB-1234");

    await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption("Sedan");

    await vehicleFrame.locator("#RESULT_TextField-4").fill("2026");

    await vehicleFrame.locator("#RESULT_TextArea-1").fill("Car Modification");

    await vehicleFrame.locator("#vehicle-submit").click();

    expect(vehicleFrame.locator("#vehicle-output")).toBeVisible();

    console.log(await vehicleFrame.locator("#vehicle-output").innerText());


});