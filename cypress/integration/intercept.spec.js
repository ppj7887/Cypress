///<reference types = "cypress"/>

// describe('Verify the UI for kitchen example', ()=>{

//     it('Verify GET API for kitchen', ()=>{

//         cy.intercept({
//             method:"GET",
//             url:"https://jsonplaceholder.cypress.io/comments/1"
//         }).as('getcomment')
//         cy.visit('https://example.cypress.io/commands/network-requests')
//         cy.contains('Get Comment').click()
//         cy.wait('@getcomment')
//         cy.get('.network-comment').should('contain', 'enim quasi est quidem')
//     })

//     it.only('Verify POST API for kitchen', ()=>{
//         cy.intercept({
//             method:"POST",
//             url:"https://jsonplaceholder.cypress.io/comments"
//         }).as('postcomment')
//         cy.visit('https://example.cypress.io/commands/network-requests')
//         cy.contains('Post Comment').click()
//         cy.wait('@postcomment')
//         cy.get('.network-post-comment').should('have.text', 'POST successful!')
//     })
// })

describe('Verify Kitchen API', ()=>{

    it('Verify GET API', ()=>{
        cy.intercept({
            method:"GET",
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain', "sapiente accusantium")
    })
})