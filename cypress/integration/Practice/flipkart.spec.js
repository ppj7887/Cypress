///<reference types = "cypress"/>

describe('Verify the Flipkart', ()=>{

    Cypress.on('uncaught:exception',function(err,runnable){
        return false
    })
    
    // it('TC 01', ()=>{
    //     cy.visit('https://www.flipkart.com/')
    //     cy.wait(10000)
    //     cy.get('img').then(function(el){
    //         expect(el).to.eq
    //     })
    // })
        
    it('TC 02', ()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('redmi')
        cy.contains('note 10 pro').click()
        
        })

    it('TC 03', ()=>{
        cy.visit('https://www.flipkart.com/')
        cy.wait(3000)
        cy.get('._3704LK').type('redmi')

        cy.get('.kJjFO0 _3DIhEh').eq(10).click()
    })

    it.only("TC 03", ()=>{
        cy.visit('https://www.amazon.in/?tag=enin-edge-ntp-topsites-affiliates-21')
        let count = 0
        cy.get('a').then((el)=>{
            count = el.length
            cy.log(count)
        })
    })
    })
    
