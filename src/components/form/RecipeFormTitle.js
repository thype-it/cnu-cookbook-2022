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
          formState,
          fieldState:{ invalid },
        }) =>
          <Input
            id='recipeFormTitle'
            placeholder='povinný údaj'
            {...field}
            onChange={(e)=>{
              field.onChange(e.target.value)
              onTitleInput(e.target.value)
            }}
            value={titleInput}
            invalid={invalid}
            valid={!invalid && formState.isSubmitted }
          />}
        />
      <FormFeedback>
        {errors.title?.message}
      </FormFeedback>
    </FormGroup>
  )
}
