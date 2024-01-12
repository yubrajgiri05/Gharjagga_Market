import React from 'react'
import { Col, Row } from 'react-bootstrap'
import banner from '../assets/banner.jpg'
import Testimonial from '../../General/Testimonial.jsx'
import '../home.css'
import Sell from './Sell.jsx'
import Rent from './Rent.jsx'

const Home = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className="section-margin">
            <Row className='g-5'>
                <Col lg={6}>
                <img src={banner} alt="" />
                </Col>
                <Col lg={6}>
                        <div className="heading pb-5">
                            <span>Real Estate Searching Platform</span>
                            <h1>Find Your Dream Properties Using Our Platform</h1>
                        </div>
                    <form method="get" action="" className="mt-5">
                        <Row className="form-group ">
                            <Col lg={4} md={4}>
                            <select required="required" name="SearchKey" className="form-control">
                                <option value selected disabled>--Search-for--</option>
                                <optgroup label="Properties">
                                <option value="House(For home Purpose)"> House</option>
                                <option value="House(For Commercial Purpose)">Commercial House</option>
                                <option value="Land"> Land</option>	
                                <option value="Apartment"> Apartment</option>	
                                <option value="Restaurant"> Restaurant</option>	
                                </optgroup>
                                <optgroup label="Rent">
                                <option value="Room"> Room</option>
                                <option value="Office">Office</option>
                                <option value="Apartment">Apartment</option>
                                <option value="RentLand">Land</option>
                                <option value="RentHouse">House</option>
                                </optgroup>
                            </select>
                            </Col>
                            <Col lg={4} md={4}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <div className="input-group-text">In</div>
                                </div>
                                <input type="text" name="Location" placeholder="Location" className="form-control" required />
                            </div>
                            </Col>
                            <Col lg={4} md={4}>
                            <button className="primary-btn"> Search</button>
                            </Col>
                          
                        </Row>
                    </form>
                </Col>
            </Row>
        </div>
    </div>
    <Sell/>
    <Rent/>
    <Testimonial/>
    </>
  )
}

export default Home
