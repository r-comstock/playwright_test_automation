import { Page, Locator } from '@playwright/test';

export class PracticeFormPage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly lastNameInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly submitButton: Locator;
    readonly modalContent: Locator;
    readonly dateOfBirthInput: Locator;
    readonly subjectsInput: Locator;
    readonly hobbiesCheckbox: Locator;
    readonly selectPiture: Locator;
    readonly currentAddressInput: Locator;
    readonly stateDropdown: Locator;
    readonly cityDropdown: Locator;
    readonly emailInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.locator('#lastName');
        this.mobileNumberInput = page.locator('#userNumber');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.modalContent = page.locator('.modal-content');
        this.emailInput = page.locator('#userEmail');
        this.dateOfBirthInput = page.locator('#dateOfBirthInput');
        this.subjectsInput = page.locator('#subjectsInput');
        this.selectPiture = page.locator('#uploadPicture');
        this.currentAddressInput = page.locator('#currentAddress');
        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');
    }

    /**
     * Fills out the practice form with the provided details.
     * 
     * @param {string} name - The first name to enter in the form.
     * @param {string} lastName - The last name to enter in the form.
     * @param {string} gender - The gender to select in the form.
     * @param {string} mobileNumber - The mobile number to enter in the form.
     * @returns {Promise<void>}
     */
    async fillOutForm(name: string, lastName: string, gender: Gender, mobileNumber: string): Promise<void> {
        try {
            await this.nameInput.fill(name);
            await this.lastNameInput.fill(lastName);
            await this.selectGender(gender);
            await this.mobileNumberInput.fill(mobileNumber);
            await this.emailInput.fill('test@test.com');
            await this.subjectsInput.fill('Maths');
            await this.selectHobbies(['Sports','Reading']);
            await this.selectPiture.setInputFiles('test_data/sampleFile.jpeg');
            await this.currentAddressInput.fill('1234 Test St');
            await this.stateDropdown.selectOption({ label: 'NCR' });
            await this.cityDropdown.selectOption({ label: 'Delhi' });
            const currentDate = new Date();
            await this.dateOfBirthInput.fill(currentDate.getDate().toString());
        } catch (e) {
            console.log(e);
        }
    }

    /**
     * Select gender
     * @param gender 
     */
    async selectGender(gender: Gender): Promise<void> {
        await this.page.getByText(gender, { exact: true }).click();
    }

    /**
     * Select hobbies
     * @param hobbies 
     */
    async selectHobbies(hobbies: string[]): Promise<void> {
        for (const hobby of hobbies) {
            await this.page.getByRole('checkbox', { name: hobby }).check();
        }
    }
}

/**
 * Type alias for gender options.
 */
export type Gender = 'Male' | 'Female' | 'Other';