 class eleSelector{
    
    selector = {
        // automation site

        autoVisit: 'https://www.automationexercise.com/login',
        userName: '[data-qa="login-email"]',
        password: '[data-qa="login-password"]',
        clickButton: '[data-qa="login-button"]',
        eleVisible: '[class="logo pull-left"] > a',

        contactPage: '[href="/contact_us"]',
        conName: '[data-qa="name"]',
        conEmail: '[data-qa="email"]',
        conSubject: '[data-qa="subject"]',
        conMessage: '#message',
        conFileattach: '[type="file"]',
        conSubmit: '[name="submit"]',
        sucMsg: '[class="status alert alert-success"]',

        // orange HRM
        orangeVisitPage: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        orangeUsername: '[name="username"]',
        orangePassword: '[name="password"]',
        orangeClickbutton: '[type="submit"]',
        orangeEleVisible: 'img[alt="client brand banner"]'

    }
}

export default eleSelector