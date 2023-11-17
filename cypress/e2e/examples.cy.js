describe('examples',()=>{
   //visiting /examples
   before(()=>{
      cy.visit('/examples');
   })

   it('shows correct path',()=>{
      cy.getDataTest('nav-why-cypress').click();
      cy.location("pathname").should('equal','/');

      cy.getDataTest('nav-fundamentals').click();
      cy.location("pathname").should('equal','/fundamentals');

      cy.getDataTest('nav-forms').click();
      cy.location("pathname").should('equal','/forms');

      cy.getDataTest('nav-examples').click();
      cy.location("pathname").should('equal','/examples');
   })
})