import React from 'react';
import { Col, Row } from 'reactstrap';

export const SubHeader = ({children, heading, itemsCount}) => {
  return (
    <Row
      className='justify-content-between align-items-center sticky-top bg-light mb-4 p-2'
      style={{boxShadow: '0 0 10px rgba(0,0,0,0.5)', borderRadius: '10px'}}
    >
      <Col xs='auto'>
        <Row className='align-items-end'>
          <Col>
            <h1>{heading}</h1>
          </Col>
          {itemsCount?
            <Col><h5>{itemsCount}</h5></Col>
          : null }
        </Row>
      </Col>
      <Col xs='auto' >
        {children}
      </Col>
    </Row>
  )
}
