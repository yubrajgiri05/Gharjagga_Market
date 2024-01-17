import React from 'react'
import '../contact.css'
import '../../General/breadcrumb.css'
import { Col, Row } from 'react-bootstrap'
import { MdEmail } from "react-icons/md";
import { FaPhone,FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Footer from '../../General/Footer';
import  breadcrumb  from '../assets/contact.jpeg'

const Contact = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="relative bread-img">
            <img src={breadcrumb} alt=""/>
           <div className="container"> <div className="bread-title">Contact Us</div></div>
        </div>
        <div className="breadcrumb-whole">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
      <div className="container py-5">
        <Row className='g-4'>
            <Col lg={4} md={6}>
                <div className="contact-box">
                   <div className="d-flex  justify-content-center align-items-center pb-2">
                        <MdEmail className="contact-icon" />
                       <div className=" m-auto contact-info"> Mail</div>
                   </div>
                   <NavLink to="mailto:support@gharjaggamarket.com" className='d-flex justify-content-center'>support@gharjaggamarket.com</NavLink>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className="contact-box">
                   <div className="d-flex  justify-content-center align-items-center pb-2">
                        <FaPhone className="contact-icon" />
                       <div className=" m-auto contact-info"> Phone</div>
                   </div>
                   <div className="d-flex justify-content-center gap-2">
                     <NavLink to="tel:9702054996">+977-9702054996</NavLink>
                     /
                     <NavLink to="tel:9849053307">9849053307</NavLink>
                   </div>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className="contact-box">
                   <div className="d-flex  justify-content-center align-items-center pb-2">
                        <FaLocationDot className="contact-icon" />
                       <div className=" m-auto contact-info"> Location</div>
                   </div>
                   <div className="d-flex justify-content-center">Shankhamul Planning Cross 4, Lalitpur</div>
                </div>
            </Col>
        </Row>
      </div>
      <div className="container-fluid">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5118.661245988439!2d85.33119502666072!3d27.68191598907139!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1704972155890!5m2!1sen!2snp"  style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>
      <Footer/>
    </>
  )
}

export default Contact
