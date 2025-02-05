import { test, expect } from '@playwright/test';

test.describe('Test Alerts', () => {
    test('Test alert message', async ({ page }) => {
        await page.goto('alerts');
        page.on('dialog', (dialog) => {
            expect(dialog.message()).toBe('You clicked a button');
            dialog.accept();
        });
        await page.locator('#alertButton').click();
        await page.close();
    });
    test('Test dismissing an alert', async ({ page }) => {
        await page.goto('alerts');
        page.on('dialog', (dialog) => {
            dialog.dismiss();
        });
        await page.locator('#confirmButton').click();
        await page.close();
    });
    test('Test prompt message', async ({ page }) => {
        await page.goto('alerts');
        page.on('dialog', (dialog) => {
            expect(dialog.message()).toBe('Please enter your name');
            dialog.accept('John Doe');
        });
        await page.locator('#promtButton').click();
        await expect(page.locator('#promptResult')).toContainText('John Doe');
        await page.close();
    });
});