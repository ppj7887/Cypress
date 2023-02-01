/// <reference types="cypress" />

Cypress.Commands.add('login', function(username, password){
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
})

describe("verify the login page", function(){

    beforeEach('open the link', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('verify the username', function(){
        cy.login('ppj7887','Anshu@2708')
        cy.url('contain','pim')
        cy.get('h6[class="oxd-text"]').
        should('be.visible')
    })

    it('verify if incorrect credentials', function(){
        cy.login('amin', 'admin124')
        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text', 'Invalid credentials')
    })
})