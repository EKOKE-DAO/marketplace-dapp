import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet as HelmetImport, HelmetProps } from 'react-helmet';

export const Helmet = HelmetImport as React.ComponentClass<HelmetProps>;

import {
  hasSeoData,
  pageDescription,
  pageOgSiteName,
  pageTitle,
  noIndex as isNoIndex,
} from '../utils/seo';

const SITE_URL = 'https://ekokedao.com';

const SeoEngine = () => {
  const { pathname } = useLocation();
  // states
  const [title, setTitle] = React.useState(pageTitle(pathname));
  const [description, setDescription] = React.useState(
    pageDescription(pathname),
  );
  const [ogSiteName, setOgSiteName] = React.useState(pageDescription(pathname));
  const [seoDataSet, setSeoDataSet] = React.useState(false);
  const [noIndex, setNoIndex] = React.useState(false);

  const canonicalUrl = `${SITE_URL}${pathname}`;

  React.useEffect(() => {
    setTitle(pageTitle(pathname));
    setDescription(pageDescription(pathname));
    setOgSiteName(pageOgSiteName(pathname));
    setSeoDataSet(hasSeoData(pathname));
    setNoIndex(isNoIndex(pathname));
  }, [pathname]);

  return (
    <Helmet>
      <html lang={'en_US'} />
      <link rel="canonical" href={canonicalUrl} />
      {seoDataSet && <title>{title}</title>}
      {seoDataSet && <meta name="description" content={description} />}
      {seoDataSet && <meta property="og:title" content={title} />}
      {seoDataSet && <meta property="og:description" content={description} />}
      {seoDataSet && <meta property="og:type" content={'website'} />}
      {seoDataSet && <meta property="og:url" content={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex" />}
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={'en_US'} />
    </Helmet>
  );
};

export default SeoEngine;
