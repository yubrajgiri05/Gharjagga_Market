import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Testimonial = () => {
  return (
    <>
    <div className="testimonial">
        <div className="container section-padding">
            <div className='sub-heading text-center'>
                <h2>TESTIMONILAS</h2>
                <p>What Our Client Say</p>
            </div>
            <Row className='g-3'>
                <Col lg={4} md={6}>
                    <div className="card testimonial-card">
                        <div className="card-body text-center">
                            <h3 className="card-title">Bibek Pratap Rana</h3>
                            <div className="star-icon d-flex justify-content-center gap-1 pt-3">
                            <FaStar className='full-star'/>  
                            <FaStar className='full-star' />  
                            <FaStar className='full-star' />
                            <CiStar className='null-star'/>
                            <CiStar className='null-star'/>
                            </div>
                            <p>I recently sold my property with the help of Ghar Jagga Market, and it was an absolute pleasure. The team was always available to address any concerns and provided regular updates.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="card testimonial-card">
                        <div className="card-body text-center">
                            <h3 className="card-title">Gopal Poudel</h3>
                            <div className="star-icon d-flex justify-content-center gap-1 pt-3">
                            <FaStar className='full-star'/>  
                            <FaStar className='full-star' />  
                            <CiStar className='null-star'/>
                            <CiStar className='null-star'/>
                            <CiStar className='null-star'/>
                            </div>
                            <p>I recently sold my property with the help of Ghar Jagga Market, and it was an absolute pleasure. The team was always available to address any concerns and provided regular updates.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="card testimonial-card">
                        <div className="card-body text-center">
                            <h3 className="card-title">Laxmi Bhattarai</h3>
                            <div className="star-icon d-flex justify-content-center gap-1 pt-3">
                            <FaStar className='full-star'/>  
                            <FaStar className='full-star' />  
                            <FaStar className='full-star' />
                            <FaStar className='full-star' />
                            <CiStar className='null-star'/>
                            </div>
                            <p>I recently sold my property with the help of Ghar Jagga Market, and it was an absolute pleasure. The team was always available to address any concerns and provided regular updates.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default Testimonial
