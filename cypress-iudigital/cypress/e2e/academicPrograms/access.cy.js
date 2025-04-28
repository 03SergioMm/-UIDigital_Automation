/// <reference types="cypress" />
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
      return false; // ignora el error y sigue con las pruebas
    }
  });

  describe('Acceso a programas académicos', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://www.iudigital.edu.co');
      });
    it('Acceso a programas académicos', () => {
        cy.url().should('eq', 'https://www.iudigital.edu.co/');
        cy.get('.oferta-iudigital').click({ force: true });
        cy.get('h1').should('be.visible')
        cy.get('.sppb-addon-title').should('be.visible').contains('Accede directamente al programa de tu interés');

    });
        

});        