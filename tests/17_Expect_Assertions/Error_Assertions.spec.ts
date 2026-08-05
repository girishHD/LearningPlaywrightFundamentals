import { test, expect } from '@playwright/test';

// 4.5 Error Assertions
// ✅ `toThrow` 
test('toThrow', () => {
    const parse = () => JSON.parse('{bad-json}');

    expect(parse).toThrow();
});

// ✅ `toThrow(RegExp)` 
test('toThrow regex', () => {
    const validate = () => {
        throw new Error('Invalid email');
    };

    expect(validate).toThrow(/Invalid/);
});