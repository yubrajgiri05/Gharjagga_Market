import React from 'react'
import '../about.css'
import '../../General/breadcrumb.css'
import { Col, Container, Row } from 'react-bootstrap'
import about from '../assets/about.png'
import Testimonial from '../../General/Testimonial'
import Footer from '../../General/Footer'
import breadcrumb from '../assets/breadcrumb.jpg'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="relative bread-img">
            <img src={breadcrumb} alt=""/>
           <div className="container">
             <div className="bread-middle">
                <div className="bread-title">About Us</div>
             </div>
            </div>
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
     <Container>
        <div className="section-margin">
            <Row className='g-5'>
                <Col lg={6}>
                    <div className="heading text-center pb-4">
                    <h1>About us</h1>
                    </div>
                    <p>Welcome to our Ghar Jagga Market! We are a trusted platform dedicated to helping you find your dream property. Whether you're searching for a cozy apartment, a spacious house, or a commercial space, we've got you covered.</p>
                    <p>Our mission is to simplify the process of buying, selling, and renting real estate. With our user-friendly interface and advanced search options, you can easily navigate through a wide range of listings tailored to your preferences. We provide comprehensive property details, high-quality images, and virtual tours to give you an immersive experience from the comfort of your own home.</p>
                    <p>We understand that buying or selling a property is a significant decision, which is why we strive to provide you with the most accurate and up-to-date information. Our team of experienced professionals is here to support you at every step of the way, ensuring a smooth and hassle-free transaction.</p>
                    <p>Whether you're a first-time buyer, a seasoned investor, or a homeowner looking to sell, we are here to make your real estate dreams a reality. Start exploring our listings today and let us help you find the perfect place to call home.</p>
                </Col>
                <Col lg={6}>
                    <img src={about} alt="" />
                </Col>
            </Row>
        </div>
     </Container>
     <Testimonial/>
     <Footer/>
    </>
  )
}

export default About
