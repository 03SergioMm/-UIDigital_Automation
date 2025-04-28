/// <reference types="cypress" />
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('appendChild')) {
      return false; // ignora el error y sigue con las pruebas
    }
  });

  describe('Prueba de visualización móvil en IU Digital', () => {
    const dispositivos = [
      { nombre: 'iPhone 14 Pro', width: 430, height: 932 },
      { nombre: 'Samsung Galaxy S23', width: 412, height: 915 },
      { nombre: 'Google Pixel 7', width: 412, height: 915 },
      { nombre: 'iPhone 12', width: 390, height: 844 },
      { nombre: 'Samsung Galaxy S21', width: 360, height: 800 }
    ];
  
    dispositivos.forEach((device) => {
      it(`Debe cargar correctamente en ${device.nombre}`, () => {
        cy.viewport(device.width, device.height);
        cy.visit('https://iudigital.edu.co/index.php', {
          timeout: 7000 
        });
        cy.get('#bottom-links').should('exist');
        cy.get('footer').should('exist');
      });
    });
  });
  