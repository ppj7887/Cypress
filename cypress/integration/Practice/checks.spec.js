/// <reference types="cypress" />

describe("Verify the Object", ()=>{
    let car ={
        name:"Ritz", Color:"Red", getColor(){
            return this.Color
        }
    }

    it("tc 01", ()=>{
        expect(car.getColor()).to.eq("Red")
        cy.stub(car, "Color").value("Blue")
        expect(car.getColor()).to.equal("Blue")
    })
})

