///<reference types = "cypress"/>

describe('Verify POST, PUT, DELETE with singlr code', () => {

    it('Verify POST', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((el) => {
            expect(el.status).to.eql(201)
            // cy.log(el.body.id)
            return el.body.id
        }).then(function (id) {
            cy.request({
                method: 'PUT',
                url: `https://reqres.in/api/users/${id}`,
                body: {
                    "name": "Prasad",
                    "job": "Sr.Associates",
                    "id": `${id}`
                }
            }).then((res) => {
                //cy.log(res.body.id)
                return res.body.id
            }).then((id) => {
                cy.request({
                    method: 'DELETE',
                    url: `https://reqres.in/api/users/${id}`,
                })
            }).then((el) => {
                expect(el.status).to.eql(204)
            })
        })
    })
})