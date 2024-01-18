import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../general/assets/logo.png'
import { NavLink } from 'react-router-dom'
import { IoMdMail } from "react-icons/io";
import { FaLocationDot,FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="container section-margin ">
            <div className="footer-line">
                <Row>
                    <Col lg={4} md={6} className='text-center'>
                    <div className="navbar-brand">  <img src={logo} alt=""  /></div>
                    <p>The Ghar Jagga Market is a real estate that helps you to sell your property in a fast way.
                    We are a trusted platform dedicated to helping you find your dream property. 
                    </p>
                    </Col>
                    <Col lg={4} md={6} className='d-flex flex-column gap-3 align-items-center'>
                        <div className="footer-link">Helpful Links:</div>
                        <ul className='d-flex flex-column align-items-center gap-3'>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" >ABOUT US</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">CONTACT US</NavLink>
                            </li>   
                        </ul>
                    </Col>
                    <Col lg={4} md={6} className='d-flex flex-column gap-3 align-items-center'>
                        <div className="footer-link">Contact Info:</div>
                        <ul className='d-flex flex-column align-items-center gap-3'>
                            <li className='d-flex gap-1 align-items-center contact-media'>
                                <IoMdMail /> Mail:<a href="mailto:name@email.com">support@gharjaggamarket.com</a>
                            </li>
                            <li className='d-flex gap-1 align-items-center contact-media'>
                                <FaLocationDot /> Address: Shankhamul Planning Cross 4
                            </li>
                            <li className='d-flex gap-1 align-items-center contact-media'>
                                <FaPhone /> Phone: <a href="tel:9702054996">+977-9702054996</a> /<a href="tel:9849053307">9849053307</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
                <div className="copyright text-center pt-4">
                    @Ghar Jagga Market <span>2023</span>. All rights reserved.
                </div>
      </div>
    </>
  )
}

export default Footer
