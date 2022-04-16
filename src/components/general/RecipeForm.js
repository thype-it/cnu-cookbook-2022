import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { api } from '../../api';
import { useNavigate } from 'react-router-dom';

//components
import { RecipeFormTitle } from '../form/RecipeFormTitle';
import { RecipeFormBasics } from '../form/RecipeFormBasics';
import { RecipeFormIngredients } from '../form/RecipeFormIngredients';
import { RecipeFormDirections } from '../form/RecipeFormDirections';
import { DraggableList } from './DraggableList';

export const RecipeForm = ({defaultValues, onTitleInput, titleInput}) => {

  const navigate = useNavigate();

  //states and refs
  const [ingredients, setIngredients] = useState(null);
  const newOrderRef = useRef();
  const previousOrderRef = useRef();

  //registering main form
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues
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
    data.ingredients = ingredients;
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

  //keep track if child component changed ordder of ingredients
  useEffect(()=> {
    previousOrderRef.current = ingredients;
  },[ingredients])

  //add new ingredient object to data on ingredients form submit
  const submitIngredients = (data) => {

    //check if user changed order and update data
    if (newOrderRef.current && newOrderRef.current !== previousOrderRef.current) {
      setIngredients(newOrderRef.current)
      newOrderRef.current = null;
    }

    data.id = "" + Date.now(); //generate id for draggable
    ingredients? //update ingredietns on submit
    setIngredients(ingredients => ingredients.concat(data)):
    setIngredients([data])
    reset(); //reset form
  }

  //handle deletion of proposed ingredietns
  const deleteIngredient = (deleteId) => {
    setIngredients(ingredients.filter(i => i.id !== deleteId));
  }

  //forms template
  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        id='formRecipe'
      >
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
            {ingredients?
            <DraggableList
              contents={ingredients}
              removeItem={deleteIngredient}
              ref={newOrderRef}
            />:
            <p>este nic</p>}
            <RecipeFormIngredients control={controlIng} reset={reset}/>
          </Col>
          <Col>
            <h4>Postup</h4>
            <RecipeFormDirections control={control}/>
          </Col>
        </Row>
      </Form>
      <Form id='formIngredients' onSubmit={handleSubmitIng(submitIngredients)}></Form>
    </>
  )
}
