///<reference types = "cypress"/>
import obj1 from '../fixtures/contactus.json'
import user from '../fixtures/multipleusers.json'

describe('contactUs', function () {
    let obj2;
    before(() => {
        cy.fixture('contactus').then((data) => {
            obj2 = data
        })
    })


    let obj = {
        name: "Prasad", lastName: "Jadhav", email: 'prasad.jadhav001@gmail.com',
        comments: 'You are the best'
    }

    // first way
    // it('verify the contactUs with Object', function(){
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(obj.name)
    //     cy.get('input[name="last_name"]').type(obj.lastName)
    //     cy.get('input[name="email"]').type(obj.email)
    //     cy.get('textarea[name="message"]').type(obj.comments)
    //     cy.get('input[type="submit"]').click()
    //     cy.get('h1').should('have.text', 'Thank You for your Message!')
    // })

    // // second way

    // it('verify the contactus from fixtures json file', function(){
    //     cy.fixture('contactus').then(function(obj){
    //         //cy.log(obj)
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(obj.name)
    //         cy.get('input[name="last_name"]').type(obj.lastName)
    //         cy.get('input[name="email"]').type(obj.email)
    //         cy.get('textarea[name="message"]').type(obj.comments)
    //         cy.get('input[type="submit"]').click()
    //         cy.get('h1').should('have.text', 'Thank You for your Message!')
    //     })
    // })

    // // third way

    // it('verify the contact uis with fixtures and before function', function(){
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(obj2.name)
    //         cy.get('input[name="last_name"]').type(obj2.lastName)
    //         cy.get('input[name="email"]').type(obj2.email)
    //         cy.get('textarea[name="message"]').type(obj2.comments)
    //         cy.get('input[type="submit"]').click()
    //         cy.get('h1').should('have.text', 'Thank You for your Message!')
    // })

    // // fourth way

    // it('verify the contact us via inport', function(){
    //     //cy.log(obj1)
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(obj1.name)
    //         cy.get('input[name="last_name"]').type(obj1.lastName)
    //         cy.get('input[name="email"]').type(obj1.email)
    //         cy.get('textarea[name="message"]').type(obj1.comments)
    //         cy.get('input[type="submit"]').click()
    //         cy.get('h1').should('have.text', 'Thank You for your Message!')

    // })

    // // fifth way (bad way)

    // it('Verify multiple users from fixtures', ()=>{
    //     //cy.log(user)
    //     user.forEach((el)=>{
    //         //cy.log(el)
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(el.name)
    //         cy.get('input[name="last_name"]').type(el.lastName)
    //         cy.get('input[name="email"]').type(el.email)
    //         cy.get('textarea[name="message"]').type(el.comments)
    //         cy.get('input[type="submit"]').click()
    //         cy.get('h1').should('have.text', 'Thank You for your Message!')

    //     })

    // sixth way(best way)

    user.forEach((el, index) => {
        it.only(`verify the users with ${index}`, () => {
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


// })
