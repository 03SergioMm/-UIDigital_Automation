Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
      return false; // ignora el error y sigue con las pruebas
    }
  });

describe('smoketest', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://www.iudigital.edu.co');
      });
    
    it('Navigation Open', () => {
        cy.get('#menu-principal').should('be.visible');
        
    });
        

});