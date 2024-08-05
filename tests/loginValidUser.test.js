const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage.js');
const { HomePage } = require('../pages/homePage.js');



test.describe('Redmine login', () => {
    test('should login with existing user', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await loginPage.goto('https://www.redmine.org/login');
        const user = {
            username: 'Brgdpfv',
            password: 'adgjadgj',
        };
        await loginPage.loginUser(user);
        const loggedAs = await homePage.getLoggedAs();
        expect(loggedAs).toContain('Logged in as');
    });
});