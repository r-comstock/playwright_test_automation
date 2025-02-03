import { expect, test } from '@playwright/test';
import { PracticeFormPage } from '../../pages/practice_form-page';

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
            await expect(practiceFormPage.modalContent).toContainText('Txxhanks for submitting the form');
        } finally {
            await page.close();
        }
    });


});