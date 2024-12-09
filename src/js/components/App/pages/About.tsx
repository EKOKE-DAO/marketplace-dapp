import * as React from 'react';

import Container from '../../reusable/Container';
import Team from './About/Team';
import Heading from '../../reusable/Heading';
import Intro from './About/Intro';
import HowItWorks from './About/HowItWorks';
import Stories from './About/Stories';
import ThreeTokens from './About/Tokens';

const About = () => (
  <Container.FlexCols className="items-center gap-4">
    <Heading.H1>
      About <strong>EKOKE</strong> DAO
    </Heading.H1>
    <Intro />
    <ThreeTokens />
    <HowItWorks />
    <Stories />
    <Team />
  </Container.FlexCols>
);

export default About;
