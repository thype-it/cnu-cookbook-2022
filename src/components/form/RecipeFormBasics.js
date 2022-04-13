import React from 'react'
import { Controller } from 'react-hook-form'
import { FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap'

export const RecipeFormBasics = ({control, errors}) => {
  return (
    <>
      <FormGroup>
        <Label for='prepTime'>
          Doba prípravy
        </Label>
        <InputGroup>
          <Controller
            name='preparationTime'
            control={control}
            render={({ field }) =>
            <Input
              type='number'
              min='1'
              id='prepTime'
              {...field}
            />}
          />
          <InputGroupText>min</InputGroupText>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <Label for='portionAmount'>
          Počet porcií
        </Label>
        <Controller
          name='servingCount'
          control={control}
          render={({ field }) =>
          <Input
            type='number'
            id='portionAmount'
            min='1'
            {...field}
          />}
        />
      </FormGroup>

      <FormGroup>
        <Label for='sideDish'>
          Príloha
        </Label>
        <Controller
          name='sideDish'
          control={control}
          rules={{
            minLength: {
              value: 3,
              message: "Minimálny počet znakov je 3."
            }
          }}
          render={({ field, fieldState:{invalid} }) =>
          <Input
            id='sideDish'
            {...field}
            invalid={invalid}
          />}
        />
        <FormFeedback>
          {errors.sideDish?.message}
        </FormFeedback>
      </FormGroup>
    </>
  )
}
