import { useEffect, useState } from "react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";

//components
import { Loading } from "../components/helpers/Loading";
import { Error } from "../components/helpers/Error";
import { SubHeader } from "../components/general/SubHeader";
import { ButtonList } from "../components/helpers/ButtonList";
import { IconsRow } from "../components/helpers/IconsRow";
import { RecipeDetail } from "./children/RecipeDetail";
import { DeleteModal } from "../components/helpers/DeleteModal";


//template
export function RecipeDetailPage() {

  //states genereal
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recipe, setRecipe] = useState([]);
  //states delete
  const [isDelete, setDelete] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();

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

  //delete recipe from api
  useEffect( () => {
    if (isDelete) {
      api.delete(`/recipes/${recipe._id}`)
      .then(navigate('/', {state: {delete: true}}))
      .catch((error) => setError(error))
    }
  }, [isDelete, navigate, recipe._id])


  //open modal delete window after clicking button in subheader
  const handleShowDelete = (data) => {
    setShowDeleteModal(data)
  }

  //close modal delete window after canceling inside window
  const handleCancelDelete = (data) => {
    setShowDeleteModal(false)
  }

  //activate delete when aproved by user in modal delete window
  const deleteRecipe = (data) => {
    setDelete(data)
  }



  return (
    <>
      <SubHeader heading={recipe.title}>
        <ButtonList Edit Delete onDelete={handleShowDelete}/>
      </SubHeader>
      <IconsRow content={[
          [recipe.preparationTime, 'time'],
          [recipe.sideDish, 'sideDish']
      ]}/>
      {error? <Error message={error}/> : null}
      {loading? <Loading/> : (
        <>
          <DeleteModal
            title={recipe.title}
            show={showDeleteModal}
            onCancel={handleCancelDelete}
            onDelete={deleteRecipe}
          />
          <RecipeDetail recipe={recipe}/>
        </>
      )}
    </>
  )
}
