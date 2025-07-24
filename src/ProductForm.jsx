// src/ProductForm.jsx

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0) // Inicializar en 0 para permitir ceros

  const handleSubmit = e => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return

    const product = {
      id: uuidv4(),
      name: trimmed,
      quantity,
    }

    onAddProduct(product) // Enviar el objeto al componente padre
    setName('')           // Limpiar el nombre
    setQuantity(0)        // Reiniciar cantidad a 0
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-8 p-4 bg-gray-100 rounded-lg"
    >
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={e => setName(e.target.value)}
        className="flex-grow p-3 border rounded-lg"
      />
      <input
        type="number"
        min="0"                      // Permitir 0 como valor mínimo
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        className="w-24 p-3 border rounded-lg"
      />
      <button
        type="submit"
        className="p-3 bg-blue-500 text-white rounded-lg"
      >
        Añadir
      </button>
    </form>
  )
}
