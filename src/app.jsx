import { useState } from 'react'
import { FilterAside } from './components/filter-aside'
import { Footer } from './components/footer'
import { Form } from './components/form'
import { Header } from './components/header'
import { Wrapper } from './components/wrapper'

const App = () => {
  const [items, setItems] = useState([])
  const [checked, setChecked] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const { itemName, itemQuantity } = e.target.elements

    setItems((prev) => [
      ...prev,
      { itemQuantity: itemQuantity.value, itemName: itemName.value },
    ])
  }

  const clearItems = () => setItems([])

  const toggleChecked = (index) => {
    setChecked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <>
      <Header />
      <Wrapper>
        <FilterAside
          checked={checked}
          onFilterChange={(isChecked) => setChecked(isChecked)}
        />
        <Form
          handleSubmit={handleSubmit}
          items={items}
          onClear={clearItems}
          checked={checked}
          toggleChecked={toggleChecked}
        />
      </Wrapper>
      <Footer itemQuantity={items.length} />
    </>
  )
}

export { App }
