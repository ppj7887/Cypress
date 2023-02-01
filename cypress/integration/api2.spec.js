///<reference types = "cypress"/>

describe('Verify the GET, POST, PUT API', ()=>{

    it('Verify GET API', ()=>{
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).then((res)=>{
            //y.log(res)
            expect(res.status).to.eql(200)
        })
    })

    it('Verify the POST API', ()=>{
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).then((res)=>{
            //y.log(res)
            expect(res.status).to.eql(201)
        })
    })

    it.only('Verify the PUT API', ()=>{
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",
            body: {
                "name": "Using+POST+in+cy.intercept()",
                "email": "hello%40cypress.io",
                "body": "You+can+change+the+method+used+for+cy.intercept()+to+be+GET%2C+POST%2C+PUT%2C+PATCH%2C+or+DELETE"
            }
        }).then((res)=>{
            //y.log(res)
            expect(res.status).to.eql(200)
        })

    })
})