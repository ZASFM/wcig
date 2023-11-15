describe('Fundamentals', () => {

  beforeEach(()=>{
    cy.visit('/fundamentals');
  })

  it('shows text title at fundamentals', () => {
    //cy.get('[data_test="fundamentals-header"]').contains(/Testing Fundamentals/i);
    cy.getDataTest('fundamentals-header').should('contain.text','Testing Fundamentals');
  });

  it.only('shows the first accordion text',()=>{
     //cy.contains(/Your tests will exists in a describe block./i).should('not.be.visible');
     cy.get(`[data-test="accordion-item-1"] div[role="button"]`).click()
     cy.contains(/Your tests will exist in a describe block./i).should('be.visible');
     cy.get(`[data-test="accordion-item-1"] div[role="button"]`).click();
     cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible');
  })
})


