///<reference types = "cypress"/>

// describe('Verify the Ifram with Jquwry and Javascript', function(){

//     it('Verify iframw with Jquery', function(){
//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then(function($el){
//             let body = $el.contents().find('body')
//             cy.wrap(body).as('bdy')
//             cy.get('@bdy').find('[href="index.html"]').should('have.text', 'Home')
//         })
//     })

//     it('Verify Iframe another element', function(){
//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then(function($el){
//             let body = $el.contents().find('body')
//             cy.wrap(body).as('bdy')
//             cy.get('@bdy').find('[href="products.html"]').should('have.text', 'Our Products')
//         })
//     })

//     it.only('Verify the Iframe with Javascript', function(){
//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then(function(el){
//            // cy.log(el[0].contentDocument.body)

//            let body = el[0].contentDocument.body
//            cy.wrap(body).as('bdy')
//            cy.get('@bdy').find('[href="index.html"]').should('have.text', 'Home')

//         })
//     })
// })

describe('Verify Iframe with Jquery and Javascript', function(){

    this.beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
    })

    it('Verify Iframe with Jquery', function(){
        cy.get('#frame').then(function($el){
            //cy.log($el)
          let body = $el.contents().find('body')
          cy.wrap(body).as('bdy')
          cy.get('@bdy').find('[href="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us')
        })
    })

    it.only('Verify the Iframe with Javascript', function(){
        cy.get('#frame').then(function(el){
            let body = el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('[href="index.html"]').should('have.text', 'Home')
        })
    })
})