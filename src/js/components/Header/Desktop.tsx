import * as React from 'react';

import Container from '../reusable/Container';
import { MetamaskProfile } from '../MetamaskConnect';

import { Route } from '../../utils/routes';
import TopbarLink from './TopbarLink';

const Desktop = () => (
  <div className="fixed block sm:hidden left-0 top-0 h-[80px] w-full bg-page z-40 shadow-sm">
    <Container.FlexRow className="justify-between items-center py-4 px-4">
      <Container.Container className="flex-1" />
      <Container.FlexRow className="items-center justify-center gap-8 flex-1">
        <TopbarLink name={'Home'} href={Route.HOME} />
        <TopbarLink name={'Marketplace'} href={Route.MARKETPLACE} />
        <TopbarLink name={'EKOKE Presale'} href={Route.PRESALE} />
        <TopbarLink name={'About'} href={Route.ABOUT} />
      </Container.FlexRow>
      <Container.Container className="flex-1">
        <MetamaskProfile />
      </Container.Container>
    </Container.FlexRow>
  </div>
);

export default Desktop;
