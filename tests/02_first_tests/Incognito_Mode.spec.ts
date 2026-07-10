// Incognito-like Context
import { test, expect } from '@playwright/test';

test('fresh context like incognito', async ({ browser }) => {
    // Each newContext() is like incognito
    // No shared cookies, localStorage, etc.

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    // These are completely isolated
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await context1.close();
    await context2.close();
});