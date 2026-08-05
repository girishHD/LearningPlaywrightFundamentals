import { test, expect } from "@playwright/test";

test.describe("Expected Assertion", () => {

    test("Verification", async ({ page }) => {
        expect(1 + 2).toBe(3);
        // expect(actual).toBe(expect)

        expect(false).toBeFalsy();
        expect(true).toBeTruthy();
        expect(null).toBeNull();
        expect(34).toBeGreaterThan(11);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect({ role: 'admin' }).toEqual({ role: 'admin' });
        expect({ age: 20, role: 'admin' }).toEqual({ age: 20, role: 'admin' });


    });
})