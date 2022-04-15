import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { Badge, UncontrolledTooltip } from 'reactstrap'

export const InfoBadge = ({text, href, classes, toolTip, toolID}) => {
  return (
    <>
      <AiOutlineQuestionCircle/>{" "}
      <Badge
        color='info'
        href={href}
        className={classes}
      >
        {toolTip?
          <>
            <span id={toolID}>
              {text}
            </span>
            <UncontrolledTooltip
              target={toolID}
            >
              Upravte poradie ingredincií systémom Drag and Drop.
              Jednoducho potiahnite jednu z ingredincíí na želanú pozíciu.
            </UncontrolledTooltip>
          </>
        :text}
      </Badge>
    </>
  )
}
