import { useEffect, useState } from "react";
import { api } from "../api";
import { useParams } from "react-router-dom";

//components
import { Loading } from "../components/helpers/Loading";
import { Error } from "../components/helpers/Error";


//template
export function RecipeDetailPage() {

  //states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [recipe, setRecipe] = useState([]);

  const { slug } = useParams();

  //load recipe from api
  useEffect( () => {
    setLoading(true);
    api.get(`/recipes/${slug}`)
    .then((response)=> setRecipe(response.data))
    .catch((error) =>(setError(true)))
    .finally(()=> {
      setLoading(false);
    });
  }, [slug])

  return (
    <>
      {error? <Error/> : null}
      {loading? <Loading /> : (

        <h1>recipe</h1>



      )}

    </>
  )
}
