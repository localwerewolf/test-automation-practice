/// <reference types="Cypress" />

describe("Inspect Automation Test Store Items Using Chain Commands", () => {
    it("Click on the first item using xpath", () => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//div[@id='block_frame_featured_1769']//a[@title='Skinsheen Bronzer Stick'][normalize-space()='Skinsheen Bronzer Stick']").click().then(function(itemHeaderText){
                console.log("Selected the following item:" + itemHeaderText.text())
        });
        

    })
})