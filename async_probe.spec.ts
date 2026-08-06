import { test } from '@playwright/test';

(async () => {
    const data = await new Promise<number[]>((resolve) => setTimeout(() => resolve([1, 2]), 10));
    test.describe('async probe', () => {
        for (const n of data) {
            test(`case ${n}`, async () => { });
        }
    });
})();
