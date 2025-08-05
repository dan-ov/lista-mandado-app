// src/ProductForm.jsx
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)  // Inicia en 0

  const handleSubmit = e => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return

    onAddProduct({
      id: uuidv4(),
      name: trimmed,
      quantity,
    })
    setName('')
    setQuantity(0)  // Reinicia a 0
  }

  const decrement = () => setQuantity(q => Math.max(0, q - 1))  // Permite bajar hasta 0
  const increment = () => setQuantity(q => q + 1)

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-8 p-4 bg-gray-100 rounded-lg"
    >
      {/* Nombre del producto: full ancho en móvil, 1/2 en sm+ */}
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full sm:w-1/2 p-3 border rounded-lg text-base"
      />

      {/* Control de cantidad con botones: full ancho en móvil, 1/4 en sm+ */}
      <div className="flex items-center justify-between w-full sm:w-1/4 bg-white rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={decrement}
          className="flex-1 p-3 bg-gray-200 hover:bg-gray-300 text-xl"
        >
          –
        </button>
        <input
          type="number"
          min="0"                             // Ahora min es 0
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          className="w-16 text-center p-3 border-l border-r border-gray-300 text-base appearance-none"
        />
        <button
          type="button"
          onClick={increment}
          className="flex-1 p-3 bg-gray-200 hover:bg-gray-300 text-xl"
        >
          +
        </button>
      </div>

      {/* Botón Añadir: full ancho en móvil, ancho automático en sm+ */}
      <button
        type="submit"
        className="w-full sm:w-auto p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base"
      >
        Añadir
      </button>
    </form>
  )
}
