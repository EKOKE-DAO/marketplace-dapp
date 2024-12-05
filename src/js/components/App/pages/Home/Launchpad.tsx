import * as React from 'react';
import * as Icon from 'react-feather';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Link from '../../../reusable/Link';

const Launchpad = () => (
  <Container.FlexCols className="items-center justify-center sm:w-full gap-2">
    <Container.Container>
      <Heading.H2>
        <span className="text-brandRed font-bold">SNS</span> Launchpad
      </Heading.H2>
    </Container.Container>
    <Container.Container>
      <Link.Button className="hover:cursor-not-allowed">
        Coming soon... <Icon.ExternalLink className="inline mr-2 text-white" />
      </Link.Button>
    </Container.Container>
  </Container.FlexCols>
);

export default Launchpad;
