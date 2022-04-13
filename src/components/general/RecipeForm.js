import React from 'react';
import { Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
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
    <>
      <FormProvider>
        <Form>
          <RecipeFormTitle/>
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
        </Form>

      </FormProvider>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Input
            plaintext
            readOnly
            value="Some plain text/ static value"
          />
        </FormGroup>
        <FormGroup>
          <Controller
            name='title'
            control={control}
            rules = {{
              required: 'Prosím zadajte názov.',
              minLength: {
                value: 3,
                message: "Minimálny počet znakov je 3."
              }
            }}
            render={({
              field,
              fieldState:{ invalid, isTouched},
            }) =>
              <Input
                {...field}
                invalid={invalid}
                valid={!invalid && isTouched}
              />}
            />
          <FormFeedback>
            {errors.title?.message}
          </FormFeedback>

          <FormText>daco daco</FormText>
        </FormGroup>
        <FormGroup>
          <Controller
            name='sideDish'
            control={control}
            render={({ field, formState }) => <Input {...field}/>}
          />
          <input type='submit'/>
        </FormGroup>
      </Form>

    </>
  )
}
