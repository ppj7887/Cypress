///<reference types = "cypress"/>

// describe('verify the contact us details form',function(){

//     it("valida the success full submission ", function(){
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type('Prasad')
//         cy.get('input[name="last_name"]').type('Jadhav')
//         cy.get('input[name="email"]').type('prasad.jadhav001@gmail.com')
//         cy.get('textarea[name="message"]').type('abcd')
//         cy.get('input[type="submit"]').click()
//         cy.get('h1').should('have.text', "Thank You for your Message!")
//     })

//     it("valida for incorrect email entered", function(){
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type('Prasad')
//         cy.get('input[name="last_name"]').type('Jadhav')
//         cy.get('input[name="email"]').type('prasad.jadhav001gmail.com')
//         cy.get('textarea[name="message"]').type('abcd')
//         cy.get('input[type="submit"]').click()
//         cy.get('body').should('contain', 'Error: Invalid email address')
        
//     })

//     it("valida the form for reset button", function(){
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type('Prasad')
//         cy.get('input[name="last_name"]').type('Jadhav')
//         cy.get('input[name="email"]').type('prasad.jadhav001@gmail.com')
//         cy.get('textarea[name="message"]').type('abcd')
//         cy.get('input[type="reset"]').click()
        
//         cy.get('input[name="first_name"]').should('have.text',"")
//         cy.get('input[name="last_name"]').should('have.text',"")
//         cy.get('input[name="email"]').should('have.text',"")
//         cy.get('textarea[name="message"]').should('have.text',"")

//         })

//     it("validate the heading of contact us form", function(){
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('h2[name="contactme"]').should('be.visible')
//         .and('be.text','CONTACT US')
//     })

//     it("valida the success full submission details", function(){
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('h2[name="contactme"]').as('headingC')
//         cy.get('@headingC').should('have.text',"CONTACT US")
//         .and('be.visible')
//     })
// })

Cypress.Commands.add('login', function(firstname,lastname,email,text){
    cy.get('input[name="first_name"]').type(firstname)
    cy.get('[name="last_name"]').type(lastname)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(text)

})

describe('verify the complete login page',function(){

    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify the successfull login', function(){
        cy.login('Prasad','Jadhav','prasad.jadhav001@gmail.com',12345)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')

    })

    it('get correct message if incorrect email entered', function(){
        cy.login('Prasad','Jadhav','prasad.gmail.com',12245)
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain', 'Error: Invalid email address')
    })

    it('erase all data on click reset button', function(){
        cy.login('Prasad','Jadhav','prasad.gmail.com',12245)
        cy.get('[type="reset"]').click()

        cy.get('input[name="first_name"]').should("have.text","")
        cy.get('[name="last_name"]').should("have.text","")
        cy.get('[name="email"]').should("have.text","")
        cy.get('textarea.feedback-input').should("have.text","")
    })

    it('validate the heading of form', function(){
        cy.get('.section_header').as('headingC')
        cy.get('@headingC').should('be.visible')
    })
})



