import React from 'react';
import { Col, Row } from 'reactstrap';

export const SubHeader = ({children, heading, itemsCount}) => {
  return (
    <Row className='justify-content-between align-items-center sticky-top bg-light'>
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
