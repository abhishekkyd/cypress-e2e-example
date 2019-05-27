/// <reference types="Cypress" />

context('Contact Us', () => {
  beforeEach(() => {
    cy.log("As a user, navigate to homepage")
    cy.visit('https://www.mashreqbank.com/uae/en/personal/home')
    cy.log("Homepage should loaded")
    cy.get('.leftLinks a').should('contain', 'Personal')
    cy.log("I navigate to contact us page using contact us link")
    cy.get('h5.ac-gf-buystrip-info-title').contains('Contact Us').next().click()
    cy.log("Contact us page should loaded")
    cy.get('.col-lg-6 h3').should('contain', 'Contact Us')
  })

  it('Submitting the form without entering any details', () => {
    cy.log("I submit the form without entering any details")
    cy.get('#btnSubmit').click()
    cy.log("All mandatory fields should have error higlight")
    cy.get('.has-error').should('have.length', 9)
  })

  it('Verify The "I am looking to…" dropdown items', () => {
    cy.log("The 'I am looking to…' dropdown should have 4 items")
    cy.get('#reachoutforproduct option').should('have.length', 5)
  })

  it('Verify initially the "Select Sub Product" dropdown is empty', () => {
    cy.log("Initially the 'Select Sub Product' dropdown should be empty")
    cy.get('#product option').should('have.length', 1)
  })

  it('Verify the "Select Sub Product" dropdown after selecting a product "Loans"', () => {
    cy.log("The 'Select Sub Product' dropdown should contain 'Home Loan UAE Resident' after select 'Loans' from the 'Select Product' dropdown")
    cy.get('#need').select("Loans")
    cy.get('#product option').should('have.length', 7).and("contain", "Home Loan UAE Resident")
  })

  it('Submitting the form with less than 7 digit in Mobile Number field', () => {
    cy.log("I submit the form with less than 7 digit in Mobile Number field")
    cy.get("#mobile").type("123456")
    cy.get('#btnSubmit').click()
    cy.log("Mobile Number field should have error higlight")
    cy.get('#mobile').next().should('contain', "Mobile number should be 7 digit")
  })

  it('Submitting the form with 7 digit in Mobile Number field', () => {
    cy.log("I submit the form with less than 7 digit in Mobile Number field")
    cy.get("#mobile").type("1234567")
    cy.get('#btnSubmit').click()
    cy.log("Mobile Number field should have error higlight")
    cy.get('#mobile').next().should('not.be.visible')
  })

})