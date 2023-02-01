///<reference types = "cypress"/>

describe('Verify the MakemyTrip Page', ()=>{
    Cypress.on('uncaught:exception',function(err,runnable){
        return false
    })
    it("TC-01", ()=>{
        cy.visit('https://www.goibibo.com/')
        cy.get('p[class="sc-bBHxTw hqJqrJ fswWidgetPlaceholder"]').first().type('Pune')
        cy.get('div[class="sc-iUKqMP dTZnLD"]').contains('Pune').click()
        cy.get('p[class="sc-bBHxTw hqJqrJ fswWidgetPlaceholder"]').last({force:true}).type('Banglore')
        
    })
})