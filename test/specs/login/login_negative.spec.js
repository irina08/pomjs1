import { expect } from 'chai';
import LoginPage from './LoginPage';
import ProfilePage from '../profile/ProfilePage';

describe('LOGIN negative', () => {
    it('should open login page', () => {
        LoginPage.open();
        browser.pause(5000);
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });

    it('should fill out email field', () => {
        LoginPage.email.setValue('igolovko@mail.ccsf.edu');
        browser.pause(1000);
    });

    it('should fill out password field', () => {
        LoginPage.password.setValue('qaz123qaz+');
        browser.pause(1000);
    });

    it('should submit form', () => {
        LoginPage.submitBtn.click();
        browser.pause(1000);
    });

    it('should check h1 text', () => {
        expect(LoginPage.h1.getText()).eq('User Login');
        browser.pause(1000);
    });

});