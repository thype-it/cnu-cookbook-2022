import { useEffect, useState } from "react";
import { api } from "../api";
import { useLocation } from 'react-router-dom'

//components
import { Loading } from "../components/helpers/Loading";
import { Error } from "../components/helpers/Error";
import { SubHeader } from "../components/general/SubHeader";
import { ButtonList } from "../components/helpers/ButtonList";
//children
import { RecipeList } from "./children/RecipeList";
import { Alert } from "reactstrap";

//template
export function RecipeListPage() {

  //states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [recipes, setRecipes] = useState([]);


  //load recipes from API
  useEffect( () => {
    setLoading(true);
    api.get('/recipes')
    .then((response) => setRecipes(response.data))
    .catch((error) => setError(true))
    .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <SubHeader heading='Recept' itemsCount={recipes.length}>
        <ButtonList NewRecipe />
      </SubHeader>
      {error? <Error/> : null}
      {loading? <Loading /> : (

      <RecipeList recipes={recipes}/>

      ) }
    </>
  )
}
