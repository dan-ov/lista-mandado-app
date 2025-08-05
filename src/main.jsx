// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'   // <<— carga aquí tu Tailwind y tus estilos

const container = document.getElementById('root')
if (!container) {
  throw new Error('No se encontró el elemento #root en index.html')
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
