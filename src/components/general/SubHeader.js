import React from 'react';
import { Col, Row } from 'reactstrap';

//components
import { ButtonList } from '../helpers/ButtonList';

export const SubHeader = ({children, heading, itemsCount}) => {
  return (
    <Row className='justify-content-between align-items-center sticky-top bg-light'>
      <Col xs='auto'>
        <Row className='align-items-end'>
          <Col>
            <h1>{heading}</h1>
          </Col>
          <Col>
            {itemsCount? <h5>{itemsCount}</h5> : null}
          </Col>
        </Row>
      </Col>
      <Col xs='auto' >
        {children}
      </Col>
    </Row>
  )
}
