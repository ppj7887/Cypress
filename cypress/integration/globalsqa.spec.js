///<reference types = "cypress"/>

import generalMethods from "../support/POM/generalMethods";

describe('Validate contact us form', ()=>{

    Cypress.on('uncaught:exception',function(err,runnable){
        return false
    })

    it('Verify contact us form', ()=>{
        generalMethods.visitUrl('https://www.globalsqa.com/angularjs-protractor-practice-site/')
        cy.contains('Contact Us').click()
        generalMethods.enterValue('#comment_name', 'Prasad Jadhav')
        generalMethods.enterValue('#email', 'prasad.jadhav001@gmail.com')
        generalMethods.enterValue('#subject', 'enquiry')
        generalMethods.enterValue('#comment', 'Javascript')
        cy.get('iframe').then(function($el){
            let body = $el.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('label[class="rc-anchor-center-item rc-anchor-checkbox-label"]').click()
        })
        
    })
    
})

