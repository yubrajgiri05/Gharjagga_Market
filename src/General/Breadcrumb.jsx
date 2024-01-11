import React from 'react'
import breadcrumb from './assets/breadcrumb.jpg'
import './breadcrumb.css'
import { NavLink } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="relative bread-img">
            <img src={breadcrumb} alt=""/>
           <div className="container"> <div className="bread-title">About Us</div></div>
        </div>
        <div className="breadcrumb-whole">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export default Breadcrumb
