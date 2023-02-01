///<reference types = "cypress"/>

describe('verify the API with cypress', function(){

    it('verify GET API', function(){
        cy.request({
            method: "GET",
            url: 'https://reqres.in/api/users?page=1'
        }).then(function(res){
            expect(res.status).to.eq(200)
        })
    })

    it('Verify POST API', function(){
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(res){
            expect(res.status).to.eql(201)
        })
    })

    it('Verify PUT API', function(){
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "Prasad",
                "job": "Sr. Associates"
            }
        }).then(function(res){
            expect(res.status).to.eql(200)
        })
    })

    it('Verify DELETE API', function(){
        cy.request({
            method:'DELETE',
            url: 'https://reqres.in/api/users/2'
        }).then(function(res){
            expect(res.status).to.eql(204)
        })
    })
})