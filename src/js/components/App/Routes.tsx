import * as React from 'react';
import { Route as RouterRoute, Routes } from 'react-router-dom';

import { Route } from '../../utils/routes';
import Home from './pages/Home';
import SeoEngine from '../SeoEngine';
import Marketplace from './pages/Marketplace';
import ContractPage from './pages/Marketplace/pages/Contract';
import NotFound from './pages/NotFound';
import Presale from './pages/Presale';
import About from './pages/About';

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
        <RouterRoute
          path={`${Route.url(Route.MARKETPLACE_CONTRACT)}/:id`}
          element={<ContractPage />}
        />
        <RouterRoute path={Route.url(Route.PRESALE)} element={<Presale />} />
        <RouterRoute path={Route.url(Route.ABOUT)} element={<About />} />
        <RouterRoute path="*" element={<NotFound />} />
      </Routes>
    </main>
  </>
);

export default AppRouter;
