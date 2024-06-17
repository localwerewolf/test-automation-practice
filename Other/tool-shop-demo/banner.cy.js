/// <reference types="Cypress" />

describe("Validate icon and banner", () => {
    it("Validate the icon and click on it", () => {
        cy.visit("https://practicesoftwaretesting.com/#/")
        cy.clearCookies
        cy.get('.navbar-brand').click()
        cy.url()
        .should('contain', 'https://practicesoftwaretesting.com/#/')
    });

    it("Validate banner and its image", () => {
        cy.visit("https://practicesoftwaretesting.com/#/")
        cy.get('img[alt="Banner"]')
        .should('have.attr', 'src', '../assets/img/barn-2400x1600.jpg')
    });
})