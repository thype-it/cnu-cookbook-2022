import React from 'react';
import { Col, Row } from 'reactstrap';

//children
import { RecipeDetailIngredients } from './RecipeDetailIngredients';
import { RecipeDetailProcess } from './RecipeDetailProcess';

export const RecipeDetail = ({recipe}) => {
  return (
    <Row>
      <Col>
        <RecipeDetailIngredients ingredients={recipe.ingredients} servings={recipe.servingCount}/>
      </Col>
      <Col>
        <RecipeDetailProcess process={recipe.directions}/>
      </Col>
    </Row>
  )
}
