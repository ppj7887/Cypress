/// <reference types="cypress" />

describe('Verify the Amazon Page', ()=>{

it('Verify the login page', ()=>{
    cy.visit('https://www.amazon.in/?tag=enin-edge-ntp-topsites-affiliates-21')
    cy.get('span[class="a-size-small a-color-base truncate-2line"]').each(($el, index)=>{
        if($el.text() == "Watches"){
           $el.click()
        }
    })
    cy.get('span[class="a-size-base a-color-base"]').each(function($el){
        if($el.text() == '₹2,000 - ₹5,000'){
            cy.get($el).click()
        }
    })

    cy.get('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-2"]').find('span')
    .each((el)=>{
        // cy.log($el.text())
        if(el.text().trim().includes('New Reflex Play')) {
            cy.wrap(el).invoke('removeAttr','target').click()
        }
    })


})
    
it.only('TC02', ()=>{
    cy.visit('https://www.amazon.in/Fastrack-Display-Watchfaces-Monitor-Watchface/dp/B0B4NSK3L1/ref=sr_1_5?qid=1669399243&refinements=p_36%3A3439818031&rnid=3439816031&s=watches&sr=1-5')
    cy.get('span[aria-hidden="true"]').then((el)=>{
        // cy.log(el.text())
        expect(el.text()).includes('₹4,495.00')
        cy.get('#add-to-cart-button').click()
        cy.get('input[name="proceedToRetailCheckout"]').click()
        cy.get('#ap_email').type('prasad.jadhav001@gmail.com')
        cy.get('#continue').click()
        cy.get('#ap_password').type('Anshu@2708')
        cy.get('#signInSubmit').click()
        cy.get('input[type="radio"]').last().click()
        cy.get('#orderSummaryPrimaryActionBtn > span > input').click()
    })
})
   
})