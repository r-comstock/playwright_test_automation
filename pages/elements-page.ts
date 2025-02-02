import { Locator, Page } from '@playwright/test';

export class ElementsPage {
    readonly page: Page;
    readonly fullNameTextBox: Locator;
    readonly emailTextBox: Locator;
    readonly currentAddressTextBox: Locator;
    readonly permanentAddressTextBox: Locator;
    readonly submitButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.fullNameTextBox = page.getByPlaceholder('Full Name');
        this.emailTextBox = page.locator('#userEmail');
        this.currentAddressTextBox = page.locator('#currentAddress');
        this.permanentAddressTextBox = page.locator('#permanentAddress');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }
}