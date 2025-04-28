/// <reference types="cypress" />
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
      return false; // ignora el error y sigue con las pruebas
    }
  });
  
  describe('Menu principal Navigation', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit('https://www.iudigital.edu.co');
    });
  
    it('Verificar que navega correctamente a cada sección del menú principal', () => {
      const menuItems = [
        { label: 'Transparencia', urlPart: 'transparencia' },
        { label: 'Atención al ciudadano', urlPart: 'atencion-al-ciudadano' },
        { label: 'Participa', urlPart: 'participa' },
        { label: 'Nuestra Institución', urlPart: 'mision-vision' },
        { label: 'Nuestra Oferta', urlPart: 'nuestra-oferta' },
        { label: 'Vida Universitaria', urlPart: 'vida-univesitaria' }
        
        
        
      ];
  
      menuItems.forEach(item => {
        cy.get('#menu-principal').contains('a', item.label).click({ force: true });	
        cy.url().should('include', item.urlPart);
        cy.go('back');
      });

      cy.url().should('eq', 'https://www.iudigital.edu.co/');
    });
  });
  