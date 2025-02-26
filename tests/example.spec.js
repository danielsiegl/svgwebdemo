import { test, expect } from '@playwright/test';

test('hello world!', async ({ page }) => {
    await page.goto('http://127.0.0.1:8000');
    const title = await page.title();
    expect(title).toBe('SVG Move Example');
});