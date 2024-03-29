import React from 'react'
import { Col } from 'react-bootstrap'
import './card.css'
import { NavLink } from 'react-router-dom'
import card from '../General/assets/card.jpg'

const Card = () => {
  return (
    <>
      <Col lg={4} md={6}>
        <NavLink to='/cardinner'>
        <div className="card">
            <img src={card} className="card-img-top" alt="..." style={{height:180}}/>
             <div className="card-body">
                <h3 className="card-title">Kapan</h3>
                <p className="card-text cost"><span>RS</span> 30000</p>
                <p className="card-text description">It is located in kapan.... </p>
              </div>
        </div>
        </NavLink>
      </Col>
    </>
  )
}

export default Card
