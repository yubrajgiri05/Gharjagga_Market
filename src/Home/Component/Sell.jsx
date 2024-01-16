import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from '../../General/Card'

const Sell = () => {
  return (
    <>
      <Container className='section-margin'>
        <h2>FOR SELL</h2>
        <div className="d-flex justify-content-between align-items-center pt-3">
            <h3>Latest Properties</h3>
            <div className="d-flex gap-2">
                <button className="primary-btn">ALL TYPES</button>
                <button className="primary-btn">LAND</button>
                <button className="primary-btn">HOUSE</button>
            </div>
        </div>
        <Row className='g-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Row>
      </Container>
    </>
  )
}

export default Sell
