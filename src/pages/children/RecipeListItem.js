import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Row } from 'reactstrap';

//asests
import placeholder from '../../images/food-placeholder.png';

//components
import { IconsRow } from '../../components/helpers/IconsRow';

//styles
const CardTitleStyles = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
  whiteSpace: 'nowrap'
}

export const RecipeListItem = ({title, prepTime, sideDish}) => {
  return (
    <Card inverse color='dark'>
      <CardImg
        alt="Card image cap"
        src={placeholder}
        top
        width="100%"
      />
      <CardBody color='primary'>
        <CardTitle style={CardTitleStyles} tag="h5">
          {title}
        </CardTitle>
        <IconsRow content={[
          [prepTime, 'time'],
          [sideDish, 'sideDish']
        ]}/>
      </CardBody>
    </Card>
  )
}

