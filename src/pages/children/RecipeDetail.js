import React from 'react';
import { Col, Row } from 'reactstrap';

//components
import { LastEdited } from '../../components/helpers/LastEdited';

//children
import { RecipeDetailIngredients } from './RecipeDetailIngredients';
import { RecipeDetailProcess } from './RecipeDetailProcess';

export const RecipeDetail = ({recipe}) => {
  return (
    <Row>
      <Col sm='3' >
        <RecipeDetailIngredients ingredients={recipe.ingredients} servings={recipe.servingCount}/>
      </Col>
      <Col>
        <RecipeDetailProcess process={recipe.directions}/>
        <LastEdited date={recipe.lastModifiedDate}/>
      </Col>
    </Row>
  )
}
