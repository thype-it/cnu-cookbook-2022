import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Input, Label, Row } from 'reactstrap';
import { api } from '../../api';
import { RecipeListItem } from '../../pages/children/RecipeListItem';

export const SearchRecipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [isSearch, setSearch] = useState(false);

  useEffect( () => {
    if (isSearch)
    api.get('/recipes')
    .then((response)=> setRecipes(response.data))
  }, [isSearch])

  const handleSearch = (e) => {
    setSearch(true);
    setQuery(e.target.value);
  };

  const filteredRecpies = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Label>Názov receptu</Label>
      <Input
        className='mb-2'
        onChange={handleSearch}
      />
      <Row className='mt-4'>
        {filteredRecpies.map((recipe, i) =>
          <Col key={recipe._id} xs='6'className='mb-3'>
            <Link
              style={{textDecoration:'none'}}
              to={`/recipe/${recipe.slug}`}
            >
              <RecipeListItem
                title={recipe.title}
                prepTime={recipe.preparationTime}
                noImg
              />
            </Link>
          </Col>
        )}
      </Row>
    </>
  )
}
