import { Locator, Page } from '@playwright/test';


export class LoginPage {
    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;
    readonly newUserButton: Locator;
    readonly firstNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly registerButton: Locator;
    readonly backToLoginButton: Locator;
    readonly imNotARobotCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameTextBox = page.getByPlaceholder('Username');
        this.passwordTextBox = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.newUserButton = page.getByRole('button', { name: 'New User' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.backToLoginButton = page.getByRole('button', { name: 'Back to Login' });
        this.firstNameTextBox = page.locator('#firstname');
        this.lastNameTextBox = page.locator('#lastname');
        this.imNotARobotCheckbox = page.locator('#rc-anchor-alert');
    }

    
    /**
     * Login to the application
     * @param username 
     * @param password 
     */
    async login(username: string, password: string) {
        try {
            await this.usernameTextBox.fill(username);
            await this.passwordTextBox.fill(password);
            await this.loginButton.click();
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    /**
     * Create a new user
     * @param firstName 
     * @param lastName 
     * @param username 
     * @param password 
     */
    async createNewUser(firstName: string, lastName: string, username: string, password: string) {
        try {
            await this.newUserButton.click();
            await this.firstNameTextBox.fill(firstName);
            await this.lastNameTextBox.fill(lastName);
            await this.usernameTextBox.fill(username);
            await this.passwordTextBox.fill(password);
            await this.imNotARobotCheckbox.click();
            await this.registerButton.click();
        } catch (error) {
            console.error('Create new user failed:', error);
        }
    }

}