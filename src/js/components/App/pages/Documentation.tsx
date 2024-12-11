import * as React from 'react';

import Wrapper, { MenuPage } from './Documentation/Wrapper';
import isMobile from '../../../utils/platform';

const Documentation = () => {
  if (isMobile()) {
    return <MenuPage />;
  }

  return <Wrapper />;
};

export default Documentation;
