import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {UserProvider} from './Context/UserContext.jsx'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <UserProvider>
      
      <App />
    </UserProvider>
  </StrictMode>,
)
