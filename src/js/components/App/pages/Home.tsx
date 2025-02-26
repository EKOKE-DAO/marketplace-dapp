import Container from '../../reusable/Container';
import Intro from './Home/Intro';
import Tokenomics from './Home/Tokenomics';
import Roadmap from './Home/Roadmap';
import Whitepaper from './Home/Whitepaper';

const Home = () => (
  <Container.FlexCols className="gap-8 items-center">
    <Intro />
    <Tokenomics />
    <Roadmap />
    <Whitepaper />
  </Container.FlexCols>
);

export default Home;
