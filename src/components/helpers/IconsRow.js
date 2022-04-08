import React from 'react';
import { Row, Col } from 'reactstrap';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiDish } from 'react-icons/bi';

//set general icon size
const iconsSize = 23;

//list of accepted icon types
const iconTypes = new Map([
  ['time', <AiOutlineFieldTime size={iconsSize}/>],
  ['sideDish', <BiDish size={iconsSize}/>]
]);

//styles
const textStyles = {

}

//icon with text
const IconText = ({content, icon}) => {
  return (
    <>{iconTypes.get(icon)} <small style={textStyles}>{content}</small></>
  )
}

export const IconsRow = ({content}) => {
  return (
    <Row >
      <Col className='d-flex align-items-center'>
        {[...content].map((item, i) =>
          item[0] &&
          <>
            {i > 0 && <small>.</small>}
            <IconText key={i} content={item[0]} icon={item[1]}/>
          </>
        )}
      </Col>
      {/* {content.length > 0 && '.'} */}
    </Row>
  )
}
