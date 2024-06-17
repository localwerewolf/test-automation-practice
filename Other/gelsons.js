/// <reference types="Cypress" />

describe("Trying to Write Tests for Gelson's", () => {
    it("A user with an existing account can log in", () => {
        //set up the viewport size
        cy.viewport(1920, 1080);
        //Clear Cookies and Local storage just in case
        cy.clearCookies();
        cy.clearLocalStorage();
        //Ignoring errors that we'll hit while logging in
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        //navigating to the Gelson's homepage to get started
        cy.visit("https://shop.gelsons.com/store/gelsons/storefront");
        //locating the sign in button and validating its content before clicking
        cy.get('.e-1tosd5d').should('contain.text', 'Sign In / Register').click()
        //getting to the sign in page
        cy.url().should('eq', 'https://shop.gelsons.com/accounts/s/uim-consent')
        //entering our email in the box
        cy.xpath('/html//form//input').type('penstabs16@gmail.com')
        //locating and clicking on the 'continue' button
        cy.get('.e-yv0kgy').click().should('contain.text', 'Continue')
        //landing on the external login page
        cy.origin('https://gelsonsshopping.b2clogin.com', () => {
            cy.url().should('contain', 'gelsonsshopping.b2clogin.com')    
            //finding the field and entering our password (very secure!)    
            cy.get('#password').type('testtest1')
            //hitting the submit button
            cy.get('#next').click().should('contain.text', 'Sign in')
            })
        //validating that we made it back to the dashboard
    cy.url().should('eq', 'https://shop.gelsons.com/store/gelsons/storefront')
    //performing a search for bananas
    cy.get('#search-bar-input').should('have.attr', 'placeholder', "Search Gelson's...").type('Banana{enter}')
    //validating the url of the search page when we arrive
    cy.url().should('contain', '/s?k=Banana')
    //opening the banana pdv
    cy.xpath('//span[normalize-space()="Banana"]').click()
    //validating the correct product was opened
    cy.url().should('contain', '/products/18105184')
    //adding the banana to cart
    cy.contains("Add to cart").click({force: true})
    //closing the pdv
    cy.wait(2000)
    cy.contains("Back").click({force: true})
    //clearing the search bar
    cy.get('.e-14yomsv').click()
    //repeating the search now for sardines
    cy.get('#search-bar-input').should('have.attr', 'placeholder', "Search Gelson's...").type('sardines{enter}')
    cy.url().should('contain', 's?k=sardines')
    //locating our favorite dines and opening the pdv
    cy.xpath('//span[normalize-space()="Cento Sardines in Pure Olive OIl"]').click()
    cy.url().should('contain', '/products/69939')
    cy.wait(3000)
    //selecting the quantity menu - we need a lot of canned fish
    cy.get('[data-testid="select-button"]').click({force: true})
    //selecting 9 from the menu and validating our selection is correct
    cy.get('.e-yxi43o > #quantity-dropdown > [data-testid="option-9"]').click().should('have.value', 9)
    //adding the fish to the cart
    cy.get('.e-ux62mk').click()
    })
})