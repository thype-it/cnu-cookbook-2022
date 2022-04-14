import React, { useEffect, useState } from 'react';

//components
import { SubHeader } from '../components/general/SubHeader';
import { ButtonList } from '../components/helpers/ButtonList';

//children
import { RecipeForm } from '../components/general/RecipeForm';

export const CreateRecipe = () => {

  const [titleInput, setTitleInput] = useState('')
  const handleTitleInput = (newTitle) => {
    setTitleInput(newTitle);
  }


  return (
    <>
      <SubHeader heading={titleInput ? titleInput: 'Nový recept'}>
        <ButtonList Save/>
      </SubHeader>
      <RecipeForm onTitleInput={handleTitleInput} titleInput={titleInput}/>
    </>
  )
}
