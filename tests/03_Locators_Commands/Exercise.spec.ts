import { test, expect } from "@playwright/test";

test("Verify the Make Appointment is visible", async ({ page }) => {
    page.goto("https://katalon-demo-cura.herokuapp.com/");

    let makeAppointementButton = page.locator('xpath=//a[@id="btn-make-appointment"]');

    await makeAppointementButton.click();

    let usernameField = page.locator('xpath=//input[@id="txt-username"]');
    let passwaorField = page.locator('xpath=//input[@id="txt-password"]');
    let loginButton = page.locator('xpath=//button[@id="btn-login"]');

    await usernameField.fill("John Doe");
    await passwaorField.fill("ThisIsNotAPassword");
    await loginButton.click();

    let dropdownField = page.locator('xpath=//select[@id="combo_facility"]');
    let checkboxField = page.locator('xpath=//input[@id="chk_hospotal_readmission"]');
    let radioOption = page.locator('xpath=//input[@id="radio_program_medicare"]');
    let dateField = page.locator('xpath=//input[@id="txt_visit_date"]');
    let commentField = page.locator('xpath=//textarea[@id="txt_comment"]');
    let bookAppointmentButton = page.locator('xpath=//button[@id="btn-book-appointment"]');
    let appointmentConfirmation = page.locator("xpath =//h2[contains(text(), 'Appointment Confirmation')]");

    await dropdownField.selectOption('Tokyo CURA Healthcare Center');
    await checkboxField.click();
    await radioOption.click();
    await dateField.click();
    await dateField.fill("18/07/2026");
    await dateField.press('Escape');
    await commentField.fill("Book Appointment");
    await bookAppointmentButton.click();
    await page.waitForTimeout(30000);
    await expect(appointmentConfirmation).toBeVisible();

});