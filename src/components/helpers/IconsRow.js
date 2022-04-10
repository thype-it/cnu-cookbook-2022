import React from 'react';
import { Row, Col } from 'reactstrap';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiDish } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go'

//set general icon size
const iconsSize = 23;

//list of accepted icon types
const iconTypes = new Map([
  ['time', <AiOutlineFieldTime size={iconsSize}/>],
  ['sideDish', <BiDish size={iconsSize}/>]
]);

//styles //doplnit responzivne spravanie
const textStyles = {

}

//time convert function
const timeConvert = (n) => {
  let hours = (n / 60);
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return (
    (rhours? rhours + "h " : "") +
    (rminutes? rminutes + "m" : "")
  );
}

//icon with text
const IconText = ({content, icon}) => {
  if (icon === 'time') content = timeConvert(content);
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
          <div key={i}>
            {i > 0 && <GoPrimitiveDot/>}
            <IconText key={i} content={item[0]} icon={item[1]}/>
          </div>
        )}
      </Col>
    </Row>
  )
}
