/// <reference types="cypress" />

describe('Verify the whole page', function(){

    this.beforeEach(function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    // it('verify the title of page', function(){
    //     cy.title().should('eq', 'Automation Testing Practice')
    // })
    it('Calculate the sum', function(){
        let sum = 0
        cy.get('[name="BookTable"]').find('tr').each(function(el,index){
            if(index != 0){
                sum = sum + Number(el.children('td').eq(3).text())
            }
        }).then(function(){
            expect(sum).to.eql(7100)
        })
    })

    it('Verify the select option', function(){
        cy.get('select[id="products"]').select('Google').should('have.value', 'Google')
        cy.get('[id="speed"]').select('Faster')
    })  

})