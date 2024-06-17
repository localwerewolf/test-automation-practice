/// <reference types="Cypress" />

describe("Select and interact with individual items", () => {
    it("Pick the first product card in the grid", () => {
        cy.visit("https://practicesoftwaretesting.com/#/")
        cy.get('.card-footer')
        .first()
        .click()
        cy.url().should('contain', 'https://practicesoftwaretesting.com/#/product/')
        cy.get('[aria-label="category"]')
        .invoke('text')
        .should('eq', 'Pliers')
        cy.get('[aria-label="brand"]')
        .invoke('text')
        .should('eq', 'ForgeFlex Tools ')
        cy.get('[data-test="product-description"]')
        .invoke('text')
        .should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra felis nec pellentesque feugiat.')
    });
})