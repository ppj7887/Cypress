///<reference types = "cypress"/>

// describe('verify alert(), confirm() and prompt()', function(){

//     this.beforeEach(function(){
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//     })

//     it('Verify alert()', function(){
//         cy.contains('Click for JS Alert').click()
//         cy.on('window:alert', function(str){
//             expect(str).to.eql('I am a JS Alert')
//             return true
//         })
//         cy.get('#result').should('have.text', 'You successfully clicked an alert')
//     })

//     it('Verify confirm - Ok', function(){
//         cy.contains('Click for JS Confirm').click()
//         cy.on('window:confirm', function(str){
//             expect(str).to.eql('I am a JS Confirm')
//             return true
//         })
//         cy.get('#result').should('have.text', 'You clicked: Ok')
//     })

//     it('Verify the confirm() - cancel', function(){
//         cy.contains('Click for JS Confirm').click()
//         cy.on('window:confirm', function(str){
//             expect(str).to.eql('I am a JS Confirm')
//             return false
//         })
//         cy.get('#result').should('have.text', 'You clicked: Cancel')
//     })

//     it.only('Verify prompt() - Ok', function(){
//         cy.contains('Click for JS Prompt').click()
//         cy.window().should(function(win){
//             cy.stub(win, 'alert').returns('Hello')
//         })
//         cy.get('#result').should('have.text', 'You entered: Hello')
//     })

//     it.only('Verify prompt()-cancel', function(){
//         cy.contains('Click for JS Prompt').click()
//         cy.window().should(function(win){
//             cy.stub(win, 'prompt').returns(null)
//         })
//         cy.get('#result').should('have.text', 'You entered: null')
//     })
// })

describe('Verify Alert(), confirm() and Prompt()', function(){
    this.beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Verify Alert()', function(){
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', function(str){
            expect(str).to.eql('I am a JS Alert')
            return true
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('Verify confirm() - ok', function(){
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function(str){
            expect(str).to.eql('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('Verify confirm()-cancel', function(){
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function(str){
            expect(str).to.eql('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('verify Prompt()-Ok', function(){
        cy.contains('Click for JS Prompt').click()
        cy.window().should(function(win){
            cy.stub(win, 'alert').returns('Great')
            return true
        })
        cy.get('#result').should('have.text', 'You entered: Great')
    })

    it.only('verify Prompt()-cancel', function(){
        cy.contains('Click for JS Prompt').click()
        cy.window().should(function(win){
            cy.stub(win,'alert').returns(null)
            return false
        })
        cy.get('#result').should('have.text', 'You entered: null')
    })
})