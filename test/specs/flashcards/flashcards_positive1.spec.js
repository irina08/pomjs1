import { expect } from 'chai';
import LoginPage from "../login/LoginPage";
import ProfilePage from '../profile/ProfilePage';
import FlashCardsPage from "./FlashCardsPage";
const { cardsPage } = require ("./cards_data");


describe('CREATE FLASH GROUP POSITIVE ' +
    'with group name', () => {
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

    it('should submit form', () => {
        FlashCardsPage.createBtn.click();
        browser.pause(10000);
    });

    it('should first item in the list be equal created group title', () =>  {
        const actual = FlashCardsPage.createdGroupTitle.getText();
        const expected = cardsPage.groupName;
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should verify created title group is clickable', () => {
        FlashCardsPage.createdGroupTitle.click();
        browser.pause(1000);
    });

    after('should user logout', () => {
        ProfilePage.logout();
        browser.pause(1000);
    });

});