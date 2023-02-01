/// <reference types="cypress" />

describe('Verify local storage and cookies', function(){
    this.beforeEach(function(){
        cy.visit('https://letcode.in/table')
    })

    it('Verify the local storage with window command', function(){
        cy.window().should(function(win){
            expect(win.localStorage.length).to.eql(2)
            win.localStorage.setItem('id',"Prasad")
            expect(win.localStorage.length).to.eql(3)
        })
    })

    it.only('clear local storage with cypress command', function(){
        cy.clearLocalStorage()
        cy.window().should(function(win){
            expect(win.localStorage.length).to.eql(0)
        })
    })

    it.only('Verify the cookies with window command', function(){
        cy.document().should(function(doc){
            doc.cookie = "Channelname = Anshika"
            
        })
    })

    it.only('Verify the cookies wity cypress command', function(){
        cy.setCookie('Name', 'Tejashree')
        cy.getCookie('Name')
    })
})