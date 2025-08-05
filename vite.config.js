// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // En Netlify tu app vive en la raíz, no en /lista-mandado-app/
  base: '/',
  plugins: [
    react(),
  ],
  server: {
    host: true,
    strictPort: true,
  },
})
