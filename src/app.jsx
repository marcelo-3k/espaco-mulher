import { useState } from 'react'
import { FilterAside } from './components/filter-aside'
import { Footer } from './components/footer'
import { Form } from './components/form'
import { Header } from './components/header'
import { Wrapper } from './components/wrapper'

const App = () => {
  const [items, setItems] = useState([])
  const [recentsFilter, setRecentsFilter] = useState(true)
  const [alphabeticalFilter, setAlphabeticalFilter] = useState(false)
  const [savedItemsFilter, setSavedItemsFilter] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const { itemName, itemQuantity } = e.target.elements
    const newItemName = itemName.value
    const newItemQuantity = itemQuantity.value

    setItems((prev) => [
      ...prev,
      {
        itemId: crypto.randomUUID(),
        itemQuantity: newItemQuantity,
        itemName: newItemName,
        itemChecked: false,
      },
    ])

    itemName.value = ''
    itemQuantity.value = 1
  }

  const toggleChecked = (index) => {
    const updatedItems = [...items]
    updatedItems[index].itemChecked = !updatedItems[index].itemChecked
    setItems(updatedItems)
  }

  const clearItems = () => setItems([])

  const handleRecentsItems = () => {
    setRecentsFilter((prev) => !prev)
    setAlphabeticalFilter((prev) => !prev)
    console.log('recents')
  }

  const handleAlphabeticalItems = () => {
    setRecentsFilter((prev) => !prev)
    setAlphabeticalFilter((prev) => !prev)
    console.log('alpha')
  }

  const handleSaveItems = () => {
    setSavedItemsFilter((prev) => !prev)
    console.log('saved')
  }

  const itemsOrderedByAlphabeticalOrder = items.toSorted((a, b) =>
    a.itemName.localeCompare(b.itemName),
  )

  const totalCheckedItems = items.filter((item) => item.itemChecked).length
  const checkedItemsPercentage = (totalCheckedItems / items.length) * 100 || 0 // Evita NaN se items.length for 0

  return (
    <>
      <Header />
      <Wrapper>
        <FilterAside
          recentsItemsChecked={recentsFilter}
          handleRecentsChange={handleRecentsItems}
          alphabeticalItemsChecked={alphabeticalFilter}
          handleAlphabeticalItems={handleAlphabeticalItems}
          savedItemsChecked={savedItemsFilter}
          handleSavedItems={handleSaveItems}
        />
        <Form
          handleSubmit={handleSubmit}
          items={recentsFilter ? items : itemsOrderedByAlphabeticalOrder}
          onClear={clearItems}
          toggleChecked={toggleChecked}
          checkedFilter={savedItemsFilter}
        />
      </Wrapper>
      <Footer
        itemQuantity={items.length}
        itemsChecked={totalCheckedItems}
        percentage={checkedItemsPercentage}
      />
    </>
  )
}

export { App }
