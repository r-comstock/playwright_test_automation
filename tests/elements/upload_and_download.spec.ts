import { test, expect } from '@playwright/test';
import * as path from 'path';

test.describe('Test upload and download elements', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/upload-download');
    });
    test.afterEach(async ({ page }) => {
        await page.close();
    });
    test('Test uploading a file', async ({ page }) => {
        const fileInput = page.locator('#uploadFile');
        await fileInput.setInputFiles(path.join(__dirname, '../test_data/demo.txt'));
        await expect(page.getByText('C:\\fakepath\\demo.txt'), 'File failed to upload, failing test.').toBeVisible();
    });
    test('Test downloading a file', async ({ page }) => {
        const downloadPromise = page.waitForEvent('download', { timeout: 15000 });//wait up to 15 seconds for download
        const downloadButton = page.locator('#downloadButton');
        await downloadButton.click();
        const download = await downloadPromise;
        expect(download).toBeTruthy();
    });
});