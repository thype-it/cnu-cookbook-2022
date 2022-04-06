import React from 'react'
import { Spinner, Row } from 'reactstrap'

export const Loading = () => {
  return (
    <Row className='justify-content-center'>
      <Spinner
        color="primary"
        size=""
      >
        Loading...
      </Spinner>
    </Row>
  )
}
