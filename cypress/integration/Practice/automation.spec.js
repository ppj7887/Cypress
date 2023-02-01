/// <reference types="cypress" />

import generalMethods from "../../support/POM/generalMethods";
import  eleSelector  from "../../support/POM/selector";

let sel = new eleSelector()
let attachfile = 'india.png'

describe('Verify login functionality', ()=>{
    
    it('TC 01', ()=>{
        generalMethods.visitUrl(sel.selector.autoVisit)
        generalMethods.enterValue(sel.selector.userName, 'prasad.jadhav001@gmail.com')
        generalMethods.enterValue(sel.selector.password, 'Anshu@2708')
        generalMethods.clickElement(sel.selector.clickButton)
        generalMethods.eleVisible(sel.selector.eleVisible)
        
    })

    it('TC 02', ()=>{
        generalMethods.clickElement(sel.selector.contactPage)
        generalMethods.enterValue(sel.selector.conName, 'Prasad')
        generalMethods.enterValue(sel.selector.conEmail, 'prasad.jadhav001@gmail.com')
        generalMethods.enterValue(sel.selector.conSubject, 'Enquiry')
        generalMethods.enterValue(sel.selector.conMessage, 'About automation testing')
        generalMethods.fileAttach(sel.selector.conFileattach, attachfile)
        generalMethods.clickElement(sel.selector.conSubmit)
        // cy.on('window:confirm', (win)=>{
        //     expect(win).to.eql('Press OK to proceed!')
        //     return true
        // })
        generalMethods.validateText(sel.selector.sucMsg, 'Success! Your details have been submitted successfully.')
    })
})