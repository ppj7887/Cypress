///<reference types = "cypress"/>

describe('Verify flipkart page', ()=>{
    Cypress.on('uncaught:exception',function(err,runnable){
        return false
    })

    it.only('TC 01', ()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('mobile')
        cy.contains('mobile phone 5g').click()
        cy.contains('SAMSUNG Galaxy F23 5G (Copper Blush, 128 GB').invoke('removeAttr', 'target').click()
        
        })

    it('TC 02', ()=>{
        cy.visit('https://www.flipkart.com/')
        cy.contains('More').trigger('mouseover')
        cy.contains('24x7 Customer Care').click()
        
    })
})