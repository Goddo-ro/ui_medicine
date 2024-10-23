import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// TODO: make alias for layers
// TODO: fix sass deprecated vars

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/shared/styles/_variables.scss";`,
      },
    },
  },
  server: {
    port: 3000,
  },
});
