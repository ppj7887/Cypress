///<reference types = "cypress"/>


// describe('verify the fuctionality of checkbox', function(){

//     beforeEach(function(){
//         cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//     })

//     it('verify the one check box on click', function(){
//         cy.get('input[value="option-3"]').click().should('not.be.checked')
//         cy.get('input[value="option-3"]').click().should('be.checked')
//     })

//     it('verify the one check box on click', function(){
//         cy.get('input[value="option-3"]').check().should('be.checked')
//         cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
//     })

//     it('verify the multiple checkbox with check() and uncheck() function', function(){
//         cy.get('input[type="checkbox"]').each(function(el){
//             cy.wrap(el).as('checkbox')
//             cy.get('@checkbox').check().should('be.checked')
//             cy.get('@checkbox').uncheck().should('not.be.checked')
//         })
//     })

//     it('verify the radio on clcik button', function(){
//         cy.get('input[value="green"').click().should('be.checked')
//         cy.get('input[value="blue"').should('not.be.checked')
//     })

//     it('verify the check box with check and uncheck function', function(){
//         cy.get('input[value="blue"').check().should('be.checked')
//         cy.get('input[value="green"').should('not.be.checked')
//     })

//     it.only('verify multiple check box with click and check function', function(){
//         cy.get('input[name="color"]').each(function(el){
//             cy.wrap(el).as('radiobox')
//             cy.get('@radiobox').click().should('be.checked')
//         })
//     })

//     it.only('check the perticular element is visible or not', function(){
//         cy.get('input[value="cabbage"]').should('be.disabled')
//         cy.get('input[value="pumpkin"]').should('be.enabled')
//     })
// })

describe('verify the check box page', function(){

    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify the check box on click() function', function(){
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-3"]').click().should('not.be.checked')
    })

    it('verify the checkbox with check() function', function(){
        cy.get('input[value="option-1"]').check().should('be.checked')
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
    })

    it('verify the eac element in checkbox with click()', function(){
        cy.get('input[type="checkbox"]').each(function(el){
            cy.wrap(el).as('checkbox')
            cy.get('@checkbox').check().should('be.checked')
            cy.get('@checkbox').uncheck().should('not.be.checked')
        })
    })

    it('veryfy the one radiobox element with click', function(){
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').click().should('be.checked')
    })

    it('veryfy the one radiobox element with check', function(){
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })

    it.only('verify the each element in radiobox on check and click function', function(){
        cy.get('input[name="color"]').each(function(el){
            cy.wrap(el).as('radiobox')
            cy.get('@radiobox').check().should('be.checked')
        })
    })

    it.only('verify the element is disabled or enabled', function(){
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.enabled')
    })
})