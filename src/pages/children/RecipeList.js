import React from 'react'
import { Col, Row } from 'reactstrap';
import { RecipeListItem } from './RecipeListItem';


export const RecipeList = ({recipes}) => {
  return (
    <Row>
      {recipes?.map( (recipe) =>
        <Col
          className='mb-4'
          key={recipe._id}
          lg='3'
          md='4'
          sm='6'
        >
          <RecipeListItem
            title={recipe.title}
            prepTime={recipe.preparationTime}
            sideDish={recipe.sideDish}
          />
        </Col>
      )}
    </Row>
  )
}
