/// <reference types="cypress" />

describe('File upload in cypress', ()=>{
    it('Verify the file upload', ()=>{

    cy.visit('http://automationpractice.com/index.php?controller=contact')
    let myFile = 'add.txt'
    cy.get('#fileUpload').attachFile(myFile)
    cy.get('.filename').should('contain', 'add')
})

    it('Verify the file upload drag and down', ()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let myFile = 'Capture.PNG'
        cy.get('#file').attachFile(myFile)
        cy.get('.box__success').should('contain', "Done")
    })

    it('Verify the multiple file upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let myFile = 'add.txt'
        let myFile1 = 'Capture.PNG'
        let myFile2 = 'example.json'
        cy.get('#filesToUpload').attachFile([myFile, myFile1, myFile2])
        cy.get('#fileList').find('li').should('have.length', 3)
    })

    it('Verify the name change while file uploading', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let myFile = 'Capture.PNG'
        cy.get('#filesToUpload').attachFile({filePath:myFile, fileName: 'Image.PNG'})
        cy.get('#fileList').children().first().should('contain', "Image")
        cy.get('#fileList').children().should('have.length', 1)
    })

    it.only('upload file', ()=>{
        cy.visit('https://tus.io/demo.html')
        let myFile = "Capture.PNG"
        cy.get('#js-file-input').attachFile(myFile)
        cy.wait(5000)
        cy.get('.heading').should('have.text', 'The upload is complete!')
        cy.get('#js-upload-container').children().first().should('contain', 'upload')
    })

    // it.only('Verify the name change', ()=>{
    //     cy.visit('https://tus.io/demo.html')
    //     let myFile = 'add.txt'
    //     cy.get('#js-file-input').attachFile({filePath:myFile, fileName: "type.txt" })
    //     cy.wait(8000)
    //     cy.get('#js-upload-container').should('have.length', 1)
    //     cy.get('.button button-primary').should('contain', 'type')
    // })
})