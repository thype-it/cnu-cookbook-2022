import { useEffect, useState } from "react";
import { api } from "../api";
import { useParams } from "react-router-dom";

//components
import { Loading } from "../components/helpers/Loading";
import { Error } from "../components/helpers/Error";
import { SubHeader } from "../components/general/SubHeader";
import { ButtonList } from "../components/helpers/ButtonList";
import { IconsRow } from "../components/helpers/IconsRow";
import { RecipeDetail } from "./children/RecipeDetail";


//template
export function RecipeDetailPage() {

  //states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [recipe, setRecipe] = useState([]);

  const [isDelete, setDelete] = useState(false);

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

  //delete recipe from api
  if (isDelete) {


    // api.delete(`/recipes/${slug}`);

  }

  console.log(recipe._id);

  return (
    <>
      <SubHeader heading={recipe.title}>
        <ButtonList Edit Delete/>
      </SubHeader>
      <IconsRow content={[
          [recipe.preparationTime, 'time'],
          [recipe.sideDish, 'sideDish']
      ]}/>
      {error? <Error/> : null}
      {loading? <Loading/> : (
        <RecipeDetail recipe={recipe}/>
      )}
    </>
  )
}
