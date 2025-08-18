import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// SWC -> Speedy Web Compiler (Compilador Web Rápido)
// Un compilador que traduce el codigo en la web de forma rapida