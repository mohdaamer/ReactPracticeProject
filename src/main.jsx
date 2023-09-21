import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Companies from './Components/Companies'
import Courses from './Components/Courses'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Companies />
    <Courses />
  </React.StrictMode>,
)
