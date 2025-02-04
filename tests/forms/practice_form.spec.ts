import { expect, test } from '@playwright/test';
import { PracticeFormPage, Gender } from '../../pages/practice_form-page';

test.describe('Test the practice form', () => {
    test('Test submitting the form with only completing the required fields', async ({ page }) => {
        const practiceFormPage = new PracticeFormPage(page);
        try {
            await page.goto('/automation-practice-form');
            await practiceFormPage.nameInput.fill('John');
            await practiceFormPage.lastNameInput.fill('Doe');
            await practiceFormPage.selectGender('Male');
            await practiceFormPage.mobileNumberInput.fill('1234567890');
            await practiceFormPage.submitButton.click();
            await expect(practiceFormPage.modalContent).toContainText('Thanks for submitting the form');
        } finally {
            await page.close();
        }
    });
    test('Test submitting the form with missing required fields', async ({ page }) => {
        const practiceFormPage = new PracticeFormPage(page);
        try {
            await page.goto('/automation-practice-form');
            await practiceFormPage.nameInput.fill('John');
            await practiceFormPage.lastNameInput.fill('Doe');
            await practiceFormPage.submitButton.click();
            await expect(practiceFormPage.modalContent).not.toContainText('Thanks for submitting the form');
        } finally {
            await page.close();
        }
    });
    test('Test submitting the form with all fields completed', async ({ page }) => {
        const practiceFormPage = new PracticeFormPage(page);
        try {
            await page.goto('/automation-practice-form');
            await practiceFormPage.fillOutForm('John', 'Doe', 'Male' as Gender, '1234567890');
            await practiceFormPage.submitButton.click();
            await expect(practiceFormPage.modalContent).toContainText('Thanks for submitting the form');
        } finally {
            await page.close();
        }
    });
});