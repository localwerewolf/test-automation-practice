/// <reference types="Cypress" />

describe("Validate form field interactions", () => {

    it("interacts with form elements", () => {
        cy.visit('https://practice-automation.com/form-fields/');
        cy.get('[data-cy="name"]')
        .type('Sweet Gene');
        cy.get('[data-cy="drink5"]').check()
        cy.get('[data-cy="color4"]').check()
        cy.get('[data-cy="siblings"]').select('Maybe')
        cy.xpath('//label[normalize-space()="Fast animals"]').first().should('contain.text', 'Fast animals')
        cy.get('[data-cy="email"]').type('sweet.gene@fake.com')
        cy.get('[data-cy="message"]').type('Example message')
        cy.get('[data-cy="submit-btn"]').click()

    })
})