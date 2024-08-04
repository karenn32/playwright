// pages/page.js
class Page {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

    async getUrl() {
        return this.page.url();
    }
}

module.exports = { Page };
