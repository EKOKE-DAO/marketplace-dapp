import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../reusable/Container';
import Link from '../../../reusable/Link';
import { Route } from '../../../../utils/routes';

const Whitepaper = () => (
  <Container.FlexCols className="items-center justify-center w-3/6 sm:w-full mx-auto gap-2">
    <Container.Container>
      <Link.Cta href={Route.GUIDE_WHITEPAPER}>
        Read the Whitepaper{' '}
        <Icon.FiExternalLink className="inline mr-2 text-white" />
      </Link.Cta>
    </Container.Container>
  </Container.FlexCols>
);

export default Whitepaper;
