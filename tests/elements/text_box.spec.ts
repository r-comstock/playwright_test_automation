import { test, expect } from '@playwright/test';
import { ElementsPage } from '../../pages/elements-page';

test.describe('Test text box elements', () => {
    let elementsPage: ElementsPage;

    test.beforeEach(async ({ page }) => {
        elementsPage = new ElementsPage(page);
    });

    test('Test form submission', async ({ page }) => {
        try{
            //Navigate to the url
            await page.goto('/text-box');
            //Fill in the form
            await elementsPage.fullNameTextBox.fill('John Doe');
            await elementsPage.emailTextBox.fill('fakeemail@fakedomain.com');
            await elementsPage.currentAddressTextBox.fill('123 Main St');
            await elementsPage.permanentAddressTextBox.fill('456 Elm St');
            await elementsPage.submitButton.click();
            //Verify the form submission - in this example a successful submission will display the form data in a div
            await expect(page.locator('#output').locator('#name')).toContainText('John Doe');
            await expect(page.locator('#output').locator('#email')).toContainText('fakeemail@fakedomain.com');
            await expect(page.locator('#output').locator('#currentAddress')).toContainText('123 Main St');
            await expect(page.locator('#output').locator('#permanentAddress')).toContainText('456 Elm St');
            } finally {
            await page.close();
            }
    });

});