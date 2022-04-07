import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

//asests
import placeholder from '../../images/food-placeholder.png';

export const RecipeListItem = ({recipes}) => {
  return (
    <Card>
      <CardImg
        alt="Card image cap"
        src={placeholder}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
      </CardBody>
    </Card>
  )
}
