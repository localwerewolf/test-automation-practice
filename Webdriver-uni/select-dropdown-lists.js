/// <reference types="Cypress" />

describe("Verify the function of dropdown menus via Webdriveruni", () => {
    it("Check specific radio buttons", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng')
        cy.get('#dropdowm-menu-3').select('jquery')
    })
    it.only("Check specific radio buttons", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        //cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select("TestNG").should('have.value', 'testng')
        //cy.get('#dropdowm-menu-3').select('jquery')
    })
})