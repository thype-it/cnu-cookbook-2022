import React from 'react';
import { Controller } from 'react-hook-form';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Badge, Col, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap';
import { InfoBadge } from '../helpers/InfoBadge';

export const RecipeFormDirections = ({control}) => {
  return (
    <>
      <FormGroup>
        <Controller
          name='directions'
          control={control}
          render={({ field }) =>
          <Input
            type='textarea'
            rows='20'
            {...field}
          />}
        />
      </FormGroup>
      <InfoBadge
        text='Návod na Markdown'
        href='https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet'
      />
    </>
  )
}
