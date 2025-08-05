// src/App.jsx
import { useState } from 'react'
import ProductForm from './ProductForm'

export default function App() {
  const [products, setProducts] = useState([])

  // Agrega un producto con needToBuy inicial false
  const addProduct = product =>
    setProducts(prev => [...prev, { ...product, needToBuy: false }])

  // Elimina producto
  const removeProduct = id =>
    setProducts(prev => prev.filter(p => p.id !== id))

  // Repone al inventario (desmarca needToBuy)
  const restockProduct = id =>
    setProducts(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, needToBuy: false }
          : p
      )
    )

  // Marca o desmarca needToBuy
  const toggleNeedToBuy = id =>
    setProducts(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, needToBuy: !p.needToBuy }
          : p
      )
    )

  // Listas filtradas según needToBuy
  const inventoryList = products.filter(p => !p.needToBuy)
  const shoppingList  = products.filter(p => p.needToBuy)

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="container mx-auto p-6 lg:p-8">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Inventario del Hogar
          </h1>
          <p className="text-sm text-gray-700 mt-1">By: Daniel Olivares</p>
          <p className="text-lg text-gray-600 mt-2">
            Gestiona tus productos y tu lista de compras.
          </p>
        </header>

        {/* Formulario */}
        <div className="max-w-3xl mx-auto mb-8">
          <ProductForm onAddProduct={addProduct} />
        </div>

        {/* Inventario */}
        <section className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4">Inventario</h2>
          <ul className="space-y-2">
            {inventoryList.map(p => (
              <li
                key={p.id}
                className="flex items-center justify-between bg-white p-4 rounded shadow"
              >
                <div>
                  <span className="font-medium">{p.name}</span>
                  <span className="ml-2 text-sm text-gray-500">
                    ({p.quantity})
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      checked={p.needToBuy}
                      onChange={() => toggleNeedToBuy(p.id)}
                    />
                    <span className="text-sm">Necesito comprar</span>
                  </label>
                  <button
                    onClick={() => removeProduct(p.id)}
                    className="text-red-500 hover:underline"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
            {inventoryList.length === 0 && (
              <p className="text-center text-gray-500">
                No hay productos en inventario.
              </p>
            )}
          </ul>
        </section>

        {/* Lista de Compras */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Necesito comprar</h2>
          <ul className="space-y-2">
            {shoppingList.map(p => (
              <li
                key={p.id}
                className="flex items-center justify-between bg-yellow-50 p-4 rounded shadow"
              >
                <span className="font-medium">
                  {p.name} ({p.quantity})
                </span>
                <button
                  onClick={() => restockProduct(p.id)}
                  className="text-green-500 hover:underline"
                >
                  Repón al inventario
                </button>
              </li>
            ))}
            {shoppingList.length === 0 && (
              <p className="text-center text-gray-500">
                Nada en la lista de compras.
              </p>
            )}
          </ul>
        </section>
      </div>
    </div>
  )
}
