import { test, expect } from '@playwright/test';

// 3. API Response Assertions
// ✅ `toBeOK` 
test('toBeOK', async ({ request }) => {
    const response = await request.get(
        'https://reqres.in/api/users/2'
    );

    await expect(response).toBeOK();
});

// ✅ Negative API Assertion
test('not.toBeOK', async ({ request }) => {
    const response = await request.get(
        'https://reqres.in/api/users/999999'
    );

    await expect(response).not.toBeOK();
});