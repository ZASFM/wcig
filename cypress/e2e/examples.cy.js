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

      cy.getDataTest('grudge-list').within(()=>{
         cy.get('li').should('have.length',0);
      });

      cy.getDataTest('clear-button').should('not.exist');

      cy.getDataTest('grudge-list-title').should('have.text','Add some grudges');

      cy.getDataTest('grudge-input').within(()=>{
         cy.get('input').type('some test');
      });

      cy.getDataTest('add-grudge-button').click();

      cy.getDataTest('grudge-list').within(()=>{
         cy.get('li').should('have.length',1);
         //at index 0, it should have name some  test
         cy.get('li').its(0).should('contains.text','some test')
      });

      cy.getDataTest('grudge-list-title').should('have.text','Grudges');

      cy.getDataTest('grudge-list').within(()=>{
         cy.get('button').click();
      });

      cy.getDataTest('grudge-list',()=>{
         cy.get('li').should('have.length',0);
      });

      cy.getDataTest('grudge-input').within(()=>{
         cy.get('input').type("Some test");
      });

      cy.getDataTest('clear-button').click();

      cy.getDataTest('grudge-list').within(()=>{
         cy.get('li').should('have.length',0);
      })

   })
})