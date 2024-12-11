import * as React from 'react';

import WaitForMetamask from '../../../reusable/WaitForMetamask';
import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import { MetamaskProfile } from '../../../MetamaskConnect';
import Header from './Wrapper/Header';
import Nav from './Wrapper/Nav';

interface Props {
  children?: React.ReactNode | React.ReactNode[] | string;
}

const Wrapper = ({ children }: Props) => (
  <WaitForMetamask otherwise={<Login />}>
    <Container.FlexCols className="gap-4 mb-4">
      <Header />
      <Nav />
    </Container.FlexCols>
    <Container.Container>{children}</Container.Container>
  </WaitForMetamask>
);

const Login = () => (
  <Container.FlexCols className="items-center justify-center gap-2">
    <Heading.H1>Login with Metamask</Heading.H1>
    <MetamaskProfile />
  </Container.FlexCols>
);

export default Wrapper;
