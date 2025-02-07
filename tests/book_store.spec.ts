import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/book_store_pages/login-page';

const loginUrl = 'login';

test.describe('Book Store Application Login Tests', () => {
    test('Test creating a new user', async ({page}) => {
        const loginPage = new LoginPage(page);
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const username = faker.internet.username();
        const password = faker.internet.password({ length: 8 });

        await page.goto(loginUrl);
        await loginPage.createNewUser(firstName, lastName, username, password);
    });
});