const Footer = ({ itemQuantity, itemsChecked, percentage }) => {
  const pluralOrSingular = itemQuantity > 1 ? 'itens' : 'item'
  const hasSavedItems =
    itemsChecked > 0 ? `já guardou (${percentage}%)` : 'não guardou nenhum'

  const progressBarWitdth = `w-[${percentage}%]`
  return (
    <footer
      className={`after:${progressBarWitdth} w-full max-w-screen-sm mx-auto flex items-center justify-center py-6 bg-[#550971] relative after:content-[''] after:absolute after:top-0 after:left-0 after:z-10 after:h-full after:bg-[#8F10BC]`}
    >
      <h2 className="text-white font-medium z-50">
        {itemQuantity > 0
          ? `Você tem ${itemQuantity} ${pluralOrSingular} na lista e ${hasSavedItems}`
          : 'Você tem 0 items na lista'}
      </h2>
    </footer>
  )
}

export { Footer }
