// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lista-mandado-app/',   // si publicas en GitHub Pages
  plugins: [
    react(),
  ],
  server: {
    host: true,
    strictPort: true,
  },
})
