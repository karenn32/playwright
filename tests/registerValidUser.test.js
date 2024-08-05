const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/registerPage.js');
const { LoginPage } = require('../pages/loginPage.js');
import { generateRandomString } from '../utils/random.js';

const randomUser = 'userForeTest' + generateRandomString(4);
const randomPassword = generateRandomString(8);
const randomEmail = 'userForTest' + generateRandomString(4) + '@test.com';

test.describe('Redmine Registration', () => {
    test('should register a new user', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const loginPage = new LoginPage(page);
        await registerPage.goto('https://www.redmine.org/account/register');

        const user = {
            username: randomUser,
            password: randomPassword,
            confirmPassword: randomPassword,
            firstname: 'TesTesterio',
            lastname: 'Userenko',
            email: randomEmail,
        };

        await registerPage.registerUser(user);
        const flashNotice = await loginPage.getFlashNotice();
        expect(flashNotice).toContain('Account was successfully created. An email containing the instructions to activate your account was sent to ' + randomEmail);
    });
});
