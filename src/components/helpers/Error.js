import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export const Error = ({message}) => {

  const navigate = useNavigate();

  return (
    <>
      <div>{message}</div>
      <Button onClick={()=> navigate('/')}>Naspäť domov</Button>
    </>
  )
}
