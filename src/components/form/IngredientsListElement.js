import React from 'react'
import { Col, Row } from 'reactstrap'

export const IngredientsListElement = ({contents}) => {
  const {amount, amountUnit, name} = contents;
  return (
    <Row>
      <Col>
        {amount}
      </Col>
      <Col>
        {amountUnit}
      </Col>
      <Col>
        {name}
      </Col>
    </Row>
  )
}
