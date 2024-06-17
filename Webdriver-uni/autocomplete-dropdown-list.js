/// <reference types="Cypress" />

describe("Verify Autocomplete Function", () => {
    it("Select an item from the autocomplete list", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        //selecting the search bar and typing the character 'a'
        cy.get('#myInput').type('a')
        //getting the contents of the autocomplete and extracting them to an array
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
        //creating a constant for the items within the list    
        const prod = $el.text()
        //creating a variable for the item we want to select
        const productToSelect = 'Avacado'

        if(prod === productToSelect) {
            $el.trigger("click")

            cy.get('#submit-button').click()
            cy.url().should('contain', 'food-item=Avacado')
        }
        }).then(() => {
            cy.get('#myInput').type('g')
        //getting the contents of the autocomplete and extracting them to an array
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
        //creating a constant for the items within the list    
        const prod = $el.text()
        //creating a variable for the item we want to select
        const productToSelect = 'Grapes'

        if(prod === productToSelect) {
            $el.trigger("click")

            cy.get('#submit-button').click()
            cy.url().should('contain', 'food-item=Grapes')
        }
            })
        })
    })
})