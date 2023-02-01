///<reference types = "cypress"/>

describe('Verify Calender', ()=>{
    // practice 1
    it('Verify date', ()=>{
        // let date = new Date()
        // cy.log(date)
        // let day = date.getDate()
        // let month = date.toLocaleDateString()
        // let year = date.getFullYear()

        // cy.log(day)
        // cy.log(month)
        // cy.log(year)

        // practice 2

        let date2 = new Date()
        date2.setDate(date2.getDate()+200)
        
        let day = date2.getDate()
        let month = date2.toLocaleString('default', {month: 'long'})
        let year = date2.getFullYear()

        cy.log(day)
        cy.log(month)
        cy.log(year)

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthYear(){
            cy.get('.datepicker-switch').first().then(function($el){
               // cy.log($el.text())
               if(!$el.text().includes(year)){
                    cy.get('.next').first().click()
                    selectMonthYear()
               }

               cy.get('.datepicker-switch').first().then(function($el){
                    if(!$el.text().includes(month)){
                        cy.get('.next').first().click()
                        selectMonthYear()
                    }
               })
            })

            }
        selectMonthYear()

        function selectDate(){
            cy.contains(day).click()
        }
        selectDate()
    })
})