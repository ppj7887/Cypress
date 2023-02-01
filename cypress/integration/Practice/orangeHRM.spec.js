/// <reference types="cypress" />

import generalMethods from "../../support/POM/generalMethods";
import eleSelector from "../../support/POM/selector";

let sel = new eleSelector()

describe('Validate login functionality', ()=>{

    it('TC 01',()=>{
        generalMethods.visitUrl(sel.selector.orangeVisitPage)
        generalMethods.enterValue(sel.selector.orangeUsername, 'Admin')
        generalMethods.enterValue(sel.selector.orangePassword, 'admin123')
        generalMethods.clickElement(sel.selector.orangeClickbutton)
        generalMethods.eleVisible(sel.selector.orangeEleVisible)
    })
})
