import React from 'react';
import { Controller } from 'react-hook-form';
import { FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap';

export const RecipeFormDirections = ({control, errors}) => {
  return (
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
  )
}
