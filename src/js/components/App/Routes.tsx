import * as React from 'react';
import { Route as RouterRoute, Routes } from 'react-router-dom';

import { Route } from '../../utils/routes';
import SeoEngine from '../SeoEngine';
import Container from '../reusable/Container';

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
const GuideArchitecture = React.lazy(
  () => import('./pages/Guide/pages/Architecture'),
);
const GuideDeferredData = React.lazy(
  () => import('./pages/Guide/pages/DeferredData'),
);
const GuideDeferredMinter = React.lazy(
  () => import('./pages/Guide/pages/DeferredMinter'),
);
const GuideDeferred = React.lazy(() => import('./pages/Guide/pages/Deferred'));
const GuideEkoke = React.lazy(() => import('./pages/Guide/pages/Ekoke'));
const GuideMarketplace = React.lazy(
  () => import('./pages/Guide/pages/Marketplace'),
);
const GuideRewardPool = React.lazy(
  () => import('./pages/Guide/pages/RewardPool'),
);
const GuideReward = React.lazy(() => import('./pages/Guide/pages/Reward'));
const GuideWhitepaper = React.lazy(
  () => import('./pages/Guide/pages/Whitepaper'),
);
const GuideFaq = React.lazy(() => import('./pages/Guide/pages/Faq'));

const AppRouter = () => (
  <>
    <SeoEngine />
    <Container.Container>
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
          <RouterRoute
            path={Route.url(Route.GUIDE_ARCHITECTURE)}
            element={<GuideArchitecture />}
          />
          <RouterRoute
            path={Route.url(Route.GUIDE_CANISTERS_DATA)}
            element={<GuideDeferredData />}
          />
          <RouterRoute
            path={Route.url(Route.GUIDE_CANISTERS_MINTER)}
            element={<GuideDeferredMinter />}
          />
          <RouterRoute
            path={Route.url(Route.GUIDE_CONTRACTS_DEFERRED)}
            element={<GuideDeferred />}
          />
          <RouterRoute
            path={Route.url(Route.GUIDE_CONTRACTS_EKOKE)}
            element={<GuideEkoke />}
          />
          <RouterRoute
            path={Route.url(Route.GUIDE_CONTRACTS_MARKETPLACE)}
            element={<GuideMarketplace />}
          />
          <RouterRoute
            path={Route.url(Route.GUIDE_CONTRACTS_REWARD_POOL)}
            element={<GuideRewardPool />}
          />
          <RouterRoute
            path={Route.url(Route.GUIDE_REWARD)}
            element={<GuideReward />}
          />
          <RouterRoute
            path={Route.url(Route.GUIDE_WHITEPAPER)}
            element={<GuideWhitepaper />}
          />
          <RouterRoute
            path={Route.url(Route.GUIDE_FAQ)}
            element={<GuideFaq />}
          />

          {/* 404 */}
          <RouterRoute path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Container.Container>
  </>
);

export default AppRouter;
