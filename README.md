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

3. **Install Playwright browsers:**

   ```bash
   npx playwright install
   ```

### Configuration

Configure Playwright and Allure Report as needed in `playwright.config.js`.

## Running Tests

To run the tests in HEADLESS mod, use the following command:

```bash
npm run test
```

or in HEADED

```bash
npm run test:headed
```

This command will execute all the test files located in the `tests` directory. By default, Playwright will look for files with `.spec.js` or `.test.js` extensions.

## Generating Allure Reports

1. **Install Allure Command Line Interface (CLI):**

   ```bash
   npm install -g allure-commandline --save-dev
   ```

2. **Run tests:**

   ```bash
   npm run test
   ```

   This command will generate test results in the Allure format.

3. **Generate the Allure Report:**

   ```bash
   npm run allure:generate
   ```

4. **Serve the Allure Report (optional):**

   ```bash
   npm run allure:open
   ```

## GitHub Pages Deployment

The Allure Report is automatically deployed to GitHub Pages after pull request in MAIN branch. Make sure to configure your GitHub repository settings to enable GitHub Pages and point it to the `gh-pages` branch.

After deployment, you can access the report via link https://karenn32.github.io/playwright/
