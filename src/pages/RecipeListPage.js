import { useEffect, useState } from "react";
import { api } from "../api";

//components
import { Loading } from "../components/helpers/Loading";
import { Error } from "../components/helpers/Error";
import { SubHeader } from "../components/general/SubHeader";
//children
import { RecipeList } from "./children/RecipeList";

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
    .then( (response) => setRecipes(response.data))
    .catch((error) => setError(true))
    .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <SubHeader heading='Recepty' itemsCount={recipes.length}/>

      {error? <Error/> : null}
      {loading? <Loading /> : (

        <RecipeList recipes={recipes}/>





      ) }

      {/* REMOVE CONSOLE LOG */}
      {console.log(recipes.length)}
    </>
  )
}
