describe('Verify the banner contents and welcome message', () => {
    it('Locate and verify the banner image', () => {
      cy.visit('https://automationintesting.online/')
      cy.get('.hotel-logoUrl').should('have.attr', 'src', 'https://www.mwtestconsultancy.co.uk/img/rbp-logo.png')
    })
    it('Log the opening text and validate its correct', () => {
        cy.visit('https://automationintesting.online/')
        cy.get('.hotel-description.row > .col-sm-10').should('contain', 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.')
      })
  })
