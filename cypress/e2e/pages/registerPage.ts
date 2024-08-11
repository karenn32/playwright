import Page from './page';

class RegisterPage extends Page {
    navigate() {
        cy.visit('https://demo.realworld.io/#/register');
      }

  getUsernameInput() {
    return cy.get('input[placeholder="Username"]');
  }

  getEmailInput() {
    return cy.get('input[placeholder="Email"]');
  }

  getPasswordInput() {
    return cy.get('input[placeholder="Password"]');
  }

  getSignUpButton() {
    return cy.get('button[type="submit"]');
  }

  enterUsername(username: string) {
    this.getUsernameInput().type(username);
  }

  enterEmail(email: string) {
    this.getEmailInput().type(email);
  }

  enterPassword(password: string) {
    this.getPasswordInput().type(password);
  }

  clickSignUp() {
    this.getSignUpButton().click();
  }
}

export default RegisterPage;
