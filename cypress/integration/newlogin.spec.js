///<reference types = "cypress"/>

describe('Validate the login functionality', () => {

    it("TC 01", function () {
        cy.visit("https://demo.applitools.com/")
        cy.get("#username").type("prasad001")
        cy.get("#password").type("prasad123")
        cy.get(".buttons-w > a", { timeout: 10000 }).click()
        cy.wait(10000)
        cy.contains("Make Payment").should("be.visible")
        cy.get('i[class="os-icon os-icon-grid-10"]').last().should("be.visible")
    })
})