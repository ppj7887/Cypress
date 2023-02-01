///<reference types = "cypress"/>

describe("Verify the login page",  function(){

    it('TC 02', ()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('mobile')
    })
})


