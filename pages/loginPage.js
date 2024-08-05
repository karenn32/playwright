const { Page } = require('./page');

const usernameInput = '#username';
const passwordInput = '#password';
const loginButton = 'input[name="login"]';
const flashNotice = '#flash_notice';
const flashError = '#flash_error';

class LoginPage extends Page {
    constructor(page) {
        super(page);
    }

    async fillUsername(username) {
        await this.page.locator(usernameInput).fill(username);
    }

    async fillPassword(password) {
        await this.page.locator(passwordInput).fill(password);
    }

    async submit() {
        await this.page.locator(loginButton).click();
    }

    async getFlashNotice() {
        return this.page.locator(flashNotice).innerText();
    }

    async getFlashError() {
        return this.page.locator(flashError).innerText();
    }

    async loginUser(user) {
        await this.fillUsername(user.username);
        await this.fillPassword(user.password);
        await this.submit();
    }
}

module.exports = { LoginPage };
