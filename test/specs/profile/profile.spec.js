import { expect } from 'chai';
import LoginPage from "../login/LoginPage";
import ProfilePage from './ProfilePage';

describe('PROFILE', () => {
    before('', () => {
        LoginPage.login();
        browser.pause(5000);
    });

    it('should go to Profile page', () => {
        expect(ProfilePage.h1.getText()).eq('Irina Ger');
    });
});