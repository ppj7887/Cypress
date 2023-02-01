///<reference types = "cypress"/>

describe('transverse mwthod in cypress', function () {

    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    // children

    it('To get children of DOM elements, use the .children() command.', function () {
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
    })

    // children + first

    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')
    })

    // children + last

    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.get('.traversal-button-states').children().last().should('have.text', 'Alert')
    })

    // children + eq

    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.get('.traversal-button-states').children().eq(1).should('have.text', 'Warning')
    })


    // siblings

    // next

    it('to get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.get('#tea').next().should('have.text', 'Milk')
        cy.get('#tea').next().should('have.attr', "id", 'milk')
    })

    // prev

    it('to get the previous sibling DOM element within elements, use the .prev() command.', function () {
        cy.get('#tea').prev().should('have.text', 'Coffee')
        cy.get('#tea').prev().should('have.attr', "id", 'coffee')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.get('#milk').siblings().should('have.length', 4)
    })

    // nextUntill

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.get('#milk').nextUntil('#sugar').should('have.length', 1)
    })

    //prevUntill

    it('To get all of the previous sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.get('#espresso').prevUntil('#coffee').should('have.length', 2)
    })

    // prevAll

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.get('#sugar').prevAll().should('have.length', 4)
    })

    // nextAll

    it('To get all next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.get('#tea').nextAll().should('have.length', 3)
    })


    // find()

    it('To get descendant DOM elements of the selector, use the .find() command.', function () {
        cy.get('.traversal-buttons').find('a').should('have.text', 'Link')
        cy.get('.traversal-button-states').each(function (el) {
            cy.wrap(el).as('buttons')
            cy.get('@buttons').should('contain', 'Info')
        })

    })

    // filter

    it('To get DOM elements that match a specific selector, use the .filter() command.', function () {
        cy.get('.traversal-buttons').children().filter('input[type="button"]').should('have.text', '')
    })

    // not

    it('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        cy.get('.traversal-drinks-list').children().not('#coffee').should('have.length', 4)
    })

    // parent()

    it('To get parent DOM element of elements, use the .parent() command.', function () {
        cy.get('.navbar-toggle').parent().should('have.class', 'navbar-header')
        cy.get('#nav-title').parent().should('contain', 'Toggle navigation')
    })

    // parents()

    it('To get parents DOM element of elements, use the .parents() command.', function () {
        cy.get('.traversal-buttons').parents().should('contain', 'Data, Tables & Button States')
    })

    // parentsUntill()

    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function () {
        cy.get('.traversal-button-states').parentsUntil('.container').should('have.class', 'col-sm-12')
    })

    // closest()

    it('To get the closest ancestor DOM element, use the .closest() command.', function () {
        cy.get('.btn-outline-danger').closest('div').should('have.class', 'traversal-button-states')
    })

})
