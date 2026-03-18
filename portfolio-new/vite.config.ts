import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect if we're building for Netlify or GitHub Pages
const isNetlify = process.env.NETLIFY === 'true' || process.env.BUILD_FOR === 'netlify';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Chemins relatifs pour ouvrir directement index.html
  build: {
    outDir: isNetlify ? 'dist' : '../', // Netlify: dist/, GitHub Pages: ../
    emptyOutDir: isNetlify, // Netlify: vider dist/, GitHub Pages: ne pas vider racine
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
})
