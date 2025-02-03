import { test, expect } from '@playwright/test';

test.describe('Test button elements', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/buttons');
    });
    test.afterEach(async ({ page }) => {
        await page.close();
    });
    test('Test double clicking a button', async ({ page }) => {    
        await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
        await expect(page.getByText('You have done a double click')).toBeVisible();
    });
    test('Test right clicking a button', async ({ page }) => {
        await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
        await expect(page.getByText('You have done a right click')).toBeVisible();
    });
    test('Test clicking a button', async ({ page }) => {
        await page.getByRole('button', { name: 'Click Me', exact: true }).click();
        await expect(page.getByText('You have done a dynamic click')).toBeVisible();
    });
});