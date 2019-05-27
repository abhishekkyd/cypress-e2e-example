/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.log("As a user, navigate to homepage")
    cy.visit('https://www.mashreqbank.com/uae/en/personal/home')
    cy.log("Homepage should loaded")
    cy.get('.leftLinks a').should('contain', 'Personal')
  })

  it('Verify navigation menu items', () => {
    cy.log("Navigation menu should have 9 items")
    cy.get('.leftLinks a').should('have.length', 10)
    cy.log("Navigation menu item should contain Corporate, Business, International etc")
    cy.get('.leftLinks a').should('contain', 'Corporate')
                          .and('contain', 'Business')
                          .and('contain', 'International')
                          .and('contain', 'Private Banking')
                          .and('contain', 'Al Islami')
                          .and('contain', 'Gold')
                          .and('contain', 'Mashreq Securities')
                          .and('contain', 'Mashreq Capital')
                          .and('contain', 'Mashreq Global Services')
  })

  it('Verify Mashreq News section on homepage', () => {
    cy.log("Mashreq News section should exist on homepage")
    cy.get('.newsBox h3').should('contain', 'Mashreq News')
  })

  it('Verify Contact Us link on homepage and navigate to link', () => {
    cy.log("Contact Us link should exist on homepage")
    cy.get('h5.ac-gf-buystrip-info-title').contains('Contact Us').next().click()
    cy.log("I navigate to contact us page using contact us link")
    cy.get('.col-lg-6 h3').should('contain', 'Contact Us')
  })

})