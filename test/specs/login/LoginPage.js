import Page from '../Page';

class LoginPage extends Page {
  //  email = $('//input[@name="email"]');

    get email() {
        return $('//input[@name="email"]');
    }
    get password () {
        return $('//input[@name="password"]');
    }

    get submitBtn () {
        return $('//button[@type="submit"]');
    }

    get h1 () {
        return $('//h1');
    }

    login() {
        this.open();
        this.email.setValue('igolovko@mail.ccsf.edu');
        this.password.setValue('qaz123qaz');
        this.submitBtn.click();
        browser.pause(5000);

    }

    open() {
       super.open('https://stage.pasv.us/user/login');
   }
}

export default new LoginPage();
