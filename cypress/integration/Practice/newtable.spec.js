///<reference types = "cypress"/>

describe('get total', function () {
    let sum = 0
    it('get sum', function () {
        cy.visit('https://letcode.in/table')
        cy.get('table[name="listtable"]').find('tr').each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.find('td').last().text())
            }
        }).then(function () {
            expect(sum).to.eql(858)
        })
    })

    it('get total', function () {
        let sum = 0
        cy.visit('https://letcode.in/table')
        cy.get('div[class="field"]').eq(1).find('tr').each(function (el) {
            sum = sum + Number(el.find('td').eq(2).text())
        }).then(function () {
            expect(sum).to.eql(51)
        })
    })

    it('Verify the checkbox', function () {
        cy.visit('https://letcode.in/table')
        cy.get('input[id="first"]').click().should('be.checked')
    })

    it('verify all checkboxes', function () {
        cy.visit('https://letcode.in/table')
        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).as('checkbox')
            cy.get('@checkbox').click().should('be.checked')
        })
    })

    it.only('calculate total', function () {
        let total = 0
        cy.visit('https://letcode.in/table')
        cy.get('table[name="listtable"]').find('tr').each(function (el) {
            total = total + Number(el.children('td').last().text())
        }).then(function () {
            expect(total).to.eql(858)
        })
    })
})
