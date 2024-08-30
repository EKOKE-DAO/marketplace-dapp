import * as React from 'react';
import { Route as RouterRoute, Routes } from 'react-router-dom';

import { Route } from '../../utils/routes';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import UserStories from './pages/UserStories';
import SeoEngine from '../SeoEngine';
import Marketplace from './pages/Marketplace';

const AppRouter = () => (
  <>
    <SeoEngine />
    <main>
      <Routes>
        <RouterRoute path={Route.url(Route.HOME)} element={<Home />} />
        <RouterRoute
          path={Route.url(Route.MARKETPLACE)}
          element={<Marketplace />}
        />
        <RouterRoute path={Route.url(Route.TIMELINE)} element={<Timeline />} />
        <RouterRoute
          path={Route.url(Route.USER_STORIES)}
          element={<UserStories />}
        />
      </Routes>
    </main>
  </>
);

export default AppRouter;
