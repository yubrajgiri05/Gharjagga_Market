import React from 'react'
import {Row, Col } from 'react-bootstrap'
import '../searchrent.css'
import Card from '../../General/Card'

const SearchRent = () => {
  return (
    <>
      <div className="conatiner-fluid d-flex justify-content-center align-items-center">
      <form method="get" action="" className="mt-5 ">
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
      </div>
      <div className="container section-margin">
      <div className="rent-box">
        <div className="searchresult d-flex gap-2 align-items-center">
            <span>Results : </span>
            <p> Your searched for "House".</p>
        </div>
        <Row className='g-5'>
            <Card/>
            <Card/>
            <Card/>
        </Row>
        </div>
      </div>
    </>
  )
}

export default SearchRent
