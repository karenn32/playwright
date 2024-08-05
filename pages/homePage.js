const { Page } = require('./page');

const loggedAs = '#loggedas';

class HomePage extends Page {
    constructor(page) {
        super(page);
    }

    async getLoggedAs() {
        return this.page.locator(loggedAs).innerText();
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

module.exports = { HomePage };
