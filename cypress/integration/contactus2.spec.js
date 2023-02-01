///<reference types = "cypress"/>
import data from '../fixtures/contactus.json'
import users from '../fixtures/multipleusers.json'

describe('Contactus', () => {
    let obj;
    before(() => {
        cy.fixture('contactus').then((data) => {
            obj = data
        })
    })

    it.skip('verify the object with before function', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.name)
        cy.get('input[name="last_name"]').type(obj.lastName)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.comments)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it.skip('verify the contact us by importing file from fixtures',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data.name)
        cy.get('input[name="last_name"]').type(data.lastName)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.comments)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    users.forEach((el, index)=>{
        it(`verify the contact us with ${index + 1}`,()=>{
            //cy.log(el)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.name)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.comments)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
})