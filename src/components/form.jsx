import { FormField } from './form-field'
import { OutputList } from './output'

const Form = ({
  handleSubmit,
  items,
  onClear,
  checked,
  checkedFilter,
  toggleChecked,
}) => {
  return (
    <>
      <form className="w-full max-w-full p-5" onSubmit={handleSubmit}>
        <h1 className="mb-6 text-lg font-medium uppercase text-[#550971]">
          O que você precisa guardar?
        </h1>
        <FormField />
        <button className="w-full py-3 px-4 mb-5 font-medium text-white border-white bg-[#550971]">
          Adicionar
        </button>
        <OutputList
          items={items}
          onClear={onClear}
          checked={checked}
          checkedFilter={checkedFilter}
          toggleChecked={toggleChecked}
        />
      </form>
    </>
  )
}

export { Form }
