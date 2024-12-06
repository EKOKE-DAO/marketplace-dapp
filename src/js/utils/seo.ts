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
    title: 'EKOKE Token DAO - Marketplace',
    description: '',
  },
  '/presale': {
    title: 'EKOKE Token DAO - Presale',
    description: 'Join the EKOKE Token DAO presale',
  },
  '/about': {
    title: 'EKOKE Token DAO - About',
    description:
      'EKOKE is an innovative tool that aims to revolutionize the real estate industry. The EKOKE-DAO project emerges as the evolutionary response to the traditional real estate landscape',
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
