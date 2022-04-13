import React from 'react';

//components
import { SubHeader } from '../components/general/SubHeader';
import { ButtonList } from '../components/helpers/ButtonList';

//children
import { RecipeForm } from '../components/general/RecipeForm';

export const CreateRecipe = () => {
  return (
    <>
      <SubHeader heading='Nový recept'>
        <ButtonList Save/>
      </SubHeader>
      <RecipeForm/>
    </>
  )
}
