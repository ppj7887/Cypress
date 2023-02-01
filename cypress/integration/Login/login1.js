export class Login{

    elements = {
        username: '#username',
        password: '#password',
        submit: '#submit',  
        postTital: '.post-title',
        error: "#error",
        logo:'#site-title'
    }

    openPage(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    }

    validLogin(username, password){
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.submit).click()
        cy.get(this.elements.postTital).should('be.visible')
    }

    invalidLogin(username, password){
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.submit).click()
        cy.get(this.elements.error).should('have.text', 'Your username is invalid!')
    }

    validateLogo(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get(this.elements.logo).should('be.visible')
    }
}