///<reference types = "cypress"/>

describe('verify the functionality of check box', function(){

  it('verify the dropdown one', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type("admin123")
    cy.contains('button', 'Login').click()
    cy.get('img[alt="profile picture"]').should('be.visible')

    // implict assertion -- find with element

    cy.contains('Supervisor Name').should('be.visible')
    cy.get('h5[class]').should('be.visible')
    .and('have.text', 'Employee Information')

    // explicit assertion

    cy.get('h5[class]').then(function(el){
        expect(el.text()).to.equal('Employee Information')
    })

     })

// veryfy multiple check boxes with array

     it.only('verify the  mutiple check box with checked() by passing array parameter', function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])
    })

    it('verify the select functionality via text', function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-2').select('eclipse').should('contain', "Eclipse")
    })

    it('verify the select functionality via text', function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value', "maven")
    })
})

