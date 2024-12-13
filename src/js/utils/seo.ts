import { Route } from './routes';

interface SeoPages {
  [key: string]: SeoData;
}

interface SeoData {
  title: string;
  description: string;
  ogSiteName?: string;
  noindex?: boolean;
}

const PAGE_TITLES: SeoPages = {
  '/': {
    title: 'EKOKE Token DAO',
    description:
      'EKOKE is an innovative tool that aims to revolutionize the real estate industry. The EKOKE-DAO project emerges as the evolutionary response to the traditional real estate landscape',
  },
  '/marketplace': {
    title: 'EKOKE DAO - Marketplace',
    description: '',
  },
  '/presale': {
    title: 'EKOKE DAO - Presale',
    description: 'Join the EKOKE Token DAO presale',
  },
  '/about': {
    title: 'EKOKE DAO - About',
    description:
      'EKOKE is an innovative tool that aims to revolutionize the real estate industry. The EKOKE-DAO project emerges as the evolutionary response to the traditional real estate landscape',
  },
  '/cookies': {
    title: 'EKOKE DAO - Cookies',
    description: 'EKOKE DAO cookie policy',
  },
  '/privacy': {
    title: 'EKOKE DAO - Privacy',
    description: 'EKOKE DAO privacy policy',
  },
  '/terms-and-conditions': {
    title: 'EKOKE DAO - Terms & Conditions',
    description: 'EKOKE DAO terms and conditions',
  },
  '/profile': {
    title: 'EKOKE DAO - Profile',
    description: 'Your EKOKE DAO profile',
  },
  '/profile/collected': {
    title: 'EKOKE DAO - Collected',
    description: 'Your collected EKOKE DAO items',
  },
  '/profile/contracts': {
    title: 'EKOKE DAO - Contracts',
    description: 'Your EKOKE DAO contracts',
  },
  '/documentation': {
    title: 'EKOKE DAO - Documentation',
    description: 'EKOKE DAO documentation',
  },
  '/documentation/faq': {
    title: 'EKOKE DAO - FAQ',
    description: 'EKOKE DAO FAQ',
  },
  '/documentation/whitepaper': {
    title: 'EKOKE DAO - Whitepaper',
    description: 'EKOKE DAO whitepaper',
  },
  '/documentation/contracts/deferred': {
    title: 'EKOKE DAO - Deferred',
    description: 'EKOKE DAO Deferred contracts',
  },
  '/documentation/contracts/ekoke': {
    title: 'EKOKE DAO - EKOKE Docs',
    description: 'EKOKE DAO EKOKE token docs',
  },
  '/documentation/contracts/marketplace': {
    title: 'EKOKE DAO - marketplace Docs',
    description: 'EKOKE DAO marketplace docs',
  },
  '/documentation/contracts/reward-pool': {
    title: 'EKOKE DAO - Reward Pool Docs',
    description: 'EKOKE Reward Pool docs',
  },
  '/documentation/canisters/deferred-data': {
    title: 'EKOKE DAO - Deferred Data Docs',
    description: 'EKOKE Deferred Data docs',
  },
  '/documentation/canisters/deferred-minter': {
    title: 'EKOKE DAO - Deferred Minter Docs',
    description: 'EKOKE Deferred Minter docs',
  },
  '/documentation/reward': {
    title: 'EKOKE DAO - Reward Docs',
    description: 'EKOKE Reward docs',
  },
  '/giveaway': {
    title: 'EKOKE DAO 100 $EKOKE Giveaway - 1$EKOKE = 1$',
    description:
      "Since we're going to launch EKOKE DAO on April 1st 2025 and we'll open the Presale on January 10th 2025, we've decided to start a Giveaway where 10 lucky users will be able to win 100$EKOKE which are worth 100$.",
  },
};

const seoData = (pathname: string | Route): SeoData | undefined => {
  const url = Route.isRoute(pathname) ? Route.url(pathname as Route) : pathname;

  if (!PAGE_TITLES[url]) {
    return undefined;
  }

  return PAGE_TITLES[url];
};

export const pageTitle = (pathname: string | Route): string => {
  const data = seoData(pathname);
  return data ? data.title : '404 Not found';
};

export const pageDescription = (pathname: string | Route): string => {
  const data = seoData(pathname);
  return data ? data.description : 'Page could not be found on the website';
};

export const pageOgSiteName = (pathname: string | Route): string => {
  const data = seoData(pathname);
  return data?.ogSiteName ? data.ogSiteName : pageTitle(pathname);
};

export const noIndex = (pathname: string | Route): boolean => {
  return seoData(pathname)?.noindex ?? false;
};
