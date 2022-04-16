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

export const RecipeForm = ({definedValues, defaultIngredients, onTitleInput, titleInput}) => {

  const navigate = useNavigate();

  //states and refs
  const [ingredients, setIngredients] = useState(null);
  const newOrderRef = useRef();
  const previousOrderRef = useRef();

  //registering main form
  const { handleSubmit, control, formState: { errors }, setValue } = useForm({
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
      name: ''
    }
  })

  //create new recipe on main form submit
  const onSubmit = (data) => {
    if (definedValues){
      //post edited recipe
    }
    data.ingredients = ingredients;
    api.post('/recipes', data)
    .then((response) => {
      navigate(
        `/recipe/${response.data.slug}`,
        {state:{alert:'newRecipe'}
      })
    })
    .catch((error) => console.log(error))
  }

  //add new ingredient object to data on ingredients form submit
  const submitIngredients = (data) => {

    //check if user changed order and update data
    if (newOrderRef.current && newOrderRef.current !== previousOrderRef.current) {
      setIngredients(newOrderRef.current)
      newOrderRef.current = null;
    }
    data.id = "" + Date.now(); //generate id for draggable
    data.isGroup = false;
    ingredients? //update ingredietns on submit
    setIngredients(ingredients => ingredients.concat(data)):
    setIngredients([data]);
    console.log(ingredients);
    reset(); //reset form
  }

  //upload existing values when editing recipe
  useEffect(() => {
    if (definedValues) {
      const recipeArray = Object.entries(definedValues);
      recipeArray.map(([item, value]) =>
        setValue(item, value)
      )
    }
  }, [definedValues, setValue])

  //upload existing ingredients when editing recipe
  useEffect(()=> {
    setIngredients(defaultIngredients);
  }, [defaultIngredients])

  //keep track if child component changed order of ingredients
  useEffect(()=> {
    previousOrderRef.current = ingredients;
  },[ingredients])

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
