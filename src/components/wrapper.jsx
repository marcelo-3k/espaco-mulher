const Wrapper = ({ children }) => {
  return (
    <section className="w-full max-w-screen-sm h-auto min-h-[400px] mx-auto flex border border-[#550971] bg-[#FDFCFD]">
      {children}
    </section>
  )
}

export { Wrapper }
