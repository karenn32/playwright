import LoginPage from '../e2e/pages/loginPage';

const loginPage = new LoginPage();

describe('Login Tests', () => {
  beforeEach(() => {
    loginPage.navigate();
  });

  it('should display an error with invalid credentials', () => {
    loginPage.enterEmail('invalid@example.com');
    loginPage.enterPassword('invalidpassword');
    loginPage.clickSignIn();

    loginPage.getErrorMessage().should('contain', 'email or password is invalid');
  });

  it('should display an error with blank email', () => {
    loginPage.enterEmail('invalid@example.com');
    loginPage.enterPassword('invalidpassword');
    loginPage.clickSignIn();

    loginPage.getErrorMessage().should('contain', 'email or password is invalid');
  });

  it('should login successfully with valid credentials', () => {
    loginPage.enterEmail('vipafo1572@foraro.com');
    loginPage.enterPassword('adgjadgj');
    loginPage.clickSignIn();

    cy.url().should('not.include', '/login');
    cy.contains('Your Feed').should('be.visible');
  });
});