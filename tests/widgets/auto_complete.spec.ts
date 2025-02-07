import { test, expect } from '@playwright/test';

test.describe('Test Auto Complete', () => {
    test('Test auto complete for a single value', async ({ page }) => {
        await page.goto('auto-complete');
        const input = page.locator('#autoCompleteSingleContainer');
        await input.fill('R');
        await page.waitForSelector('.autocomplete-items');
        await page.close();
    });
});