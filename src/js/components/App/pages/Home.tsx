import * as React from 'react';

import Container from '../../reusable/Container';
import Intro from './Home/Intro';
import Launchpad from './Home/Launchpad';
import Tokenomics from './Home/Tokenomics';
import Roadmap from './Home/Roadmap';
import Whitepaper from './Home/Whitepaper';
import Presale from './Home/Presale';

const Home = () => (
  <Container.FlexCols className="gap-8 items-center">
    <Intro />
    <Container.FlexResponsiveRow className="items-center justify-around w-3/6">
      <Presale />
      <Launchpad />
    </Container.FlexResponsiveRow>
    <Tokenomics />
    <Roadmap />
    <Whitepaper />
  </Container.FlexCols>
);

export default Home;
