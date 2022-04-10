import React from 'react';

//components
import * as Buttons from './ButtonListItems';

export const ButtonList = ({Edit, NewRecipe, Save, Delete}) => {
  return (
    <>
      {NewRecipe && <Buttons.NewRecipe/>}
      {Save && <Buttons.Save/>}
      {Edit && <Buttons.Edit/>}
      {Delete && <Buttons.Delete/>}
    </>
  )
}