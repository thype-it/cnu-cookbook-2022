import { Routes as RouterRoutes, Route } from 'react-router-dom';

import { RecipeListPage } from './pages/RecipeListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { CreateRecipe } from './pages/CreateRecipe';
import { EditRecipe } from './pages/EditRecipe';

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<RecipeListPage />} />
      <Route path="/recipe/:slug" element={<RecipeDetailPage />} />
      <Route path='/create' element={<CreateRecipe/>} />
      <Route path='/edit' element={<EditRecipe/>} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
