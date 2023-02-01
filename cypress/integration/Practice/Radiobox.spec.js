///<reference types = "cypress"/>

describe('Verify the Check box and radio box', function(){

    this.beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('Verify the checkbox', function(){
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-1"]').click().should('not.be.checked')
    })

    it('verify the all check boxes', function(){
        cy.get('input[type="checkbox"]').each(function(el){
           cy.wrap(el).as('checkbox')
           cy.get('@checkbox').check().should('be.checked')
        })
    })

    it.only('verify the radiobox', function(){
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="yellow"]').should('not.be.checked')
    })

    it('verify the all radiobuttons', function(){
        cy.get('input[name="color"]').each(function(el){
        cy.get(el).as('radioBox')
        cy.get('@radioBox').click().should('be.checked')
        })
    })
})
