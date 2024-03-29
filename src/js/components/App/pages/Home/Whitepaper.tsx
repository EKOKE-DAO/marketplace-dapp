import * as React from 'react';
import * as Icon from 'react-feather';

import Container from '../../../reusable/Container';
import Link from '../../../reusable/Link';

const Whitepaper = () => (
  <Container.FlexCols className="items-center justify-center w-3/6 sm:w-full mx-auto gap-2">
    <Container.Container>
      <Link.Button href={'https://www.ekoketoken.com/whitepaper'}>
        Read the Whitepaper{' '}
        <Icon.ExternalLink className="inline mr-2 text-white" />
      </Link.Button>
    </Container.Container>
  </Container.FlexCols>
);

export default Whitepaper;
