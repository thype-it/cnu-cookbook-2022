import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { AiOutlineSave, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md'
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export const NewRecipe = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/create')
  }
  return (
    <Button
      color='secondary'
      outline
      className='ml-3 mr-3'
      onClick={handleClick}
    >
      <GiKnifeFork/> vytvoriť recept
    </Button>
  )
}

export const Save = ({form}) => {
  return (
    <Button
      color='success'
      outline
      form={form? form: 'formRecipe'}
    >
      <AiOutlineSave/> uložiť
    </Button>
  )
}

export const Edit = ({onEdit}) => {
  const handleClick = () => {
    onEdit(true);
  }
  return (
    <Button color='secondary' outline onClick={handleClick}>
      <AiOutlineEdit/> upraviť
    </Button>
  )
}

export const Delete = ({onDelete}) => {

  const handleClick = () => {
    onDelete(true);
  }

  return (
    <Button color='danger' outline onClick={handleClick}>
      <AiOutlineDelete/> odstrániť
    </Button>
  )
}

export const Cancel = ({home}) => {

  const navigate = useNavigate()
  const whereTo = home? '/': -2;
  const handleClick = () => {
    navigate(whereTo)
  }

  return (
    <Button color='danger' outline onClick={handleClick}>
      <MdOutlineCancel/> zrušiť
    </Button>
  )
}
