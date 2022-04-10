import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { AiOutlineSave, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Button } from 'reactstrap';


export const NewRecipe = () => {
  return (
    <Button color='secondary' outline className='ml-3 mr-3'>
      <GiKnifeFork/> vytvoriť recept
    </Button>
  )
}
export const Save = () => {
  return (
    <Button color='success' outline>
      <AiOutlineSave/> uložiť
    </Button>
  )
}
export const Edit = () => {
  return (
    <Button color='secondary' outline>
      <AiOutlineEdit/> upraviť
    </Button>
  )
}
export const Delete = () => {
  return (
    <Button color='danger' outline>
      <AiOutlineDelete/> odstrániť
    </Button>
  )
}
