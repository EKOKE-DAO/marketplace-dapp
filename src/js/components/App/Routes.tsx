import * as React from 'react';
import { Route as RouterRoute, Routes } from 'react-router-dom';

import { Route } from '../../utils/routes';
import SeoEngine from '../SeoEngine';

// pages
const Home = React.lazy(() => import('./pages/Home'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const ContractPage = React.lazy(
  () => import('./pages/Marketplace/pages/Contract'),
);
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Presale = React.lazy(() => import('./pages/Presale'));
const About = React.lazy(() => import('./pages/About'));

// reserved area
const Profile = React.lazy(() => import('./pages/Profile'));
const ProfileCollected = React.lazy(
  () => import('./pages/Profile/pages/Collected'),
);
const ProfileContracts = React.lazy(
  () => import('./pages/Profile/pages/Contracts'),
);

// Guide
const Guide = React.lazy(() => import('./pages/Guide'));

const AppRouter = () => (
  <>
    <SeoEngine />
    <main>
      <React.Suspense fallback={null}>
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

          {/* reserved area */}
          <RouterRoute path={Route.url(Route.PROFILE)} element={<Profile />} />
          <RouterRoute
            path={Route.url(Route.PROFILE_COLLECTED)}
            element={<ProfileCollected />}
          />
          <RouterRoute
            path={Route.url(Route.PROFILE_CONTRACTS)}
            element={<ProfileContracts />}
          />

          {/* Guide */}
          <RouterRoute path={Route.url(Route.GUIDE)} element={<Guide />} />

          {/* 404 */}
          <RouterRoute path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </main>
  </>
);

export default AppRouter;
