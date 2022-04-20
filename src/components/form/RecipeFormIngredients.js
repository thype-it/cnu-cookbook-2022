import React from 'react';
import { Controller, useFormState } from 'react-hook-form';
import { Col, FormGroup, Input, InputGroup, Label, Row } from 'reactstrap';
import { SideSubmit } from '../helpers/SideSubmit';

export const RecipeFormIngredients = ({control}) => {

  const { dirtyFields } = useFormState({control})

  return (
    <>
      <Row>
        <Label>Pridať ingredienciu</Label>
        <Col>
          <FormGroup>
            <Controller
              name='amount'
              control={control}
              render={({field})=>
              <Input
                {...field}
                type='number'
                min='0'
                placeholder='Množstvo'
                form='formIngredients'
              />}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Controller
              name='amountUnit'
              control={control}
              render={({field})=>
              <Input
                {...field}
                placeholder='Jednotka'
                form='formIngredients'
              />}
            />
          </FormGroup>
        </Col>
      </Row>
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
          <SideSubmit form='formIngredients' active={!dirtyFields.name}/>
        </InputGroup>
      </FormGroup>
    </>
  )
}
