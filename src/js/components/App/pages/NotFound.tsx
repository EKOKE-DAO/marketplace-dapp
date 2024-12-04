import * as React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => (
  <>
    <Helmet>
      <meta name="googlebot" content="noindex, nofollow" />
    </Helmet>
    <div>404</div>
  </>
);

export default NotFound;
