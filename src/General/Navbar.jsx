import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import logo from '../General/assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { FaGripLines } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid position-relative">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="" srcset="" />
            </Link>
            <div className="collapse navbar-collapse me-3" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
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
                <li> <NavLink to="login" className="login-btn nav-link">LOGIN</NavLink></li>
               <li><NavLink to="register" className="login-btn nav-link">REGISTER</NavLink></li> 
                
                

            </ul>
            <form className="d-flex position-relative px-3" role="search" style={{width:'fit-content'}}>
                     <input className="form-control position-relative me-2" type="search" placeholder="search" aria-label="Search" />
                     <CiSearch className="search-icon"/> 
            </form>
            </div>
            <div className="d-flex gap-2 nav-button pe-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    < FaGripLines className='toggler-icon'/>
                </button>

                
            </div>
        </div>
        </nav>

        {/* side navbar */}
            <div className="offcanvas offcanvas-start d-flex justify-content-between flex-row" data-bs-backdrop="static" tabIndex={-1} id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 pt-3">
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
                        <li> <NavLink to="login" className="login-btn nav-link">LOGIN</NavLink></li>
                        <li><NavLink to="register" className="login-btn nav-link">REGISTER</NavLink></li> 
                        <form className="d-flex position-relative" role="search" style={{width:'fit-content'}}>
                            <input className="form-control position-relative me-2" type="search" placeholder="search" aria-label="Search" />
                            <CiSearch className="search-icon"/> 
                      </form>
                     </ul>
                     <button className="navbar-toggler" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    < IoMdClose className='toggler-icon'/>
                </button>
            </div>

    </>
  )
}

export default Navbar
