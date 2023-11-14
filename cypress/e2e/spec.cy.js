describe('template spec', () => {
  it('passes', () => {
    cy.visit('/fundamentals');
    cy.get('[data_test="fundamentals-header"]').contains(/Testing Fundamentals/i)
  })
})