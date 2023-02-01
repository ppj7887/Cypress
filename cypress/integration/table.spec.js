///<reference types = "cypress"/>

describe('validate the functionality of table', function () {

    it('get the total of table', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t01').find('tr').each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(function () {
            expect(sum).to.eql(159)
        })
    })

    it('verify the sum of second table', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t02').find('tr').each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.find('td').last().text())
            }
        }).then(function () {
            expect(sum).to.eql(163)
        })
    })

    it.only('verify the sum with function', function () {
        cy.tablevalue(1, 159)
        cy.tablevalue(2, 163)
    })

})