import { test, expect } from '@playwright/test';

test('Verify Element by filter', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const forgottenPasswordLink = page.locator('a.list-group-item').filter({ hasText: "Forgotten Password" });
    await forgottenPasswordLink.click();

    /*    // await page.waitForTimeout(5000);
        // for subString
        // Address Book - ^Address (start with)
    
        const addressBookLink = page.locator('a.list-group-item').filter({ hasText: "/^Address/" });
        console.log(addressBookLink);
    
        await addressBookLink.click();
    
        // await page.waitForTimeout(5000);
        // My Account - Account (end with)
        const myAccountLink = page.locator('a.list-group-item').filter({ hasText: "/$Account/" });
        await myAccountLink.click();*/

    const links = page.locator('a.list-group-item');
    expect(links).toHaveCount(13);

    const privacyPolicyLink = page.locator('footer a').filter({ hasText: 'Privacy Policy' });
    expect(privacyPolicyLink).toHaveAttribute('href', '#privacy-policy');
});