import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../api";

//components
import { SubHeader } from '../components/general/SubHeader';
import { ButtonList } from '../components/helpers/ButtonList';
import { Loading } from '../components/helpers/Loading';
import { Error } from '../components/helpers/Error';

//children
import { RecipeForm } from '../components/general/RecipeForm';

export const EditRecipe = () => {

  const { slug } = useParams();

  //default states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  //component states
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState(null)
  const [definedValues, setDefinedValues] = useState(null);
  const [titleInput, setTitleInput] = useState('');

  //handle title change
  const handleTitleInput = (newTitle) => {
    setTitleInput(newTitle);
  }

  //load recipe from api
  useEffect( () => {
    setLoading(true);
    api.get(`/recipes/${slug}`)
    .then((response)=> setRecipe(response.data))
    .catch((error) =>(setError(error)))
    .finally(()=> {
      setLoading(false);
    });
  }, [slug])

  //update default values with data
  useEffect(() => {
    //definujeme ktore values sa budu posielat ako default na main form
    const valuesList = [
      'preparationTime',
      'servingCount',
      'sideDish',
      'directions'
    ];
    if (recipe) {
      setIngredients(recipe.ingredients);
      const {title} = recipe;
      setTitleInput(title);
      //filtrujeme recipe, tak aby sme posielali len definovane values do children
      const recipeArray = Object.entries(recipe);
      const filtered = recipeArray.filter(([item, value]) =>
        valuesList.includes(item) && value
      );
      const filteredValues = Object.fromEntries(filtered);
      setDefinedValues(filteredValues);
    }
  }, [recipe])

  return (
    <>
      <SubHeader heading={titleInput ? titleInput: 'Nový recept'}>
        <ButtonList Save Cancel/>
      </SubHeader>
      {error? <Error message={error}/> : null}
      {loading? <Loading/> : (
        <RecipeForm
          definedValues={definedValues}
          recipeId={recipe && recipe._id}
          defaultIngredients={ingredients}
          onTitleInput={handleTitleInput}
          titleInput={titleInput}
        />
      )}
    </>
  )
}
