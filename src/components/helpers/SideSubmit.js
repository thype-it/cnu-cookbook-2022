import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { InputGroupText } from 'reactstrap'

export const SideSubmit = ({form, active}) => {
  return (
    <InputGroupText>
      <AiOutlinePlusCircle
        size='25'
        style={active? {color:'grey'}: null}
      />
      <input
        type='submit'
        form={form}
        value='Pridať'
        disabled={active}
        style={{
          border: 0,
          background: 'rgba(0,0,0,0)'
        }}
      />
    </InputGroupText>
  )
}
