import React, { useState } from 'react';

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

  const defaultValues = {
    title: '', //required field for user
    preparationTime: '',
    servingCount: '',
    sideDish: '',
    directions: '',
    ingredients: [{
        amount: '',
        amountUnit: '',
        isGroup: false,
        name: '',
    }]
  }


  return (
    <>
      <SubHeader heading={titleInput ? titleInput: 'Nový recept'}>
        <ButtonList Save CancelHome/>
      </SubHeader>
      <RecipeForm
        defaultValues={defaultValues}
        onTitleInput={handleTitleInput}
        titleInput={titleInput}
      />
    </>
  )
}
