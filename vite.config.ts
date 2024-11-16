import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

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
        api: 'modern-compiler',
        additionalData: `@use "@/shared/styles/_variables.scss" as *;`,
      },
    },
  },
  optimizeDeps: {
    include: ['date-fns'],
  },
  server: {
    port: 80,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true,
    //     cookiePathRewrite: {
    //       '*': '/',
    //     },
    //     secure: false,
    //     cookieDomainRewrite: '',
    //   },
    // },
  },
});
