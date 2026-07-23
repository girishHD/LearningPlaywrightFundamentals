import { test, expect } from '@playwright/test';

test('Keyborad', async ({ page }) => {

    await page.goto("https://keycode.info");

    await page.keyboard.press("A");
    await page.screenshot({ path: "tests/10_Keyboard_Hover_Drag_Drop/A.png" });

    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'tests/10_Keyboard_Hover_Drag_Drop/ArrowLeft.png' });

    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: 'tests/10_Keyboard_Hover_Drag_Drop/O.png' });

    await page.keyboard.up("Shift");
    await page.keyboard.down("Shift");

});