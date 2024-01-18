import React from 'react'
import rent from '../assets/rent.jpg'
import { NavLink } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt,FaUser } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'


const Innerpage = () => {
   
  return (
    <>
      <div className="container-fluid">
        <div className="relative bread-img">
            <img src={rent} alt=""/>
           <div className="container ">
                <div className="bread-middle">
                    <div className="bread-title">House(For home Purpose) on sell at Teku</div>
                    <div className="bread-info"><CiLocationOn/>  Teku <FaPhoneAlt/> 9702054996 / 9849053307 </div>
                    <div className="bread-price">Price: <span>7,75,00,000.00/--</span>  Date:2023/08/10</div>
                </div>
            </div>
        </div>
        <div className="breadcrumb-whole">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to='/'>Properties</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page"> House(For home Purpose) on sell at Teku</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <Container className='section-margin'>
        <div className="innercard-detail">
            <h1 >House(For home Purpose) on sell at Teku</h1>
            <div className="innercard-info"><CiLocationOn/>  <p>Teku</p> <FaPhoneAlt/> <p>9702054996 / 9849053307</p> </div>
            <div className="innercard-price">Price: <span>7,75,00,000.00/--</span>  Date: <p>2023/08/10</p></div>
        </div>
        <div className="innercard-detail gallary">
            <h2>Gallary</h2>
           <Row className='g-1'>
                <Col lg={6} md={6}>
                    <img src={one} alt="" />
                </Col>
                <Col lg={6} md={6}>
                    <img src={two} alt="" />
                </Col>
                <Col lg={6} md={6}>
                    <img src={three} alt="" />
                </Col>
                <Col lg={6} md={6}>
                    <img src={four} alt="" />
                </Col>
           </Row>
        </div>
        <div className="innercard-detail about-listing">
            <h2>About Listing</h2>
            <p>This House(For home Purpose) is located in Teku.It's nearest landmark is teku hospital. For more detail please contact owner.</p>
        </div>
        <div className="innercard-detail owner-detail">
            <h2>Details</h2>
            <h3>Owner Details</h3>
            <Row className="g-3">
                <Col lg={4} md={4} className="d-flex align-items-center gap-2">
                   <FaUser className="innercard-infoo"/> Vinay Shrestha
                </Col>
                <Col lg={4} md={4} className="d-flex align-items-center gap-2">
                    <FaPhoneAlt className="innercard-infoo"/> 9841244029
                </Col>
                <Col lg={4} md={4} className="d-flex align-items-center gap-2">
                    <CiLocationOn className="innercard-infoo"/>  Teku
                </Col>
            </Row>
            <h3>House(For home Purpose) Details</h3>
            <Row className="g-3">
                <Col lg={4} md={4} className="d-flex align-items-center gap-2">
                    <div className="innercard-infoo">Area:</div>  0-8-1-1
                </Col>
                <Col lg={4} md={4} className="d-flex align-items-center gap-2">
                    <div className="innercard-infoo">Road:</div>  10
                </Col>
                <Col lg={4} md={4} className="d-flex align-items-center gap-2">
                    <div className="innercard-infoo">Parking:</div>  2 car,5 bikes
                </Col>
                <Col lg={4} md={4} className="d-flex align-items-center gap-2">
                    <div className="innercard-infoo">Landmark:</div>  teku hospital
                </Col>
                <Col lg={4} md={4} className="d-flex align-items-center gap-2">
                    <div className="innercard-infoo">Floor:</div> 3
                </Col>
                <Col lg={4} md={4} className="d-flex align-items-center gap-2">
                    <div className="innercard-infoo">Date:</div> 2023/08/10
                </Col>
            </Row>
        </div>
    </Container>
    </>
  )
}

export default Innerpage
