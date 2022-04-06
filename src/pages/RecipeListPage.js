import { useEffect, useState } from "react";
import { api } from "../api";
import { Loading } from "../components/helpers/Loading";

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

      <Loading/>

      {loading? <Loading /> : null}

      {console.log(recipes)}
    </>
  )
}
