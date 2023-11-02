import { selects } from '../models/select-quantity'

const FormField = () => {
  return (
    <div className="w-full flex items-center gap-3 mb-3">
      <select
        name="itemQuantity"
        className="w-fit py-3 px-4 border-2 border-[#550971]"
      >
        {selects.map((select) => (
          <option key={select.id} value={select.value}>
            {select.text}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Adicione um item"
        name="itemName"
        className="w-full max-w-full py-3 px-4 border-2 border-[#550971]"
      />
    </div>
  )
}

export { FormField }
