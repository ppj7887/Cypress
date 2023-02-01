 class generalMethods{

    static visitUrl(url){
        cy.visit(url)
    }

    static enterValue(element, value){
        cy.get(element).type(value)
    }

    static clickElement(ele){
        cy.get(ele).click()
    }

    static eleVisible(ele){
        cy.get(ele).should('be.visible')
    }

    static validateText(element, value){
        cy.get(element).should('have.text', value)
    }

    static fileAttach(element, file){
        cy.get(element).attachFile(file)
    }
}

export default generalMethods