import React from 'react';
import ReactMarkDown from 'react-markdown';

export const RecipeDetailProcess = ({process}) => {
  return (
    <>
      <ReactMarkDown>{process}</ReactMarkDown>
    </>
  )
}
