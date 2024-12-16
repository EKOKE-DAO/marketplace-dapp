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
    title: 'EKOKE DAO | Transform Your Property into Digital Gold',
    description:
      'EKOKE is an innovative tool that aims to revolutionize the real estate industry. We give you a tool to tokenize the payment of your property to give you a sustainable replacement for the traditional mortgage',
  },
  '/marketplace': {
    title: 'EKOKE DAO | Marketplace',
    description:
      'EKOKE DAO listed properties. Buy and sell real-estate properties on the blockchain or get rewards for paying the installments with USDT and get EKOKE tokens as rewards',
  },
  '/presale': {
    title: 'EKOKE DAO | Presale',
    description:
      'Join the EKOKE Token DAO presale. The presale will start on January 15th 2025 and will end on March 31st 2025. 1$EKOKE = 1$. Only 450,000 $EKOKE will be available for the presale',
  },
  '/about': {
    title: 'EKOKE DAO | About',
    description:
      'EKOKE is an innovative tool that aims to revolutionize the real estate industry. The EKOKE-DAO project emerges as the revolutionary response to the traditional real estate landscape. We replace the traditional mortgage with a sustainable and decentralized solution based on installments and rewards',
  },
  '/cookies': {
    title: 'EKOKE DAO | Cookies',
    description: 'EKOKE DAO cookie policy',
  },
  '/privacy': {
    title: 'EKOKE DAO | Privacy',
    description: 'EKOKE DAO privacy policy',
  },
  '/terms-and-conditions': {
    title: 'EKOKE DAO | Terms & Conditions',
    description: 'EKOKE DAO terms and conditions',
  },
  '/profile': {
    title: 'EKOKE DAO | Profile',
    description: 'Your EKOKE DAO profile',
    noindex: true,
  },
  '/profile/collected': {
    title: 'EKOKE DAO | Collected',
    description: 'Your collected EKOKE DAO items',
    noindex: true,
  },
  '/profile/contracts': {
    title: 'EKOKE DAO | Contracts',
    description: 'Your EKOKE DAO contracts',
    noindex: true,
  },
  '/documentation': {
    title: 'EKOKE DAO | Documentation',
    description: 'EKOKE DAO documentation',
  },
  '/documentation/faq': {
    title: 'EKOKE DAO | FAQ',
    description: 'EKOKE DAO FAQ',
  },
  '/documentation/whitepaper': {
    title: 'EKOKE DAO | Whitepaper',
    description: 'EKOKE DAO whitepaper',
  },
  '/documentation/contracts/deferred': {
    title: 'EKOKE DAO | Deferred',
    description: 'EKOKE DAO Deferred contracts',
  },
  '/documentation/contracts/ekoke': {
    title: 'EKOKE DAO | EKOKE Docs',
    description: 'EKOKE DAO EKOKE token docs',
  },
  '/documentation/contracts/marketplace': {
    title: 'EKOKE DAO | marketplace Docs',
    description: 'EKOKE DAO marketplace docs',
  },
  '/documentation/contracts/reward-pool': {
    title: 'EKOKE DAO | Reward Pool Docs',
    description: 'EKOKE Reward Pool docs',
  },
  '/documentation/canisters/deferred-data': {
    title: 'EKOKE DAO | Deferred Data Docs',
    description: 'EKOKE Deferred Data docs',
  },
  '/documentation/canisters/deferred-minter': {
    title: 'EKOKE DAO | Deferred Minter Docs',
    description: 'EKOKE Deferred Minter docs',
  },
  '/documentation/reward': {
    title: 'EKOKE DAO | Reward Docs',
    description:
      'EKOKE Reward are distributed to the users who buy installments with USDT from the property buyers. The rewards are distributed in EKOKE tokens and are based on the amount of USDT paid. The rewards will raise in value thanks to a deflationary mechanism',
  },
  '/giveaway': {
    title: 'EKOKE DAO 100 $EKOKE Giveaway - 1$EKOKE = 1$',
    description:
      "Since we're going to launch EKOKE DAO on April 1st 2025 and we'll open the Presale on January 10th 2025, we've decided to start a Giveaway where 50 lucky users will be able to win 100$EKOKE which are worth 100$.",
  },
};

const seoData = (pathname: string | Route): SeoData | undefined => {
  const url = Route.isRoute(pathname) ? Route.url(pathname as Route) : pathname;

  if (!PAGE_TITLES[url]) {
    return undefined;
  }

  return PAGE_TITLES[url];
};

export const hasSeoData = (pathname: string | Route): boolean => {
  return seoData(pathname) !== undefined;
};

export const pageTitle = (pathname: string | Route): string => {
  const data = seoData(pathname);
  return data
    ? data.title
    : 'EKOKE DAO | Transform Your Property into Digital Gold';
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
