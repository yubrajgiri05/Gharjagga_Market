import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './General/Navbar'
import Home from './Home/Component/Home';
import About from './About/Component/About';
import Contact from './Contact/Component/Contact';
import LogIn from './LogIn/Component/LogIn';
import Register from './LogIn/Component/Register';
import ForgetPassword from './LogIn/Component/ForgetPassword';
import SearchRent from './Rent/Component/SearchRent'
import Innerpage from './Rent/Component/Innerpage'
import Dashboard from './Dashboard/Component/Dashboard'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='login' element={<LogIn/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='forgetpassword' element={<ForgetPassword/>}/>
            <Route path='searchrent' element={<SearchRent/>}/>
            <Route path='cardinner' element={<Innerpage/>}/>
            <Route path='dasboard' element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
