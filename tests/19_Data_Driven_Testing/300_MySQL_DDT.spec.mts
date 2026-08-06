import { test, expect } from '@playwright/test';
import mysql from 'mysql2/promise';

interface LoginData {
    description: string;
    username: string;
    password: string;
    shouldPass: boolean;
    expectedError: string;
}

async function fetchUsersFromMySQL(): Promise<LoginData[]> {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'playwright_ddt'
    });

    const [rows] = await connection.query(
        'SELECT description, username, password, should_pass, expected_error FROM users'
    );

    await connection.end();

    return (rows as any[]).map((row) => ({
        description: row.description,
        username: row.username,
        password: row.password,
        shouldPass: Boolean(row.should_pass),
        expectedError: row.expected_error
    }));
}

const loginData = await fetchUsersFromMySQL();

test.describe('DDT MySQL', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {

            const textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            const textboxPassword = page.getByRole("textbox", { name: "Password" })
                .or(page.locator("#password"))
                .or(page.locator("[name=\"password\"]"));
            const buttonLogin = page.getByRole("button", { name: "Login to Practice Account" })
                .or(page.getByTestId("login-button"))
                .or(page.getByText("Login to Practice Account"));

            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLogin.click();

            if (data.shouldPass) {
                await expect(page).not.toHaveURL(/multiple_element_filter/);
            } else {
                await expect(page.getByText(data.expectedError)).toBeVisible();
            }
        });

    }

});
