import React from 'react';
import { Col, Form, FormFeedback, FormGroup, FormText, Input, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { api } from '../../api';
import { useNavigate } from 'react-router-dom';

//components
import { RecipeFormTitle } from '../form/RecipeFormTitle';
import { RecipeFormBasics } from '../form/RecipeFormBasics';
import { RecipeFormIngredients } from '../form/RecipeFormIngredients';
import { RecipeFormDirections } from '../form/RecipeFormDirections';

export const RecipeForm = () => {

  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      title: '', //required field for user
      preparationTime: null,
      servingCount: null,
      sideDish: '',
      directions: '',
      ingredients: [{
          amount: null,
          amountUnit: '',
          isGroup: null,
          name: '',
      }]
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    api.post('/recipes', data)
    .then((response) => {
      console.log(response);
      navigate('/', {state:{alert:'newRecipe'}})
    })
    .catch((error) => console.log(error))
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
