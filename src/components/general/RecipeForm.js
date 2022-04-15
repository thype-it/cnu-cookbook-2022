import React, { useState } from 'react';
import { Col, Form, FormFeedback, FormGroup, FormText, Input, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { api } from '../../api';
import { useNavigate } from 'react-router-dom';

//components
import { RecipeFormTitle } from '../form/RecipeFormTitle';
import { RecipeFormBasics } from '../form/RecipeFormBasics';
import { RecipeFormIngredients } from '../form/RecipeFormIngredients';
import { RecipeFormDirections } from '../form/RecipeFormDirections';

export const RecipeForm = ({onTitleInput, titleInput}) => {

  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([{}]);

  //registering main form
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      title: '', //required field for user
      preparationTime: '',
      servingCount: '',
      sideDish: '',
      directions: '',
      ingredients: [{
          amount: '',
          amountUnit: '',
          isGroup: false,
          name: '',
      }]
    }
  });

  //registering ingredients form
  const { handleSubmit: handleSubmitIng, control: controlIng, reset} = useForm({
    defaultValues: {
      amount: '',
      amountUnit: '',
      name: ''
    }
  })

  //create new recipe on main form submit
  const onSubmit = (data) => {
    console.log(data);
    // api.post('/recipes', data)
    // .then((response) => {
    //   navigate(
    //     `/recipe/${response.data.slug}`,
    //     {state:{alert:'newRecipe'}
    //   })
    // })
    // .catch((error) => console.log(error))
  }

  //add new ingredient obejct to data on ingredients form submit
  const submitIngredients = (data) => {
    console.log(data);

    setIngredients(ingredients => ingredients.concat(data))

    console.log(ingredients);
    reset();
  }

  //forms template
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RecipeFormTitle
          control={control}
          errors={errors}
          onTitleInput={onTitleInput}
          titleInput={titleInput}
        />
        <Row>
          <Col>
            <h4>Základné údaje</h4>
            <RecipeFormBasics  control={control} errors={errors}/>
          </Col>
          <Col>
            <h4>Ingrediencie</h4>
            <RecipeFormIngredients control={controlIng} reset={reset}/>
          </Col>
          <Col>
            <h4>Postup</h4>
            <RecipeFormDirections control={control}/>
          </Col>
        </Row>
          <input type='submit'/>
      </Form>
      <Form id='formIngredients' onSubmit={handleSubmitIng(submitIngredients)}></Form>
    </>
  )
}
