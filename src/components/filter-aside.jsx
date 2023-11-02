const FilterAside = ({ checked }) => {
  return (
    <form className="w-full max-w-[175px] p-5 bg-white border-r border-[#550971]">
      <div>
        <h4 className="mb-4 text-lg font-medium text-[#550971]">Ordenação</h4>
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="order"
              value="recents"
              checked
              onChange={(e) => console.log(e.target.value)}
            />
            Recentes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="order" value="alphabetical" />
            Alfabética
          </label>
        </div>
        <div className="my-6 border-t"></div>
        <h4 className="mb-4 text-lg font-medium text-[#550971]">Filtros</h4>
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="order"
              value="recents"
              checked={checked}
              onChange={(e) => console.log(e.target.value)}
            />
            Guardados
          </label>
        </div>
      </div>
    </form>
  )
}

export { FilterAside }
