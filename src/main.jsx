import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import './index.css'

const rootElement = document.querySelector('[data-js="root"]')
rootElement.classList.add('container')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
