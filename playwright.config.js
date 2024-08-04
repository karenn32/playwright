const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  reporter: [
    ['allure-playwright'],
  ],


  use: {
    headless: true,
    screenshot: 'only-on-failure',
  },


  outputDir: 'allure-results',


  testDir: './tests',
  timeout: 30000,
  retries: 0,
});
