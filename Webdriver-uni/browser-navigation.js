/// <reference types="Cypress" />

describe("Test Contact Us Page via WebdriverUni", () => {
    it("Navigates to various pages using forward, back, and reload", () => {
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')
        cy.go('back')

        cy.reload()
        cy.url().should('include', 'https://webdriveruniversity.com/')

        cy.go('forward')
        cy.url().should('include', 'contactus')
        
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')

        cy.go('back')
        cy.url().should('include', 'https://webdriveruniversity.com/')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')

    })
})