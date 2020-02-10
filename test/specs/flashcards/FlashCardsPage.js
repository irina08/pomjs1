import Page from '../Page';

class FlashCardsPage extends Page {

    get h1 () {
        return $('h1');
    }

    get createNewFlashGroupBtn () {
        return $('//button[@qa="flash-create-new-group"]');
    }

    get modalWindow () {
        return $('//div[contains(@class, "sidepanel")]');
    }

    get modalWindowHeading () {
        return $('//div[contains(@class, "sidepanel")]//*[@class="modal-title"]');
    }

    get groupName() {
        return $('//div[contains(@class, "sidepanel")]//input[@name="name"]');
    }

    get groupDescription() {
        return $('//div[contains(@class, "sidepanel")]//input[@name="description"]');
    }

    get createBtn () {
        return $('//div[contains(@class, "sidepanel")]//button[@type="submit"]');
    }

    get createdGroupTitle() {
        return $('//div[@qa="flash-group-list "]//h4/a');
    }

    get createdGroupDescription () {
        return $('//div[@qa="flash-group-list "]//div[@qa="description"]');
    }

}

export default new FlashCardsPage();