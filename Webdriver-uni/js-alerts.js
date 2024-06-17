/// <reference types="Cypress" />

describe("Test Alert Handling", () => {
    it("Confirm JS alert containts the correct text", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })

    it("Confirm Alert box works correctly when user clicks ok", () => {
        cy.visit("https://webdriveruniversity.com/")
        //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:alert', (str) => {
            return true})
        cy.get('#confirm-alert-text').should('contain', 'You pressed OK!')    
        })

        it("Confirm Alert box works correctly when user clicks cancel", () => {
            cy.visit("https://webdriveruniversity.com/")
            //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
            cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
            cy.get('#button4').click()
            cy.on('window:confirm', (str) => {
                return false})
            cy.get('#confirm-alert-text').should('contain', 'You pressed Cancel!')    
            })

            it.only("Confirm Alert box works correctly using stubs", () => {
                cy.visit("https://webdriveruniversity.com/")
                //Using jQuery to remove the 'target' attribute to force the page to open in the same tab
                cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
                //creating a new stub variable with const
                const stub = cy.stub()
                cy.on('window:confirm', stub) 
                cy.get('#button4').click().then(() => {
                    //asserting that the stub should match the alert text
                    expect(stub.getCall(0)).to.be.calledWith('Press a button!')
                }).then(() => {
                    return true
                }).then(() => {
                    cy.get('#confirm-alert-text').should('contain', 'You pressed OK!')
                })
                })      
                })
    