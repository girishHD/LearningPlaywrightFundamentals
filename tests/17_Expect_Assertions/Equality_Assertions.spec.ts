import { test, expect } from '@playwright/test';

// 4.1 Equality Assertions
// ✅ `toBe` 
test('toBe', () => {
    expect(2 + 2).toBe(4);
});

// ✅ `toEqual` 
test('toEqual', () => {
    expect({
        name: 'Playwright',
        type: 'Framework',
    }).toEqual({
        name: 'Playwright',
        type: 'Framework',
    });
});

// ✅ `toStrictEqual` 
test('toStrictEqual', () => {
    class Config {
        retries = 2;
    }
    expect(new Config()).toStrictEqual(new Config());
});