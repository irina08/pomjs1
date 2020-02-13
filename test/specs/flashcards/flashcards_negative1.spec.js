import { expect } from 'chai';
import LoginPage from "../login/LoginPage";
import ProfilePage from '../profile/ProfilePage';
import FlashCardsPage from "./FlashCardsPage";
import { cardsPage } from "./cards_data";


describe('CREATE FLASH GROUP NEGATIVE ' +
    'with empty required field', () => {
    before('', () => {
        LoginPage.login();
        browser.pause(1000);
    });

    it('should go to Flesh Cards page', () => {
        ProfilePage.cardsBtn.click();
        browser.pause(1000);
        const actual = FlashCardsPage.h1.getText();
        const expected = cardsPage.h1;
        expect(actual).eq(expected);
    });

    it('should click button "Create New FlashGroup"', () => {
        FlashCardsPage.createNewFlashGroupBtn.click();
        browser.pause(1000);
    });

    it('should check if modal window is open', () => {
        const element = FlashCardsPage.modalWindow;
        expect(element.isDisplayed()).true;
        browser.pause(1000);
    });

    it('should check if modal window has heading `Create Flash Group`', () => {
        const actual = FlashCardsPage.modalWindowHeading.getText();
        const expected = cardsPage.h5;
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should fill out input `Group description` field', () => {
        const element = FlashCardsPage.groupDescription;
        element.setValue(cardsPage.groupDescription);
        browser.pause(1000);
    });

    it('should button "Create" will be Disable', () => {
        const element = FlashCardsPage.createBtn;
        expect(element.isEnabled()).to.be.false;
        browser.pause(10000);
    });

    it('should close Modal Window', () => {
        FlashCardsPage.closeModalWindow.click();
        browser.pause(10000);
    });

    after('should user logout', () => {
        ProfilePage.logout();
        browser.pause(1000);
    });

});