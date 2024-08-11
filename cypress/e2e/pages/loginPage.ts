import Page from '../pages/page';

class LoginPage extends Page{
    navigate() {
      cy.visit('https://demo.realworld.io/#/login');
    }
  
    getEmailInput() {
      return cy.get('input[type="email"]');
    }
  
    getPasswordInput() {
      return cy.get('input[type="password"]');
    }
  
    getSignInButton() {
      return cy.get('button[type="submit"]');
    }
  
    getErrorMessage() {
      return cy.get('.error-messages');
    }
  
    enterEmail(email: string) {
      this.getEmailInput().type(email);
    }
  
    enterPassword(password: string) {
      this.getPasswordInput().type(password);
    }
  
    clickSignIn() {
      this.getSignInButton().click();
    }
  }
  
  export default LoginPage;