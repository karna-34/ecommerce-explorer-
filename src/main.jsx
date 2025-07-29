import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  Header from '../src/components/Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ height: '100vh', width: '100vw' }} >
      <Header />
      <App />
    </div>
  </StrictMode>,
)
