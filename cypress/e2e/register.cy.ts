import RegisterPage from '../e2e/pages/registerPage';
import { generateRandomString } from '../utils/random';

const randomUser = 'invalidUser' + generateRandomString(4);
const randomPassword = generateRandomString(10);
const registerPage = new RegisterPage();
const randomEmail = 'userForTest' + generateRandomString(4) + '@test.com';

describe('Register Tests', () => {
  beforeEach(() => {
    registerPage.navigate();
  });

  it('should display an error with already taken email', () => {
    registerPage.enterUsername(randomUser+'asd');
    registerPage.enterEmail('vipafo1572@foraro.com');
    registerPage.enterPassword('password');
    registerPage.clickSignUp();

    registerPage.getErrorMessage().should('contain', 'email has already been taken');
  });

  it('should display an error with blank username', () => {
    registerPage.enterUsername(' ');
    registerPage.enterEmail('vipafo1572@foraro.com');
    registerPage.enterPassword('password');
    registerPage.clickSignUp();

    registerPage.getErrorMessage().should('contain', 'username can\'t be blank');
  });

  it('should display an error with blank email', () => {
    registerPage.enterUsername('testUserenko');
    registerPage.enterEmail(' ');
    registerPage.enterPassword('password');
    registerPage.clickSignUp();

    registerPage.getErrorMessage().should('contain', 'email can\'t be blank');
  });

  it('should display an error with blank password', () => {
    registerPage.enterUsername('dasdasd');
    registerPage.enterEmail('vipafo1572@foraro.com');
    registerPage.enterPassword(' ');
    registerPage.clickSignUp();

    registerPage.getErrorMessage().should('contain', 'password can\'t be blank');
  });
  it('should display an error with already taken username', () => {
    registerPage.enterUsername('adgjadg');
    registerPage.enterEmail(randomEmail);
    registerPage.enterPassword('password');
    registerPage.clickSignUp();

    registerPage.getErrorMessage().should('contain', 'username has already been taken');
  });


  it('should register successfully with valid credentials', () => {
    registerPage.enterUsername(randomUser);
    registerPage.enterEmail(randomEmail);
    registerPage.enterPassword(randomPassword);
    registerPage.clickSignUp();

    cy.url().should('not.include', '/register');
    cy.contains('Your Feed').should('be.visible');
  });
});
