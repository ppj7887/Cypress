/// <reference types="cypress" />

describe("Validate the google page",()=>{
    
    it.only("YC 01", ()=>{
        cy.visit("https://www.google.co.in/")
        let count = 0
        cy.get('[type="text"]').type("string {enter}")
        cy.get(".yuRUbf").then((el)=>{
            count = el.length
            cy.log(count)
        })
        })

        it.only('TC-3', function () {
            cy.visit('https://www.flipkart.com/')
            let count = 0
            cy.get('a').then(function (el) {
                count = el.length
                cy.log(count)
    
            })
        })
        
})