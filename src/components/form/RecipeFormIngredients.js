import React, { useState } from 'react';
import { Controller, useFormState } from 'react-hook-form';
import { Col, Form, FormFeedback, FormGroup, FormText, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap';

export const RecipeFormIngredients = ({control}) => {

  const { dirtyFields } = useFormState({control})

  return (
    <>
      <Row>
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
          <InputGroupText>
            <input
              type='submit'
              form='formIngredients'
              value='pridaj'
              disabled={!dirtyFields.name}
            />
          </InputGroupText>
        </InputGroup>
      </FormGroup>
    </>
  )
}
