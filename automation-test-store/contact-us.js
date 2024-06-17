/// <reference types="Cypress" />

describe("Test Contact Us Page via Automation Test Store", () => {
    it("Should be able to submit a successful message via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        //cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.xpath("//a[contains(@href, 'contact')]").click().then(function(linkText){
            console.log("Clicked the following item:" + linkText.text())
    });
        cy.get('#ContactUsFrm_first_name').type("JA'AM");
        cy.get('#ContactUsFrm_email').type("IAMJAAM@example.com");
        cy.get('#ContactUsFrm_enquiry').type("HELLO FROM JA'AM!");
        //cy.get('button[title="Submit"]').click();
        cy.xpath("//button[@title= 'Submit']").click();
        cy.xpath("//p[contains(text(),'Your enquiry has been successfully sent to the store owner!')]").should("exist");
        //cy.get('.mb40 > :nth-child(3)').should("exist");


    })
})