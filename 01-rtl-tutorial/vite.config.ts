import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.setup.ts',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/src/__tests__/**',
      '**/final/**', // Add this line to exclude the final folder
      '**/01-search-by-text/**',  // Add this line to exclude the 01 folder
      '**/02-tdd-example/**', // Add this line to exclude the 02 folder
      '**/03-search-by-role/**', // Add this line to exclude the 03 folder
      '**/04-user-interactions/**', // Add this line to exclude the 04 folder
      '**/05-form-testing/**', // Add this line to exclude the 05 folder
      // '**/06-reviews-app/**',  // Add this line to exclude the 06 folder
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*',
    ],
  },
});
