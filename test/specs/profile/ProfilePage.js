import Page from '../Page';

class ProfilePage extends Page {

    get h1 () {
        return $('//h1');
    }

    get cardsBtn () {
        return $('//div[@id="site-menu"]//a[@qa="cards-link"]');
    }

    get logoutDropdown() {
        return $('//a[@class="dropdown-toggle nav-link"]');
    }

    get logoutBtn () {
        return $('//button[contains(text(),"Logout")]');
    }

    logout() {
        this.logoutDropdown.click();
        this.logoutBtn.click();
    }

}

export default new ProfilePage();