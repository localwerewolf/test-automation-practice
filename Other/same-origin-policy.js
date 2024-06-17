/// <reference types="Cypress" />

describe("Cypress web security", () => {
    it("validate visiting 2 different domains", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.visit("https://automationteststore.com/")

    });

    it("Validate visiting two different domains via user action", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#automation-test-store").invoke('removeAttr', 'target').click()

    });

})