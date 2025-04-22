describe('prueba funcionalidad calculadora', () => {
  it('prueba multiplicación', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('x').click()
    cy.contains('6').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '12')
  })

  it('prueba resta', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('7').click()
    cy.get(':nth-child(3) > .orange > button').click()
    cy.contains('6').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '1')
  })
})