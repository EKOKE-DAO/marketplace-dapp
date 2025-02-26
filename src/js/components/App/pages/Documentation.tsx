import Wrapper, { MenuPage } from './Documentation/Wrapper';
import isMobile from '../../../utils/platform';
import Heading from '../../reusable/Heading';

const Documentation = () => {
  if (isMobile()) {
    return <MenuPage />;
  }

  return (
    <Wrapper>
      <Heading.H1>Documentation</Heading.H1>
    </Wrapper>
  );
};

export default Documentation;
