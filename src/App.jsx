import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './General/Navbar'
import Footer from './General/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
