///<reference types = "cypress"/>

// describe('Verify GET, PUT, POST, DELETE api', function(){

//     let token = '3ddd31a03456bce6c407e6e6b174be82a2f2008bd2e7f33c3bdd9453e4845aae'

//     it('Verify GET API', function(){

//         cy.request({
//             method: "GET",
//             url: 'https://gorest.co.in/public/v2/users',
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }).then(function(res){
//             //cy.log(res)
//             expect(res.duration).to.be.lessThan(1000)
//             expect(res.body?.length).to.be.lessThan(15)
//             expect(res.status).to.eq(200)

//             res.body.forEach(element => {
//                 expect(element).to.have.keys('id', 'name','gender','status','email')
//             });

//             res.body.forEach(function(el){
//                 expect(el.id).not.to.null
//                 expect(el.email).not.to.null
//                 expect(el.gender).not.to.null
//                 expect(el.name).not.to.null
//                 expect(el.status).not.to.null
//             })
//         })
//     })

//     it.only('Verify the create user API', function(){

//         cy.request({
//             method: "POST",
//             url: 'https://gorest.co.in/public/v2/users',    
//             headers: {
//                 Authorization: `Bearer ${token}`
//             },
//             body: {name:"Tenali Ramakrishna", gender:"male", 
//             email:`tenali.ramakrishna${Math.floor(Math.random()*10000)}@15ce.com`, status:"active"}
//         }).then(function({body,status,duration}){
//             expect(status).to.eql(201)
//             expect(duration).to.be.lessThan(1000)
//             expect(body).to.have.all.keys('id','email','name','status','gender')
//         })
//     })
// })

describe('Verify Gorest GET,PUT,POST and DELETE API', function(){

    let token = '3ddd31a03456bce6c407e6e6b174be82a2f2008bd2e7f33c3bdd9453e4845aae'

    it('verify GET API', function(){

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function(res){
            //cy.log(res)
            expect(res.duration).to.be.lessThan(1000)
            expect(res.body?.length).to.eql(10)
            expect(res.status).to.eql(200)

            res.body.forEach(element => {
                expect(element).to.have.all.keys('id','name','email','status','gender')
            });

            res.body.forEach(function(el){
                expect(el.id).not.to.be.null
                expect(el.name).not.to.be.null
                expect(el.status).not.to.be.null
                expect(el.email).not.to.be.null
                expect(el.gender).not.to.be.null
            })
        })
    })

    it.only('Verify the POST API', function(){

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization: `Bearer ${token}`
            },
            body:{name:"Tenali Ramakrishna", gender:"male", 
            email:`tenali.ramakrishna${Math.floor(Math.random()*10000)}@15ce.com`, status:"active"}
        }).then(function({status,duration,body}){
            expect(status).to.eql(201)
            expect(duration).to.lessThan(500)
            expect(body).to.have.all.keys('id','name','email','status','gender')
        })
    })
})