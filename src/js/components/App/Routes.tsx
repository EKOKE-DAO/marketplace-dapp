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
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const TermsAndConditions = React.lazy(
  () => import('./pages/TermsAndConditions'),
);

// reserved area
const Profile = React.lazy(() => import('./pages/Profile'));
const ProfileCollected = React.lazy(
  () => import('./pages/Profile/pages/Collected'),
);
const ProfileContracts = React.lazy(
  () => import('./pages/Profile/pages/Contracts'),
);

// giveaway
const Giveaway = React.lazy(() => import('./pages/Giveaway'));

// Documentation
const Documentation = React.lazy(() => import('./pages/Documentation'));
const DocumentationArchitecture = React.lazy(
  () => import('./pages/Documentation/pages/Architecture'),
);
const DocumentationDeferredData = React.lazy(
  () => import('./pages/Documentation/pages/DeferredData'),
);
const DocumentationDeferredMinter = React.lazy(
  () => import('./pages/Documentation/pages/DeferredMinter'),
);
const DocumentationDeferred = React.lazy(
  () => import('./pages/Documentation/pages/Deferred'),
);
const DocumentationEkoke = React.lazy(
  () => import('./pages/Documentation/pages/Ekoke'),
);
const DocumentationMarketplace = React.lazy(
  () => import('./pages/Documentation/pages/Marketplace'),
);
const DocumentationRewardPool = React.lazy(
  () => import('./pages/Documentation/pages/RewardPool'),
);
const DocumentationReward = React.lazy(
  () => import('./pages/Documentation/pages/Reward'),
);
const DocumentationWhitepaper = React.lazy(
  () => import('./pages/Documentation/pages/Whitepaper'),
);
const DocumentationFaq = React.lazy(
  () => import('./pages/Documentation/pages/Faq'),
);

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
          <RouterRoute path={Route.url(Route.COOKIES)} element={<Cookies />} />
          <RouterRoute path={Route.url(Route.PRIVACY)} element={<Privacy />} />
          <RouterRoute
            path={Route.url(Route.TERMS_AND_CONDITIONS)}
            element={<TermsAndConditions />}
          />

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

          {/* Documentation */}
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION)}
            element={<Documentation />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_ARCHITECTURE)}
            element={<DocumentationArchitecture />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_CANISTERS_DATA)}
            element={<DocumentationDeferredData />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_CANISTERS_MINTER)}
            element={<DocumentationDeferredMinter />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_CONTRACTS_DEFERRED)}
            element={<DocumentationDeferred />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_CONTRACTS_EKOKE)}
            element={<DocumentationEkoke />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_CONTRACTS_MARKETPLACE)}
            element={<DocumentationMarketplace />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_CONTRACTS_REWARD_POOL)}
            element={<DocumentationRewardPool />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_REWARD)}
            element={<DocumentationReward />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_WHITEPAPER)}
            element={<DocumentationWhitepaper />}
          />
          <RouterRoute
            path={Route.url(Route.DOCUMENTATION_FAQ)}
            element={<DocumentationFaq />}
          />

          {/* giveaway */}
          <RouterRoute
            path={Route.url(Route.GIVEAWAY)}
            element={<Giveaway />}
          />

          {/* 404 */}
          <RouterRoute path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Container.Container>
  </>
);

export default AppRouter;
