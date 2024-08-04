# Redmine Testing Suite

## Overview

This repository contains a testing suite for the Redmine application, built using Playwright for end-to-end testing. The suite includes tests for user registration and login functionalities. The results of these tests are reported using Allure Report, which is displayed via GitHub Pages (gh-pages).

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/karenn32/playwright.git
   cd playwright
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

### Configuration

Configure Playwright and Allure Report as needed in `playwright.config.js`.

## Running Tests

To run the tests, use the following command:

```bash
npx playwright test ///////////////////////////
```

This command will execute all the test files located in the `tests` directory. By default, Playwright will look for files with `.spec.js` or `.test.js` extensions.

## Generating Allure Reports

1. **Install Allure Command Line Interface (CLI):**

   ```bash
   npm install -g allure-commandline --save-dev
   ```

2. **Run tests with Allure reporting:**

   ```bash
   npx playwright test --reporter=line,allure-playwright
   ```

   This command will generate test results in the Allure format.

3. **Generate the Allure Report:**

   ```bash
   allure generate allure-results --clean -o allure-report
   ```

4. **Serve the Allure Report (optional):**

   ```bash
   allure open allure-report
   ```

## GitHub Pages Deployment

The Allure Report is automatically deployed to GitHub Pages. Make sure to configure your GitHub repository settings to enable GitHub Pages and point it to the `gh-pages` branch.

1. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

   Ensure your `package.json` includes a deploy script for GitHub Pages:

   ```json
   "scripts": {
       "deploy": "gh-pages -d allure-report"
   }
   ```

2. **Access the report:**

   After deployment, you can access the report via link https://karenn32.github.io/playwright/

## Example Test Cases

- **User Registration Test:** Tests the registration process, including filling out the registration form and checking for success notifications.
- **User Login Test:** Tests the login process to ensure users can log in with valid credentials.

## Contact

For questions or further information, please contact:

- **Email:** karenn32@gmail.com
- **GitHub:** [karenn32](https://github.com/karenn32)
