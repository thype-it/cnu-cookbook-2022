import React from 'react';
import { Col, Form, FormFeedback, FormGroup, FormText, Input, Row } from 'reactstrap';
import { useForm, Controller, FormProvider } from 'react-hook-form';

//components
import { RecipeFormTitle } from '../form/RecipeFormTitle';
import { RecipeFormBasics } from '../form/RecipeFormBasics';
import { RecipeFormIngredients } from '../form/RecipeFormIngredients';
import { RecipeFormDirections } from '../form/RecipeFormDirections';

export const RecipeForm = () => {

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      title: '', //required field for user
      preparationTime: Number,
      servingCount: Number,
      sideDish: String,
      directions: String,
      ingredients: [{
          amount: Number,
          amountUnit: String,
          isGroup: Boolean,
          name: String,
      }]
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RecipeFormTitle control={control} errors={errors}/>
      <Row>
        <Col>
          <RecipeFormBasics/>
        </Col>
        <Col>
          <RecipeFormIngredients/>
        </Col>
        <Col>
          <RecipeFormDirections/>
        </Col>
      </Row>
        <input type='submit'/>
    </Form>
  )
}
