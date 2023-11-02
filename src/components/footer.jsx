const Footer = ({ itemQuantity, itemChecked }) => {
  return (
    <footer className="w-full max-w-screen-sm mx-auto flex items-center justify-center py-6 bg-[#550971]">
      <h2 className="text-white font-medium">
        Você tem {itemQuantity} itens na lista e já guardou {itemChecked} (33%)
      </h2>
    </footer>
  )
}

export { Footer }
