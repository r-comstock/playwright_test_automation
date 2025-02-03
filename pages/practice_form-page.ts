import { Page, Locator } from '@playwright/test';

export class PracticeFormPage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly lastNameInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly submitButton: Locator;
    readonly modalContent: Locator;


    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.locator('#lastName');
        this.mobileNumberInput = page.locator('#userNumber');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.modalContent = page.locator('.modal-content');
    }

    async selectGender(gender: 'Male' | 'Female' | 'Other') {
        await this.page.getByText(gender, { exact: true }).click();
    }
}