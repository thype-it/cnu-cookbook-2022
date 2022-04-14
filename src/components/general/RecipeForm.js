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
      preparationTime: '',
      servingCount: '',
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
      navigate(
        `/recipe/${response.data.slug}`,
        {state:{alert:'newRecipe'}
      })
    })
    .catch((error) => console.log(error))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RecipeFormTitle control={control} errors={errors}/>
      <Row>
        <Col>
          <h4>Základné údaje</h4>
          <RecipeFormBasics  control={control} errors={errors}/>
        </Col>
        <Col>
          <RecipeFormIngredients/>
        </Col>
        <Col>
          <h4>Postup</h4>
          <RecipeFormDirections control={control} errors={errors}/>
        </Col>
      </Row>
        <input type='submit'/>
    </Form>
  )
}
