/// <reference types="Cypress" />

describe("Validate Sorting and Filtering Functions", () => {
    it("Sort the products A-Z", () => {
        cy.visit("https://practicesoftwaretesting.com/")
        //create an empty array that we will populate later
        const toolList = []
        //sort the page alphabetically
        cy.get('.form-select')
        .select('name,asc')
        .should('contain.text', 'Name (A - Z)')
        cy.wait(1000)
        //create an array with the name of each product and validate that they're sorted
            cy.get('.card-title')
            .each(($el, index, $li) => {
                toolList.push($el.text())
                //cy.wrap(toolList)
            }).then(() => {
                expect(toolList).to.be.sorted()
                cy.log(toolList)
            })
            
            
            
    })

    it("Filter the products by price", () => {
        cy.visit("https://practicesoftwaretesting.com/")
        //create a bunch of variables for manipulating the slider
        const currentValue  = 100;
        const targetValue = 200;
        const increment = 1;
        const steps = (targetValue - currentValue) / increment;
        const arrows = '{rightarrow}'.repeat(steps);
        //sort the prices from high to low
        cy.get('.form-select')
        .select('price,desc')
        .should('contain.text', 'Price (High - Low)')
        //select the slider and type right arrow to increment it to 200
        cy.get('.ngx-slider-pointer-max')
        .should('have.attr', 'aria-valuenow', 100)
        .type(arrows)
        cy.wait(15000)
        //check that the first and last product are what we expect
        cy.get('.card-footer')
        .first()
        .invoke('text')
        .should('eq', '$178.20')
        cy.get('.card-footer')
        .last()
        .invoke('text')
        .should('eq', '$73.59')
            })

     it("Filter the products by the hand tools category", () => {
            cy.visit("https://practicesoftwaretesting.com/")
            //select the 'hand tools' filter and check it
            cy.get('.icheck').each(($el, index, $list) => {
                    if (index === 0) {
                        cy.wrap($el).check()
                    }
                })
                //validate the first product is what we expect
                cy.get('.card-title')
                .first()
                .invoke('text')
                .should('eq', ' Claw Hammer with Shock Reduction Grip ')
                })

                it("Filter the products by the drill category", () => {
                    cy.visit("https://practicesoftwaretesting.com/")
                    //const categoryList = []
                    cy.get('.icheck')
                    .each(($el, index, $list) => {
                        if (index === 12) {
                            cy.wrap($el).check({force: true})
                        }
                        })
                        cy.wait(4000)
                        const drillCategory = []
                        cy.get('.card-title')
                        .each(($el, index, $li) => {
                            drillCategory.push($el.text())
                            cy.log(drillCategory)
                            cy.wrap(drillCategory)
                            .should('have.length', 2)
                        })
                    })
                })