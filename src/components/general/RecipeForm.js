import React, { useEffect, useRef, useState } from 'react';
import { Alert, Col, Form, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { api } from '../../api';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//components
import { RecipeFormTitle } from '../form/RecipeFormTitle';
import { RecipeFormBasics } from '../form/RecipeFormBasics';
import { RecipeFormIngredients } from '../form/RecipeFormIngredients';
import { RecipeFormGroup } from '../form/RecipeFormGroup';
import { RecipeFormDirections } from '../form/RecipeFormDirections';
import { DraggableList } from './DraggableList';

export const RecipeForm = ({
  recipeId,
  definedValues,
  defaultIngredients,
  onTitleInput,
  titleInput
}) => {

  const navigate = useNavigate();

  //states and refs
  const [ingredients, setIngredients] = useState(null);
  const [directions, setDirections] = useState('');
  const newOrderRef = useRef();
  const previousOrderRef = useRef();

  //registering main form
  const { handleSubmit, control, formState: { errors }, setValue, getValues } = useForm({
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
          name: ''
      }]
    }
  });

  //registering ingredients form
  const { handleSubmit: handleSubmitIng, control: controlIng, reset} = useForm({
    defaultValues: {
      amount: '',
      amountUnit: '',
      name: '',
      isGroup: false
    }
  })
  //registering ingredients group form
  const { handleSubmit: handleSubmitGroup, control: controlGroup, reset: resetGroup} = useForm({
    defaultValues: {
      name: '',
      isGroup: true
    }
  })

  //create or edit recipe on main form submit
  const onSubmit = (data) => {
    //check if user changed order and update data
    data.ingredients = newOrderRef.current? newOrderRef.current: ingredients;
    data.ingredients?.map(item => delete item._id) //remove duplicit id
    //post edited recipe
    if (recipeId){//check if editing existing recipe
      api.post(`/recipes/${recipeId}`, data)
      .then((response) => {
        navigate(
          `/recipe/${response.data.slug}`,
          {state:{alert:'edit'}
        })
      })
      .catch((error) => console.log(error))
    }
    //create new recipe
    else{
      api.post('/recipes', data)
      .then((response) => {
        navigate(
          `/recipe/${response.data.slug}`,
          {state:{alert:'newRecipe'}
        })
      })
      .catch((error) => console.log(error))
    }
  }

  //add new ingredient object to data on ingredients form submit
  const submitIngredients = (data) => {

    //check if user changed order and update data
    if (newOrderRef.current && newOrderRef.current !== previousOrderRef.current) {
      setIngredients(newOrderRef.current)
      newOrderRef.current = null;
    }
    data._id = "" + Date.now(); //generate id for draggable
    ingredients? //update ingredietns on submit
    setIngredients(ingredients => ingredients.concat(data)):
    setIngredients([data]);

    data.isGroup? resetGroup(): reset(); //reset form
  }

  //upload existing values when editing recipe
  useEffect(() => {
    if (definedValues) {
      const recipeArray = Object.entries(definedValues);
      recipeArray.map(([item, value]) =>
        setValue(item, value)
      );
      setValue('title', titleInput);
      definedValues.directions && setDirections(definedValues.directions)
    }
    //upload existing ingredients when editing recipe
    if (defaultIngredients){
      setIngredients(defaultIngredients);
    }
  }, [definedValues,defaultIngredients, setValue, getValues, titleInput])

  //keep track if child component changed order of ingredients
  useEffect(()=> {
    previousOrderRef.current = ingredients;
  },[ingredients])

  //handle deletion of proposed ingredietns
  const deleteIngredient = (deleteId) => {
    setIngredients(ingredients.filter(i => i._id !== deleteId));
  }

  //handle input change of directions
  const onDirectionsInput = (data) => {
    setDirections(data)
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
          <Col md='3'>
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
            <Alert color='primary'>Žiadne ingrediencie</Alert>}
            <RecipeFormIngredients control={controlIng} reset={reset}/>
            <RecipeFormGroup control={controlGroup}/>
          </Col>
          <Col md='5'>
            <h4>Postup</h4>
            <RecipeFormDirections
              control={control}
              value={directions}
              onDirectionsInput={onDirectionsInput}
            />
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <h4>Náhľad postupu</h4>
          <ReactMarkdown>{directions}</ReactMarkdown>
        </Col>
      </Row>
      <Form id='formIngredients' onSubmit={handleSubmitIng(submitIngredients)}></Form>
      <Form id='formGroup' onSubmit={handleSubmitGroup(submitIngredients)}></Form>
    </>
  )
}
