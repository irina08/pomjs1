import Page from '../Page';

class ProfilePage extends Page {

    get h1 () {
        return $('//h1');
    }

    get cardsBtn () {
        return $('//div[@id="site-menu"]//a[@qa="cards-link"]');
    }

}

export default new ProfilePage();