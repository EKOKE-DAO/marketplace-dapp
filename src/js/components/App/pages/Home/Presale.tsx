import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Link from '../../../reusable/Link';

const Presale = () => (
  <Container.FlexCols className="items-center justify-center sm:w-full gap-2">
    <Container.Container>
      <Heading.H2>
        <span className="text-brandRed font-bold">EKOKE Presale</span> coming
        soon
      </Heading.H2>
    </Container.Container>
    <Container.Container>
      <Link.Cta className="hover:cursor-not-allowed">
        Coming soon (January 15th 2025)
        <Icon.FiArrowRight className="inline ml-2" />
      </Link.Cta>
    </Container.Container>
  </Container.FlexCols>
);

export default Presale;
