import { test, expect } from '@playwright/test';

// 4.3 String & Array Assertions
// ✅ `toContain` 
test('toContain', () => {
    expect(['chrome', 'firefox']).toContain('chrome');
});

// ✅ `toMatch` 
test('toMatch', () => {
    expect('Playwright Framework').toMatch(/Framework/);
});

// ✅ `toHaveLength` 
test('toHaveLength', () => {
    expect(['a', 'b', 'c']).toHaveLength(3);
});

// 4.4 Object Assertions
// ✅ `toHaveProperty` 
test('toHaveProperty', () => {
    const response = {
        user: {
            id: 1,
            role: 'admin',
        },
    };
    expect(response).toHaveProperty('user.role', 'admin');
});

// ✅ `toMatchObject` 
test('toMatchObject', () => {
    expect({
        id: 1,
        name: 'John',
        email: 'john@test.com',
    }).toMatchObject({
        id: 1,
        name: 'John',
    });
});
