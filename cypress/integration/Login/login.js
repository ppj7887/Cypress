export class Login {

    elements = {
        username: "#user-name",
        password: "#password",
        loginButton: "#login-button",
        error: ".error-button",
        logo: '.login_logo',
        image: '.inventory_item_description',
        addToCart:'#add-to-cart-sauce-labs-backpack',
        shoppingCart: '.shopping_cart_badge',
        price: ".inventory_item_price",
        total: ".inventory_item_price"

    }   

    openPage(){
        cy.visit('https://www.saucedemo.com/')
    }

    validLogin(username, password){
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginButton).click()
        cy.url().should('contain', 'inventory')
        cy.get(this.elements.image).then(function(el){
            expect(el.length).eql(6)
        })
        // cy.get(this.elements.addToCart).click()
        // cy.get(this.elements.shoppingCart).click()
        // cy.get(this.elements.price).should('contain', '29.99')
        let sum = 0
        cy.get(this.elements.total).each(function(el){
            sum = sum + Number(el.text().slice(1))
           
        }).then(function(){
            expect(sum).to.eql(129.94)
        })
        
    }

    invalidLogin(username, password){
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginButton).click()
        cy.get(this.elements.error).should('be.visible')
        
    }

    validateLogo(){
        cy.get(this.elements.logo).should('be.visible')
    }

}