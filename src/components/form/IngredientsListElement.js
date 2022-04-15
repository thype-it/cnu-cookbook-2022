import React from 'react'
import { AiOutlineDrag } from 'react-icons/ai';
import { Col, Row } from 'reactstrap'

export const IngredientsListElement = ({contents, children}) => {
  const {amount, amountUnit, name} = contents;
  return (
    <Row>
      <Col xs='auto' className='d-flex align-items-center'>
        {children}
      </Col>
      <Col>
        {amount}
      </Col>
      <Col>
        {amountUnit}
      </Col>
      <Col>
        {name}
      </Col>
      <Col xs='auto' className='d-flex align-items-center'>
        <AiOutlineDrag size='18'/>
      </Col>
    </Row>
  )
}
