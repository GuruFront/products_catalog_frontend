describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  //TODO: add any useful test here instead
  it('displays 7 categories', () => {
    cy.get('[data-component="categories"] label').should('have.length', 7)
  })
})
