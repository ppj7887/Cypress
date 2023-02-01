/// <reference types="cypress" />

describe('Verify create, update and delete request in sigle code', function(){
    let token = '3ddd31a03456bce6c407e6e6b174be82a2f2008bd2e7f33c3bdd9453e4845aae'
    it('POST > PUT > DELETE', function(){
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {Authorization : `Bearer ${token}`},
            body: {
                name:"Tenali Ramakrishna", 
                gender:"male", 
                email:`tenali.ramakrishna1${Math.floor(Math.random()*10000)}@15ce.com`, 
                status:"active"
            }
        }).then(function(res){
            //cy.log(res.body.id)
            return res.body.id
        }).then(function(id){
            cy.request({
                method:"PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {Authorization : `Bearer ${token}`},
                body: {
                    name:"Prasad Jadhav", 
                    gender:"male", 
                    email:`tenali.ramakrishna1${Math.floor(Math.random()*10000)}@15ce.com`, 
                    status:"Inactive"
                }

            }).then(function(res){
                //cy.log(res.body.id)
                expect(res.body).to.have.all.keys('name', 'id','email','status','gender')
                return res.body.id
            }).then(function(id){
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers: {Authorization : `Bearer ${token}`},
                })
            }).then(function(res){
                expect(res.status).to.eq(204)
            })
        })
    })
})