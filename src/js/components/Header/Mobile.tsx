import * as React from 'react';

import Container from '../reusable/Container';
import { MetamaskProfile } from '../MetamaskConnect';
import TopbarLink from './TopbarLink';
import { Route } from '../../utils/routes';

const Mobile = () => (
  <div className="bg-page items-center fixed hidden sm:block left-0 gap-4 justify-start py-2 px-4 top-0 w-full z-40 shadow-sm">
    <Container.FlexRow className="items-center justify-between w-full h-[80px]">
      <Container.Container className="border-brandRed border-b-4 py-2">
        <span className="font-medium text-brand">EKOKE Marketplace</span>
      </Container.Container>
      <MetamaskProfile />
    </Container.FlexRow>
    <Container.FlexRow className="h-[60px] w-full items-center justify-center gap-4">
      <TopbarLink name={'Home'} href={Route.HOME} />
      <TopbarLink name={'Marketplace'} href={Route.MARKETPLACE} />
      <TopbarLink name={'EKOKE Presale'} href={Route.PRESALE} />
      <TopbarLink name={'About'} href={Route.ABOUT} />
    </Container.FlexRow>
  </div>
);

export default Mobile;
