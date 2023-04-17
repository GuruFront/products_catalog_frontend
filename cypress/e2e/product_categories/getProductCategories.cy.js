describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays 7 categories', () => {
    cy.get('[data-component="categories"] label').should('have.length', 7)
  })
})
