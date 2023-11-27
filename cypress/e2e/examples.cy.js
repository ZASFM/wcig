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

   it('intercepts the message from fetch function',()=>{
      cy.intercept("POST",'http://localhost:3000/exampels',{
         fixture:'example.json'
      });

      cy.getDataTest('post-button').click();
   })

   it.only('grudges',()=>{
      cy.contains(/add some grudged/i);
      cy.getDataTest('grudge-input').within(()=>{
         cy.get('input').type('some test');
      });
      cy.getDataTest('add-grudge-button').click();
   })
})