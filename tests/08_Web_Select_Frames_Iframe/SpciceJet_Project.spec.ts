import { test, expect } from '@playwright/test';

test('Verify SpiceJet Custome Dropdown', async ({ page }) => {

    await page.goto("https://www.spicejet.com/", { waitUntil: "load" });
    await page.pause();
    const originField = page.getByTestId("to-testID-origin");
    await originField.click();
    await originField.getByRole('textbox').fill("De");
    await page.getByText("Delhi", { exact: true }).click();

    const destinationField = page.getByTestId("to-testID-destination");
    await destinationField.click();
    await destinationField.getByRole('textbox').fill("Ban");
    await page.getByText("Bengaluru", { exact: true }).click();

});