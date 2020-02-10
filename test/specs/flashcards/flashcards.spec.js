import { expect } from 'chai';
import LoginPage from "../login/LoginPage";
import ProfilePage from '../profile/ProfilePage';
import FlashCardsPage from "./FlashCardsPage";

const gname = 'QA' + Math.floor(Math.random() * 100);

const cardsPage = {
    h1: 'FlashCards',
    h5: 'Create Flash Group',
    groupName: gname,
    groupDescription: 'The best QA group in the world',
};

describe('CREATE FLASH GROUP POSITIVE ' +
    'with group name and group description', () => {
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

    it('should fill out input `Group name` field', () => {
        const element = FlashCardsPage.groupName;
        element.setValue(cardsPage.groupName);
        browser.pause(1000);
    });

    it('should fill out input `Group description` field', () => {
        const element = FlashCardsPage.groupDescription;
        element.setValue(cardsPage.groupDescription);
        browser.pause(5000);
    });

    it('should submit form', () => {
        FlashCardsPage.createBtn.click();
        browser.pause(5000);
    });

});