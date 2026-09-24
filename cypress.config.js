import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://bugbank.netlify.app/',
    setupNodeEvents(on, config) {
    },
  },
});