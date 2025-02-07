import { test, expect } from '@playwright/test';

test.describe('Test Accordian', () => {
    test('Test opening and closing an accordian', async ({ page }) => {
        await page.goto('accordian');
        const accordian = page.locator('#section1Heading');
        await expect(page.locator('#section1Content')).toBeVisible();
        await accordian.click();
        await expect(page.locator('#section1Content')).not.toBeVisible();
        await page.close();
    });
});