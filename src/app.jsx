import { Trash2 } from 'lucide-react'
import { useState } from 'react'

const ids = Array.from({ length: 20 }, () => crypto.randomUUID())

const App = () => {
  const [items, setItems] = useState([])
  const [order, setOrder] = useState('recent')

  const handleSubmit = (e) => {
    e.preventDefault()

    const { itemsQtd, itemName } = e.target.elements

    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        itemsQtd: itemsQtd.value,
        itemName: itemName.value,
        isStored: false,
        createdAt: new Date(),
      },
    ])
  }

  const handleRemoveItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleCheckedItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isStored: !item.isStored } : item,
      ),
    )
  }

  const clearAllItems = () => setItems([])

  const orderItems = (items) => {
    switch (order) {
      case 'alphabetical':
        return [...items].sort((a, b) => a.itemName.localeCompare(b.itemName))
      case 'stored':
        return [...items].filter((item) => item.isStored)
      case 'recent':
      default:
        return [...items].sort((a, b) => a.createdAt - b.createdAt)
    }
  }

  const alphabeticalOrder = () => setOrder('alphabetical')
  const storedOrder = () => setOrder('stored')
  const recentOrder = () => setOrder('recent')

  const storageItems = items.filter((item) => item.isStored)

  const pluralOrSingular = items.length > 1 ? 'itens' : 'item'
  const checkedItemsPercentage = (storageItems.length / items.length) * 100 || 0

  return (
    <>
      <header className="w-full max-w-screen-sm mx-auto flex items-center justify-center py-10">
        <img src="/logo.svg" alt="Logo Espaço Mulher" />
      </header>

      <section className="w-full max-w-screen-sm h-auto min-h-[400px] mx-auto flex border border-[#550971] bg-[#FDFCFD]">
        <form onSubmit={handleSubmit} className="w-full flex">
          <div className="w-full max-w-[175px] h-full p-5 bg-white border-r border-[#550971]">
            <h4 className="text-lg font-semibold mb-3">Ordenação</h4>
            <ul>
              <li className="flex items-center gap-2">
                <input
                  type="radio"
                  name="order"
                  onChange={recentOrder}
                  checked={order === 'recent' ? true : false}
                />
                <span>Recentes</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="radio"
                  name="order"
                  onChange={alphabeticalOrder}
                  checked={order === 'alphabetical' ? true : false}
                />
                <span>Alfabética</span>
              </li>
              <li className="flex items-center gap-2">
                <input
                  type="radio"
                  name="order"
                  onChange={storedOrder}
                  checked={order === 'stored' ? true : false}
                />
                <span>Guardados</span>
              </li>
            </ul>
          </div>

          <div className="w-full h-full p-5">
            <h2 className="text-xl font-bold uppercase mb-6">
              O que você precisa guardar?
            </h2>

            <div className="flex gap-3 items-center mb-4">
              <select
                name="itemsQtd"
                className="w-fit p-2 border-2 border-[#550971]"
              >
                {ids.map((id, index) => (
                  <option key={id}>{index + 1}</option>
                ))}
              </select>
              <input
                type="text"
                name="itemName"
                placeholder="Ex: Anilha"
                className="w-full max-w-full p-2 border-2 border-[#550971]"
              />
            </div>

            <button className="w-full p-3 mb-5 font-medium text-white border-white bg-[#550971] hover:bg-purple-800">
              Adicionar
            </button>

            <ul className="w-full h-auto min-h-[204px] p-4 flex flex-col flex-wrap border-2 border-[#550971] overflow-auto">
              {orderItems(items).map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.isStored}
                    onChange={() => handleCheckedItem(item.id)}
                  />
                  <span className={item.isStored ? 'line-through' : ''}>
                    {item.itemsQtd} {item.itemName}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Trash2 size={20} color="#ff0000" />
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={clearAllItems}
              className="py-2 px-3 mt-6 font-medium bg-purple-100 border-2 border-[#550971]"
            >
              Limpar lista
            </button>
          </div>
        </form>
      </section>

      <footer className="relative w-full max-w-screen-sm h-full mx-auto flex items-center justify-center p-10">
        <div className="absolute w-full h-full z-[1] bg-[#550971] border-l border-r border-b border-[#550971]" />
        <div
          style={{ width: `${checkedItemsPercentage}%` }}
          className={`absolute left-0 h-full z-[1] transition-all bg-purple-700 border-l border-r border-b border-[#550971]`}
        />
        <p className="text-purple-100 absolute z-10">
          Você tem {items.length} {pluralOrSingular} na lista e já guardou{' '}
          {storageItems.length} ({Math.round(checkedItemsPercentage)}%)
        </p>
      </footer>
    </>
  )
}

export { App }
