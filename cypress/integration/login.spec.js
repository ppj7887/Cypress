///<reference types = "cypress"/>

// Test scenario

describe('Ts_01 to check login functionality', function(){

    it(`to check for valid credentials`, function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // type userName to check correct userName

        cy.get('input[name="username"]').type('Admin')

        // now to check password and typer password

        cy.get('input[name="password"]').type('admin123')

        // click on login button

        cy.get('button[type="submit"]').click()

        // now validate any element on dashboard

        cy.get('img[alt="client brand banner"]').should('be.visible')
    })

    it('TC_2 to chek if incorrect login functionality', function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // type incorrect username

        cy.get('input[name="username"]').type('Adminaa')

        // type incorrect password

        cy.get('input[name="password"]').type('admin1aa23')

        // click on login button

        cy.get('button[type="submit"]').click()

        // validate the correct message to user

        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text', 'Invalid credentials')
    })
})

