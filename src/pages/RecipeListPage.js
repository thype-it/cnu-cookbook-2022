import { useEffect, useState } from "react";
import { api } from "../api";

export function RecipeListPage() {

  //states
  const [recipes, setRecipes] = useState();

  //load recipes from API
  useEffect( () => {
    api.get('/recipes')
    .then( (response) => setRecipes(response.data))
  }, []);

  return (
    <>
      <h1>Recepty</h1>
      {console.log(recipes)}
    </>
  )
}
