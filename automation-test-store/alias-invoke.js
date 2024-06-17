/// <reference types="Cypress" />

describe("Alias and Invoke", () => {
    it("Validate a specific hair care product", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
      cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productName')
      cy.get('@productName').its('length').should('be.gt', 5)
      cy.get('@productName').should('include', 'Seaweed Conditioner')
    });
  
  it("Validate there are 16 thumbnails and an add to cart button", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail")
    cy.get(".thumbnail").should('have.length', 16)
    cy.get(".thumbnail").find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
  });

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as('productThumbnail');
    //creates an alias for the thumbnail component 
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    //creates an alias for the non-sale price
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    //creates an alias for the sale price
    let itemsTotal = 0;
    //final variable for the total of all items
    cy.get('@itemPrice').then($linkText => {
        let itemsPriceTotal = 0;
        let itemPrice = $linkText.split('$');
        let i;
        //creates an array that iterates over the non-sale priced items
        for(i = 0; i < itemPrice.length; i ++) {
          cy.log(itemPrice[i])
          //log the array in the console
          itemsPriceTotal += Number(itemPrice[i])
          //add up all the non-sale items 
        }
        itemsTotal += itemsPriceTotal;
        cy.log("Non sale items price total:" + itemsPriceTotal)
        //add that total to the itemsTotal and log it in the console
    })

    cy.get('@saleItemPrice').then($linkText => {
        let saleItemPrice = 0;
        let saleItemsPrice = $linkText.split('$');
        let i;
        //creates an array that iterates over all of the sale price items
        for(i = 0; i < saleItemsPrice.length; i ++) {
            cy.log(saleItemsPrice[i])
            //log the array in the console
            saleItemPrice += Number(saleItemsPrice[i])
            //add up all the sale priced items
        }
        itemsTotal += saleItemPrice;
        cy.log("Sale items price total:" + saleItemPrice)
        //add that total to the itemsTotal and log it in the console
  
        .then(() => {
            cy.log("total price of all products = " + itemsTotal);
            //log the final total in the console
            expect(itemsTotal).to.eq((660.5));
            //assert the correct value for all of the items on the page is what we logged
        })
        cy.log(itemsTotal);
        //log the total again? why did i add this?
        });
    });
});