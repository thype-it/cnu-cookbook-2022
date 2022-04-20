import React from 'react';
import { Controller, useFormState } from 'react-hook-form';
import { FormGroup, Input, InputGroup, Label } from 'reactstrap';
import { SideSubmit } from '../helpers/SideSubmit';

export const RecipeFormGroup = ({control}) => {

  const { dirtyFields } = useFormState({control})

  return (
    <>
      <Label>Pridať skupinu</Label>
      <FormGroup>
        <InputGroup>
          <Controller
            name='name'
            control={control}
            render={({field})=>
            <Input
              {...field}
              placeholder='Názov'
              form='formIngredients'
            />}
          />
          <SideSubmit form='formGroup' active={!dirtyFields.name}/>
        </InputGroup>
      </FormGroup>
    </>
  )
}
