import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Componente from './Componente.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Componente/>
    <br />
    <Componente/>
  </StrictMode>,
)
