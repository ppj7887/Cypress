///<reference types = "cypress"/>
describe('Test to writefile', ()=>{
    
    it('TC 01', ()=>{
        cy.writeFile('message.json', {name:"Prasad", email:'prasad.jadhav001@gmail.com'})
        cy.readFile('message.json').then((text)=>{
            expect(text.name).to.eq("Prasad")
        })
    })
})