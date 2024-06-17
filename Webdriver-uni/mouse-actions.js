/// <reference types="Cypress" />

describe("Interacting with mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it("Drag box into drop boundary zone", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    })

    it("Double click on target zone", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#double-click').dblclick()
    })

    it("Click and hold on target", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color','rgb(0, 255, 0)' )
        })
    })
})