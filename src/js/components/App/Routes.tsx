import * as React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route as RouterRoute,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import { Route } from '../../utils/routes';
import UserStories from './pages/UserStories';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <RouterRoute path={Route.url(Route.HOME)} element={<Home />} />
      <RouterRoute
        path={Route.url(Route.USER_STORIES)}
        element={<UserStories />}
      />
    </>,
  ),
);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
