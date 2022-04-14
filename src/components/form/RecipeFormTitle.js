import React, { useRef } from 'react'
import { Controller } from 'react-hook-form'
import { FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap'

export const RecipeFormTitle = ({control, errors, onTitleInput, titleInput}) => {

  return (
    <FormGroup>
      <Label for='recipeFormTitle'>
        Názov *
      </Label>
      <Controller
        name='title'
        control={control}
        rules = {{
          required: 'Prosím zadajte názov.',
          minLength: {
            value: 3,
            message: "Minimálny počet znakov je 3."
          }
        }}
        render={({
          field,
          fieldState:{ invalid, isTouched},
        }) =>
          <Input
            id='recipeFormTitle'
            placeholder='povinný údaj'
            {...field}
            onChange={e => onTitleInput(e.target.value)}
            value={titleInput}
            invalid={invalid}
            valid={!invalid && isTouched}
          />}
        />
      <FormFeedback>
        {errors.title?.message}
      </FormFeedback>
    </FormGroup>
  )
}
