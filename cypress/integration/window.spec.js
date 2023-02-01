///<reference types = "cypress"/>

// describe('window command in cypress', function(){

//     it.skip('Window properties', function(){
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         // cy.window().should(function(win){
//         //     expect(win.location.host).to.eqls('www.webdriveruniversity.com')
//         //     expect(win.location.protocol).to.eqls('http:')
//         // })
//         cy.location('hash').should('eq', "")
//         cy.location('origin').should('eq', 'http://www.webdriveruniversity.com')
//         cy.location('pathname').should('eq', '/Contact-Us/contactus.html')
//     })

//     it.skip('window reload with cypress', function(){
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         // cy.window().should(function(win){
//         //     win.location.reload

//         // })
//         cy.reload()
//     })

//     it('window check for back and forward cypress', ()=>{
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//         cy.get('p[class]').eq(2).click()
//         cy.go(-1)
//         cy.go(1)
//         cy.go('back')
//         cy.go('forward')
//     })
// })

describe('Location methods with windows and cypress', function () {

    beforeEach(function () {
        cy.visit('https://www.google.co.in/')
    })

    it('windows commands to get location elements', function () {
        cy.window().should(function (win) {
            expect(win.location.host).to.eqls("www.google.co.in")
            expect(win.location.origin).to.eqls("https://www.google.co.in")
            expect(win.location.hostname).to.eqls('microsoftedgewelcome.microsoft.comwww.google.co.in')
        })
    })

    it('cypress commands to get location elements', function () {
        cy.location('host').should('eq', 'www.google.co.in')
        cy.location('origin').should('eq', 'https://www.google.co.in')
        cy.location('hostname').should('eq', 'www.google.co.in')
    })

    it('windows commands to reload page', function () {

        cy.window().should(function (win) {
            win.location.reload()
        })
    })

    it('cypress command to reload the page', function () {
        cy.reload()
    })

    it('windows commands to go back and forward', function () {
        cy.get('.gLFyf').type('automation testing {enter}')
        cy.window().should(function (win) {
            win.history.back()
            win.history.forward()
        })
    })

    it.only('cypress commands to go back and forward', function () {
        cy.get('.gLFyf').type('automation testing {enter}')
        cy.go('back')
        cy.get('img[alt="Google"]').should('be.visible')
        cy.go('forward')
        cy.contains('Java').click()
    })
})