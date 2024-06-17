/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate checkbox", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        //locate the first checkbox and give it an alias
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        //check the box and validate that it is checked
        cy.get('@option-1').check().should('be.checked')

    })

    it("Uncheck and validate checkbox", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        //locate the option 3 checkbox and give it an alias
        cy.get('#checkboxes > :nth-child(5) > input').as('option-3')
        //uncheck the box and validate that it is unchecked
        cy.get('@option-3').uncheck().should('not.be.checked')

    })

    it("Interact with multiple checkboxes with one command", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        //select all the checkboxes and then check all of them and validate
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3","option-4"]).should('be.checked')

    })

})