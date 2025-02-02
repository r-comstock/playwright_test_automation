import { expect, test } from '@playwright/test';

test.describe('Test check box elements', () => {
    test('Test that the home checkbox can be checked', async ({ page }) => {
        const homeCheckbox = page.locator('.rct-checkbox');
        try {
            await page.goto('/checkbox');
            await homeCheckbox.first().check();
            await expect(homeCheckbox.first()).toBeChecked();
        } finally {
            await page.close();
        }
    });
});