import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './General/Navbar'
import './responsive.css'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
