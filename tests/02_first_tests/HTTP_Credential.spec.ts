// Scenario 1: Context with HTTP Credentials

import { test, expect } from '@playwright/test';

test('context with HTTP auth', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: 'user',
            password: 'pass',
        }
    });

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await context.close();
});