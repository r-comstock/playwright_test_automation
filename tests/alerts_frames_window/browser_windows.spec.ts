import { test, expect } from '@playwright/test';

const url = 'browser-windows';

test.describe('Test browser windows', () => {
    test('Test new tab is opened', async ({ page }) => {
        await page.goto(url);
        const newTabPromise = page.waitForEvent('popup');
        await page.locator('#tabButton').click();
        const newTab = await newTabPromise;
        expect(newTab.url()).toBe('https://demoqa.com/sample');
        await newTab.close();
        await page.close();
    });
    test('Test new window is opened', async ({ page }) => {
        await page.goto(url);
        const newWindowPromise = page.waitForEvent('popup');
        await page.locator('#windowButton').click();
        const newWindow = await newWindowPromise;
        expect(newWindow.url()).toBe('https://demoqa.com/sample');
        await newWindow.close();
        await page.close();
    });
    test('Test new window message', async ({ page }) => {
        await page.goto(url);
        const newWindowPromise = page.waitForEvent('popup');
        await page.locator('#messageWindowButton').click();
        const newWindow = await newWindowPromise;
        expect(newWindow).toBeTruthy();
        await newWindow.close();
        await page.close();
    });
});