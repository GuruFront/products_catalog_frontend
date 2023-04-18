describe('check category hides for small screens', () => {
  beforeEach(() => {
    cy.viewport(600, 600)
    cy.visit('/')
  })

  it('hide categories', () => {
    cy.get('[data-testid="categories"] label').should('have.length', 0)
  })
})

describe('check category shows for not mobile screens', () => {
  beforeEach(() => {
    cy.viewport(900, 900)
    cy.visit('/')
  })

  it('displays 7 categories', () => {
    cy.get('[data-testid="categories"] label').should('have.length', 7)
  })
})
