const OutputList = ({ items, onClear, checked, toggleChecked }) => {
  return (
    <>
      <ul className="w-full h-[204px] p-4 flex flex-col flex-wrap border-2 border-[#550971] overflow-auto">
        {items.length > 0 &&
          items.map((item, index) => (
            <li
              key={index}
              className={`${checked[index] ? 'line-through' : ''}`}
            >
              <label className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name={item.itemName}
                  checked={!!checked[index]}
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
