

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.iudigital.edu.co',
    setupNodeEvents(on, config) {
      // Aquí puedes poner tasks personalizados si los necesitas
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});

