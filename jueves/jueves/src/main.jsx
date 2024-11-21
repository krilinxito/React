import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cartila from './Cartila.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <br />
    <Cartila/>
    <br />
    <Cartila/>
  </StrictMode>,
)
