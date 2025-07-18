// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Export Vite config
export default defineConfig({
  preview: {
    host: true,
    port: parseInt(process.env.PORT || '4173', 10),
    allowedHosts: ['sign-spell.onrender.com']
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
