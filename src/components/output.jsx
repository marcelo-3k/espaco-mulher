const OutputList = ({ items, onClear, checkedFilter, toggleChecked }) => {
  const filteredItems = checkedFilter
    ? items.filter((item) => item.itemChecked)
    : items

  return (
    <>
      <ul className="w-full h-[204px] p-4 flex flex-col flex-wrap border-2 border-[#550971] overflow-auto">
        {filteredItems.map((item, index) => (
          <li
            key={item.id}
            className={`${item.itemChecked ? 'line-through' : ''}`}
          >
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                name={item.itemName}
                checked={item.itemChecked}
                onChange={() => toggleChecked(index)}
              />
              {`${item.itemQuantity} ${item.itemName}`}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={onClear}
        type="button"
        className="w-fit py-3 px-4 mt-5 font-medium text-white border-2 border-[#550971] bg-gray-500"
      >
        Limpar lista
      </button>
    </>
  )
}

export { OutputList }
