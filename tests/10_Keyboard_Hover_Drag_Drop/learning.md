# Playwright Keyboard, Hover & Drag/Drop API

## Keyboard

### `page.keyboard.press(key)`
Simulates pressing a single key (press + release).

```ts
await page.keyboard.press("Enter");
await page.keyboard.press("A");
await page.keyboard.press("Shift+A");
```

### `page.keyboard.down(key)`
Presses a key and holds it (does not release). Useful for modifier combinations.

```ts
await page.keyboard.down("Shift");
await page.keyboard.press("A"); // types uppercase A
await page.keyboard.up("Shift");
```

### `page.keyboard.up(key)`
Releases a previously held key.

```ts
await page.keyboard.up("Control");
```

### `page.keyboard.insertText(text)`
Inserts the given text without any key events.

```ts
await page.keyboard.insertText("Hello World");
```

### `page.keyboard.type(text)`
Types text character by character, firing keydown, keypress, input, and keyup events.

```ts
await page.keyboard.type("Hello");
```

---

## Common Key Names

| Key               | Value              |
|-------------------|--------------------|
| Enter             | `"Enter"`          |
| Escape            | `"Escape"`         |
| Tab               | `"Tab"`            |
| ArrowLeft         | `"ArrowLeft"`      |
| ArrowRight        | `"ArrowRight"`     |
| ArrowUp           | `"ArrowUp"`        |
| ArrowDown         | `"ArrowDown"`      |
| Backspace         | `"Backspace"`      |
| Delete            | `"Delete"`         |
| Home              | `"Home"`           |
| End               | `"End"`            |
| PageUp            | `"PageUp"`         |
| PageDown          | `"PageDown"`       |
| Space             | `" "` or `"Space"` |
| Control           | `"Control"`        |
| Shift             | `"Shift"`          |
| Alt               | `"Alt"`            |
| Meta (Win/Cmd)    | `"Meta"`           |
| F1 - F12          | `"F1"` ... `"F12"` |

---

## Mouse

### `page.mouse.down([options])`
Simulates pressing a mouse button (holding it down).

```ts
await page.mouse.down();                              // left button
await page.mouse.down({ button: "right" });           // right button
await page.mouse.down({ button: "middle" });          // middle button
```

### `page.mouse.up([options])`
Simulates releasing a mouse button.

```ts
await page.mouse.up();
await page.mouse.up({ button: "right" });
```

### `page.mouse.click(x, y[, options])`
Clicks at a specific position.

```ts
await page.mouse.click(100, 200);
await page.mouse.click(100, 200, { button: "right", clickCount: 2 });
```

### `page.mouse.dblclick(x, y[, options])`
Double-clicks at a specific position.

```ts
await page.mouse.dblclick(100, 200);
```

### `page.mouse.move(x, y[, options])`
Moves the mouse to a specific position.

```ts
await page.mouse.move(100, 200);
await page.mouse.move(300, 400, { steps: 10 }); // smooth movement in 10 steps
```

### `page.mouse.wheel(deltaX, deltaY)`
Scrolls the mouse wheel.

```ts
await page.mouse.wheel(0, 500); // scroll down 500px
```

---

## Hover

Hover over an element using the `hover()` locator method (internally uses `mouse.move`).

```ts
await page.locator("button").hover();
await page.locator("#menu").hover({ force: true });
```

---

## Drag & Drop

### `page.locator.dragTo(target)`
Drags an element onto another element.

```ts
const source = page.locator("#draggable");
const target = page.locator("#droppable");
await source.dragTo(target);
```

### Manual drag with mouse events

```ts
const box = await page.locator("#draggable").boundingBox();
if (box) {
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(targetX, targetY, { steps: 10 });
  await page.mouse.up();
}
```
