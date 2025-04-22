Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
      return false; // ignora el error y sigue con las pruebas
    }
  });
  
  describe('Menu principal Navigation', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit('https://www.iudigital.edu.co/index.php');
    });
  
    it('Verificar que navega correctamente a cada sección del menú principal', () => {
      const menuItems = [
        { label: 'Nuestra Institución', urlPart: 'mision-vision' },
        { label: 'Nuestra Oferta', urlPart: 'nuestra-oferta' },
        { label: 'Vida Universitaria', urlPart: 'vida-univesitaria' }
        
      ];
  
      menuItems.forEach(item => {
        cy.get('#menu-principal').contains('a', item.label).click();
        cy.url().should('include', item.urlPart);
        cy.go('back');
      });
    });
  });
  