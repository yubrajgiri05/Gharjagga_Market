import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from '../../General/Card'

const Rent = () => {
  return (
    <>
      <Container className='section-margin'>
        <h2>FOR RENT</h2>
        <Row className='g-3'>
            <Card/>
            <Card/>
        </Row>
      </Container>
    </>
  )
}

export default Rent
