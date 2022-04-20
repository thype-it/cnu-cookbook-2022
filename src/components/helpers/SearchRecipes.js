import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Col, Input, Label, Row } from 'reactstrap';
import { api } from '../../api';
import { RecipeListItem } from '../../pages/children/RecipeListItem';

export const SearchRecipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
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
    setFiltered(
      recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
      )
    )
  };



  const filterUnder = (minutes) => {
    setSearch(true);
    setFiltered(
      recipes.filter(recipe =>
        recipe.preparationTime <= minutes
      )
    )
  }

  return (
    <>
    <Label>Čas prípravy do</Label>
    <Row>
      <ButtonGroup>
        <Button onClick={()=>filterUnder(15)}>
          15m
        </Button>
        <Button onClick={()=>filterUnder(30)}>
          30m
        </Button>
        <Button onClick={()=>filterUnder(60)}>
          1h
        </Button>
      </ButtonGroup>
    </Row>
      <Label>Názov receptu</Label>
      <Input
        className='mb-2'
        onChange={handleSearch}
      />
      <Row className='mt-4'>
        {filtered.map((recipe, i) =>
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
