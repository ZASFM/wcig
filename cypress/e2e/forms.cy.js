describe('form tests',()=>{
   //visit /form before each test
   beforeEach(()=>{
      cy.visit('/forms');
   });

   it('displays title text',()=>{
      cy.contains(/testing forms/i);
      //giving the element as alias
      cy.getDataTest('subscribe-form').find('input').as('subscribe-form');
      cy.get('@subscribe-form').type('test@test.com');
      cy.contains(/Successfully subbed: test@test.com/i).should('not.exist');
      cy.getDataTest('subscribe-button').click();
      cy.contains(/Successfully subbed: test@test.com/i).should('exist');
      cy.wait(3000);
      cy.contains(/Successfully subbed: test@test.com/i).should('not.exist');

      //testing a invalid email:
      cy.get("@subscribe-form").type('123');
      cy.getDataTest('subscribe-button').click();
      cy.contains(/Invalid email: 123/i).should('exist');
      cy.wait(3000);
      cy.contains(/Invalid email: 123/i).should('not.exist');

      cy.getDataTest('subscribe-button').click();
      cy.contains(/fail/i).should('be.visible');
   })
}) 