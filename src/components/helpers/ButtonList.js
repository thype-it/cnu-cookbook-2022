import React from 'react';

//components
import * as Buttons from './ButtonListItems';

export const ButtonList = ({Edit, onEdit, NewRecipe, Save, Delete, onDelete, Cancel, CancelHome}) => {
  return (
    <>
      {NewRecipe && <Buttons.NewRecipe/>}
      {Save && <Buttons.Save/>}
      {Edit && <Buttons.Edit onEdit={onEdit}/>}
      {Delete && <Buttons.Delete onDelete={onDelete}/>}
      {Cancel && <Buttons.Cancel/>}
      {CancelHome && <Buttons.Cancel home/>}
    </>
  )
}
