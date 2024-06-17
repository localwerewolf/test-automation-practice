/// <reference types="Cypress" />

describe("Verify Radio Buttons via Webdriveruni", () => {
    it("Check specific radio buttons", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        //locating the radio buttons section using an ID and checking the first one
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    })

    it("Validate the state of specific radio buttons", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        //locating the radio buttons section using an ID and checking the first one
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')
        cy.get("[value='cabbage']").should('be.disabled')
       // [value='cabbage']
       // [value='pumpkin']
    })
})