import { test, expect } from '@playwright/test';

// 4.2 Numeric Assertions
// ✅ `toBeGreaterThan` 
test('toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(5);
});

// ✅ `toBeCloseTo` 
test('toBeCloseTo', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
});