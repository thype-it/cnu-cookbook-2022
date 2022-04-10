import React from 'react';
import { Col, Row } from 'reactstrap';

//children
import { RecipeDetailIngredients } from './RecipeDetailIngredients';
import { RecipeDetailProcess } from './RecipeDetailProcess';

export const RecipeDetail = ({recipe}) => {
  console.log(recipe);
  return (
    <Row>
      <Col>
        <RecipeDetailIngredients ingredients={recipe.ingredients}/>
      </Col>
      <Col>
        <RecipeDetailProcess/>
      </Col>
    </Row>
  )
}
