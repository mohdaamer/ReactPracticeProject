import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>,
)
