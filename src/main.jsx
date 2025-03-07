import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './MainContainer.module.css'
import MainContainer from './MainContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContainer />
  </StrictMode>,
)
