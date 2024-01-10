import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
        <div className="container position-relative">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="" srcset="" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 align-items-center">
                <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">HOME</NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   For Sell
                </NavLink>
                <ul className="dropdown-menu">
                    <li><NavLink to="/" className="dropdown-item">Action</NavLink></li>
                    <li><NavLink to="/" className="dropdown-item" >Another action</NavLink></li>
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
                <NavLink to="/" className="nav-link" >ABOUT US</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/" className="nav-link">CONTACT US</NavLink>
                </li>
                <form className="d-flex" role="search">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                 </form>
            </ul>
            </div>
            <div className="d-flex gap-2 nav-button">
                <NavLink to="/" className="primary-btn">LOGIN</NavLink>
                <NavLink to="/" className="primary-btn">REGISTER</NavLink>
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
