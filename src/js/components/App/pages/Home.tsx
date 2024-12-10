import * as React from 'react';

import Container from '../../reusable/Container';
import Intro from './Home/Intro';
import Tokenomics from './Home/Tokenomics';
import Roadmap from './Home/Roadmap';
import Whitepaper from './Home/Whitepaper';
import Presale from './Home/Presale';

const Home = () => (
  <Container.FlexCols className="gap-8 items-center">
    <Intro />
    <Container.Container className="w-3/6 sm:w-full">
      <Presale />
    </Container.Container>
    <Tokenomics />
    <Roadmap />
    <Whitepaper />
  </Container.FlexCols>
);

export default Home;
