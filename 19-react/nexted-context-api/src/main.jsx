import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CombineProviders from './context/CombineProviders.jsx'
createRoot(document.getElementById('root')).render(
  <CombineProviders>
    <App />
  </CombineProviders>
)
