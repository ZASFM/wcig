describe('Fundamentals', () => {

  it('shows text title at fundamentals', () => {
    cy.visit('/fundamentals');
    cy.get('[data_test="fundamentals-header"]').contains(/Testing Fundamentals/i)
  });

  it.only('shows the first accordion text',()=>{
     cy.visit('/fundamentals');
     //cy.contains(/Your tests will exists in a describe block./i).should('not.be.visible');
     cy.get(`[data-test="accordion-item-1"] div[role="button"]`).click()
     cy.contains(/Your tests will exist in a describe block./i).should('be.visible');
     cy.get(`[data-test="accordion-item-1"] div[role="button"]`).click();
     cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible');
  })
})


