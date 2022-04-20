import React from 'react';
import { Alert, Col, Row } from 'reactstrap';

//components
import { LastEdited } from '../../components/helpers/LastEdited';

//children
import { RecipeDetailIngredients } from './RecipeDetailIngredients';
import { RecipeDetailProcess } from './RecipeDetailProcess';

export const RecipeDetail = ({recipe}) => {
  return (
    <Row>
      <Col sm='3' >
        {
          !!recipe.ingredients?.length?
          <RecipeDetailIngredients ingredients={recipe.ingredients} servings={recipe.servingCount}/>:
          <Alert color="primary" >
              Žiadne ingrediencie
          </Alert>
        }

      </Col>
      <Col>
        {
          recipe.directions?
          <RecipeDetailProcess process={recipe.directions}/>:
          <Alert color="primary" >
            Žiadny postup
          </Alert>
        }
        <LastEdited date={recipe.lastModifiedDate}/>
      </Col>
    </Row>
  )
}
