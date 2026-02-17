import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Chemins relatifs pour ouvrir directement index.html
  build: {
    outDir: '../', // Build directement à la racine
    emptyOutDir: false, // Ne pas vider le dossier racine
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
})
