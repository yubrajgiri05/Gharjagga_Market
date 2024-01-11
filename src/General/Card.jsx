import React from 'react'
import { Col } from 'react-bootstrap'
import './card.css'
import { NavLink } from 'react-router-dom'
import card from '../General/assets/card.jpg'

const Card = () => {
  return (
    <>
      <Col lg={4} md={6}>
        <NavLink to='/'>
        <div className="card">
            <img src={card} className="card-img-top" alt="..." style={{height:180}}/>
             <div className="card-body">
                <h3 className="card-title">Card title</h3>
                <p className="card-text cost"><span>RS</span> 30000</p>
                <p className="card-text description">Some quick example text to build </p>
              </div>
        </div>
        </NavLink>
      </Col>
    </>
  )
}

export default Card
