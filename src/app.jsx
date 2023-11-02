import { useState, useEffect } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('No dependecies.')
  }, [counter])

  const onIncrement = () => setCounter((prev) => prev + 1)

  return (
    <>
      <h1>Boilerplate</h1>
      <button onClick={onIncrement}>Increment</button>
      <span>{counter}</span>
    </>
  )
}

export { App }
