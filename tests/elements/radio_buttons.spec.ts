import { test, expect } from '@playwright/test';

test.describe('Test radio button elements', () => {
    test('Test that the yes radio button can be selected', async ({ page }) => {
        const yesRadioButton = page.locator('#yesRadio');
        try {
            await page.goto('/radio-button');
            await yesRadioButton.check();
            await expect(yesRadioButton).toBeChecked();
        } finally {
            await page.close();
        }
    });
    test('Test that the no radio button cannot be selected', async ({ page }) => {
        const noRadioButton = page.locator('#noRadio');
        try {
            await page.goto('/radio-button');
            await expect(noRadioButton).toBeDisabled();
        } finally {
            await page.close();
        }
    });
});