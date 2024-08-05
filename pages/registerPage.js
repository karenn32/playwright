// pages/registerPage.js
const { Page } = require('./page');

const usernameInput = '#user_login';
const passwordInput = '#user_password';
const confirmPasswordInput = '#user_password_confirmation';
const firstnameInput = '#user_firstname';
const lastnameInput = '#user_lastname';
const emailInput = '#user_mail';
const languageSelect = '#user_language';
const submitButton = 'input[name="commit"]';
const flashError = '#errorExplanation';

class RegisterPage extends Page {
    constructor(page) {
        super(page);
    }

    async fillUsername(username) {
        await this.page.locator(usernameInput).fill(username);
    }

    async fillPassword(password) {
        await this.page.locator(passwordInput).fill(password);
    }

    async fillConfirmPassword(confirmPassword) {
        await this.page.locator(confirmPasswordInput).fill(confirmPassword);
    }

    async fillFirstname(firstname) {
        await this.page.locator(firstnameInput).fill(firstname);
    }

    async fillLastname(lastname) {
        await this.page.locator(lastnameInput).fill(lastname);
    }

    async fillEmail(email) {
        await this.page.locator(emailInput).fill(email);
    }

    async selectLanguage(language) {
        await this.page.locator(languageSelect).selectOption(language);
    }

    async submit() {
        await this.page.locator(submitButton).click();
    }

    async getFlashError() {
        return this.page.locator(flashError).innerText();
    }

    async registerUser(user) {
        await this.fillUsername(user.username);
        await this.fillPassword(user.password);
        await this.fillConfirmPassword(user.confirmPassword);
        await this.fillFirstname(user.firstname);
        await this.fillLastname(user.lastname);
        await this.fillEmail(user.email);
        if (user.language) {
            await this.selectLanguage(user.language);
        }
        await this.submit();
    }
}

module.exports = { RegisterPage };
