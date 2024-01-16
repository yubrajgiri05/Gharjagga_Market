import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import logo from '../General/assets/logo.png'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid position-relative">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="" srcset="" />
            </Link>
            <div className="collapse navbar-collapse me-3" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 align-items-center">
                <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">HOME</NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   For Sell
                </NavLink>
                <ul className="dropdown-menu">
                    <li><NavLink to="searchrent" className="dropdown-item">House(For home Purpose)</NavLink></li>
                    <li><NavLink to="/" className="dropdown-item" >Home(For Commercial Purpose)</NavLink></li>
                    <li><NavLink to="/" className="dropdown-item" >Land</NavLink></li>
                    <li><NavLink to="/" className="dropdown-item" >Apartment</NavLink></li>
                    <li><NavLink to="/" className="dropdown-item" >Restaurant</NavLink></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   For Rent
                </NavLink>
                <ul className="dropdown-menu">
                    <li><NavLink to="/" className="dropdown-item">Action</NavLink></li>
                    <li><NavLink to="/" className="dropdown-item" >Another action</NavLink></li>
                </ul>
                </li>
                <li className="nav-item">
                <NavLink to="about" className="nav-link" >ABOUT US</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="contact" className="nav-link">CONTACT US</NavLink>
                </li>
                <NavLink to="login" className="primary-btn">LOGIN</NavLink>
                <NavLink to="register" className="primary-btn">REGISTER</NavLink>
                
                

            </ul>
            </div>
            <div className="d-flex gap-2 nav-button pe-5">
                <form className="d-flex position-relative" role="search">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                     <CiSearch className="search-icon"/> 
                 </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" />
                </button>
            </div>
        </div>
        </nav>

    </>
  )
}

export default Navbar
