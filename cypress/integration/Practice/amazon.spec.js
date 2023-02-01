

describe('Verify amazon', function(){

    Cypress.on('uncaught:exception',function(err,runnable){
        return false
    })

    it('TC 01', function(){

        cy.visit('https://www.amazon.in/?tag=enin-edge-ntp-topsites-affiliates-21')
        cy.wait(3000)
        cy.get('.truncate-2line').each(function(el){
            if(el.text().trim() == 'Front loads | Up to 60% off'){
                el.click()
                
            }
        })
    })

    it('TC 02', function(){
        cy.visit('https://www.amazon.in/?tag=enin-edge-ntp-topsites-affiliates-21')
        cy.wait(3000)
        cy.get('#twotabsearchtextbox').type('mobile')
        cy.wait(5000)
        cy.get('.s-suggestion-ellipsis-direction').eq(5).click()
        cy.get('#p_90-title > span').should('have.text', 'Delivery Day')
        cy.get('.a-price-whole').eq(4).should('have.text' ,'29,990')
        
    })

    it('TC 03', function(){
        cy.visit('https://www.amazon.in/?tag=enin-edge-ntp-topsites-affiliates-21')
        cy.get('.aok-align-center').each(function(el){
            if(el.text() == 'Computers & Accessories'){
                el.click()
            }
        })
        cy.get('.a-price-whole').first().should('have.text', '36,990.')
    })

    it.only('TC 04', ()=>{
        cy.visit('https://www.amazon.in/?tag=enin-edge-ntp-topsites-affiliates-21')
        cy.get('#twotabsearchtextbox').type('mobile')
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-size-base').each(($el,index)=>{
            // cy.log($el.text())
            if($el.text() == "Samsung"){
                cy.get('input[type="checkbox"]').eq(index).check({force:true})
            }
        })
        })
    })
