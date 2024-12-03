import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cards from './Cards.jsx'
import Header from "./Header.jsx"
import Carros from './Carros.jsx'
import Carro from './Carro.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <br />
    <Carros/>
    <Cards></Cards>
  </StrictMode>,
)
