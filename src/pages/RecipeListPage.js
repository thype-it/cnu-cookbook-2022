import { useEffect, useState } from "react";
import { api } from "../api";

//components
import { Loading } from "../components/helpers/Loading";
//children
import { RecipeList } from "./children/RecipeList";

//template
export function RecipeListPage() {

  //states
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState();

  //load recipes from API
  useEffect( () => {
    setLoading(true);
    api.get('/recipes')
    .then( (response) => setRecipes(response.data))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Recepty</h1>

      {loading? <Loading /> : (


      <RecipeList recipes={recipes}/>



      ) }
      {/* REMOVE CONSOLE LOG */}
      {console.log(recipes)}
    </>
  )
}
