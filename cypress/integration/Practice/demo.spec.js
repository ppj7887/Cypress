/// <reference types="cypress" />

Cypress.Commands.add('login', function(username,password){
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#submit').click()
})

describe('verify the login page', function(){
    beforeEach(function(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it.only('verify the correct username and password', function(){
        cy.login('student','Password123')
        cy.get('h1[class="post-title"]').should('have.text', 'Logged In Successfully')
        cy.get('.custom-logo').should('be.visible')
        cy.get('.wp-block-button__link').click()
        cy.get('h2').should('contain', 'Test login')
        cy.get('#menu-item-43 > a').should('be.visible')
    })

    it.only('verify if incorrece credentials', function(){
        cy.login('prasad', 'Prasad123')
        cy.get('#error').should('have.text', 'Your username is invalid!')
    })
})