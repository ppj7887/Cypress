///<reference types = "cypress"/>

describe('Verify the ENV', ()=>{

    let envi = Cypress.env('baseUrl')
    it('Verify the page', ()=>{
            cy.visit(envi)
    })

})