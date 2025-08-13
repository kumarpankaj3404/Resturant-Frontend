import React from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/common/Footer'
function App() {
  
  return (
   <BrowserRouter>
   <Navbar/>
   <AppRoutes/>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
