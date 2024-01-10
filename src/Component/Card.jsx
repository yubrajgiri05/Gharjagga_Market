import React from 'react'
import { Col } from 'react-bootstrap'
import card from '../assets/card.jpg'

const Card = () => {
  return (
    <>
      <Col lg={4} md={6}>
        <div className="card">
            <img src={card} className="card-img-top" alt="..." style={{height:180}}/>
            <div className="card-body">
                <h3 className="card-title">Card title</h3>
                <p className="card-text cost">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="card-text description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>


      </Col>
    </>
  )
}

export default Card
