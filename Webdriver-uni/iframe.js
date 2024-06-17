/// <reference types="Cypress" />

describe("Handling iFrames & Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})
        //create a promise to begin interacting with the iframe
        cy.get('#frame').then($iframe => {
            //create a variable for the HTML body of the page
            const body = $iframe.contents().find('body')
            //wrap the body to execute cypress commands against it, and provide it an alias
            cy.wrap(body).as('iframe')
        })
        //click the Find Out More button within the iframe
        cy.get('@iframe').find('#button-find-out-more').click()
        //locate the modal and give it an alias
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should(($expectedText =>{
            //use jQuery to extract text from the modal
            const text = $expectedText.text()
            //validate that the text in the modal is as expected
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        }))
        cy.get('@modal').contains('Close').click()

    })
})