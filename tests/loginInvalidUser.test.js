const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage.js');
import { generateRandomString } from '../utils/random.js';

const randomUser = 'invalidUser' + generateRandomString(4);
const randomPassword = generateRandomString(10);

test.describe('Redmine login', () => {
    test('should not login with random user and password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto('https://www.redmine.org/login');
        const user = {
            username: randomUser,
            password: randomPassword,
        };
        await loginPage.loginUser(user);
        const flashError = await loginPage.getFlashError();
        expect(flashError).toContain('Invalid user or password')
    });
});