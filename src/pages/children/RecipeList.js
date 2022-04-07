import React from 'react'
import { CardColumns } from 'reactstrap';
import { RecipeListItem } from './RecipeListItem';


export const RecipeList = ({recipes}) => {
  return (
    <CardColumns>
      <RecipeListItem recipes={recipes}/>
    </CardColumns>
  )
}
