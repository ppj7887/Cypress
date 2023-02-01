///<reference types = "cypress"/>

describe('verify the GET, POST and PUT xhr request', ()=>{
    it('Verify the GET xhr request', ()=>{
    cy.intercept({
        method:"GET",
        url:"https://jsonplaceholder.cypress.io/comments/1"
    }).as('getComment')
    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.contains('Get Comment').click()
    cy.wait('@getComment').then(({response, request})=>{
        expect(request.method).to.eql("GET")
        expect(response.body).to.have.keys('body',"id","email","name","postId")
        expect(response.statusCode).to.eql(200)
        cy.get('.network-comment').should('have.text', response.body.body)
    })
})
    it('Verify the POST xhr request', ()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait("@postComment").then(function({response, request}){
            expect(response.body).to.have.all.keys('body','email','id','name')
            expect(request.method).to.eq("POST")
            cy.get('.network-post-comment').should('have.text', "POST successful!")
        })
    })

    it('Verify the updated GET xhr request', ()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
            },
            {
                statusCode:400,
                body:{
                    
                    "postId": 1,
                    "id": 1,
                    "name": "Prasad Jadhav",
                    "email": "Eliseo@gardner.biz",
                    "body": "Anshika"
                  
            }
                }
        ).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function({response, request}){
           // cy.log(response)
           expect(response.statusCode).to.eq(400)
           expect(request.method).to.eql("GET")

        })
    })

    it.only('Verify PUT xhr request', ()=>{
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as("putComment")
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(({response, request})=>{
            //cy.log(request)
            expect(request.responseTimeout).to.lessThan(40000)
            expect(request.method).to.eq("PUT")
            expect(response.body).to.have.keys(["id","name","email","body"])
        })
    })
})