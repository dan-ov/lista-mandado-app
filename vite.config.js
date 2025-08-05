// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/lista-mandado-app/',  <-- elimínalo o cámbialo a '/'
  base: '/',
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
  },
})
