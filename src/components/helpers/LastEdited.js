import React from 'react';

export const LastEdited = ({date}) => {
  const editDate = new Date(date);
  return (
    <>
      <span>Naposledy upravené: </span>
      <p>{editDate.getMonth()+'. ' + (editDate.getDate()+1) + '. '+editDate.getFullYear()}</p>
    </>
  )
}
