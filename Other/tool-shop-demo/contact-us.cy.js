/// <reference types="Cypress" />

describe("Navigate to the Contact Us page and submit a form", () => {
    it("Click on the Contact link", () => {
        cy.visit("https://practicesoftwaretesting.com/")
        //locate the contact us link and click it
        cy.get('.nav-link[data-test="nav-contact"]').click()
        //validate that we arrived on the correct page
        cy.url()
        .should('eq', 'https://practicesoftwaretesting.com/#/contact')
        //get the form element to enter a first name
        cy.get('[data-test="first-name"]')
        //access its parent to validate this is the right part of the form
        .parent()
        .should('contain.text', 'First name')
        //add a name
        .type('The')
        //do the same process for the last name field and email
        cy.get('[data-test="last-name"]')
        .parent()
        .should('contain.text', 'Last name')
        .type('Professor')
        cy.get('[data-test="email"]')
        .parent()
        .should('contain.text', 'Email address')
        .type('the.professor@example.com')
        cy.get('[data-test="subject"]')
        //use select() to pick from the form
        .select('webmaster')
        .should('contain.value', 'webmaster')
        //enter a nice message!
        cy.get('[data-test="message"]')
        .type('Hello from the past, or perhaps the future! This is a message from a fuzzy time travelling puppet who just needs the right size wrench for his fuzzy little hands.')
        //submit the form
        cy.get('[data-test="contact-submit"]')
        .click()
        //validate that we get a confirmation
        cy.get('.alert').should('contain', 'Thanks for your message! We will contact you shortly. ')
    });
})