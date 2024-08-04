const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/registerPage.js');
import { generateRandomString } from '../utils/random.js';

const randomUser = 'userForeTest' + generateRandomString(4);
const randomPassword = generateRandomString(8);
const invalidEmail = 'userForTest' + generateRandomString(4) + '@com';

test.describe('Redmine Registration', () => {
    test('should register a new user', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto('https://www.redmine.org/account/register');

        const user = {
            username: randomUser,
            password: randomPassword,
            confirmPassword: randomPassword,
            firstname: 'TesTesterq',
            lastname: 'Userenko',
            email: invalidEmail,
            language: 'en'
        };

        await registerPage.registerUser(user);
        const flashError = await registerPage.getFlashError();
        expect(flashError).toContain('Email is invalid');
    });
});
