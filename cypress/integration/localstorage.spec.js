///<reference types = "cypress"/>

describe('Verify the storage with app', function(){

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php')
    })

    it('verify the local storage with window', function(){
        cy.window().should(function(win){
            expect(win.localStorage.length).to.eql(0)
            win.localStorage.setItem('id', 1)
            expect(win.localStorage.length).to.eql(1)
            expect(win.localStorage.getItem('id')).to.eql('1')
        })
    })

    it('clearing the local storage with cypress command', function(){
       cy.clearLocalStorage()
       cy.window().should(function(win){
        expect(win.localStorage.length).to.eql(0)
       })
    })

    // document

    it('verify the title of page with window command', function(){
        cy.document().should(function(win){
            expect(win.title).to.eq('My Store')
        })
        
    })

    it('verify the title of page with cypress command', function(){
        cy.title().should('eq', 'My Store')
    })

    it('get cookies with window commands', function(){
        cy.document().should(function(doc){
            // create cookie
            doc.cookie = "userName=Prasad"
            // get cookie
            console.log(doc.cookie)
            // update cookie
            doc.cookie = "userName = Anshika"
            console.log(doc.cookie)
            // clear cookie
            doc.cookie = "username="
        })
    })

    it.only('get cookies with cypress commands', function(){
        cy.setCookie("ChannelName", "Prasad")
        cy.getCookie('ChannelName') 
       
    })
})