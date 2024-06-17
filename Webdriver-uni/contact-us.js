/// <reference types="Cypress" />

describe("Test Contact Us Page via WebdriverUni", () => {
    it("Should be able to submit a successful message via contact us form", () => {
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        //Asserting the contents of the DOM match expectations
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', "WebDriver | Contact Us")
        cy.url().should('include', "contactus")
        cy.get('[name="first_name"]').type("JA'AM")
        cy.get('[name="last_name"]').type("DOG")
        cy.get('[name="email"]').type("IAMJAAM@example.com")
        cy.get('textarea.feedback-input').type("HELLO, JA'AM!")
        cy.get('[type="submit"]').click()
        //using xpath to assert that the form was successfully submitted
        cy.xpath("//h1[normalize-space()='Thank You for your Message!']").should("exist")

    })

    it("Should not be able to submit a form missing required fields via the contact us form", () => {
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click()
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type("JA'AM")
        cy.get('[name="last_name"]').type("DOG")
        //cy.get('[name="email"]').type("IAMJAAM@example.com")
        cy.get('textarea.feedback-input').type("HELLO, JA'AM!")
        cy.get('[type="submit"]').click()
        cy.url().should('include', "contact_us")
    })
})