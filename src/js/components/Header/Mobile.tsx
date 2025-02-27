import Container from '../reusable/Container';
import { MetamaskProfile } from '../MetamaskConnect';
import TopbarLink from './TopbarLink';
import { Route } from '../../utils/routes';
import Link from '../reusable/Link';

import EkokeLogo from '../../../assets/images/ekoke-logo.webp';

const Mobile = () => (
  <div className="bg-page items-center fixed hidden sm:block left-0 gap-4 justify-start py-2 px-4 top-0 w-full z-40 shadow-sm">
    <Container.FlexRow className="items-center justify-between w-full h-[80px]">
      <Container.Container>
        <Container.FlexRow className="items-center gap-4">
          <img src={EkokeLogo} alt="EKOKE DAO" height={40} width={40} />
          <Container.Container className="border-brandRed border-b-4 py-2">
            <Link.Default href={Route.HOME}>EKOKE DAO</Link.Default>
          </Container.Container>
        </Container.FlexRow>
      </Container.Container>
      <MetamaskProfile />
    </Container.FlexRow>
    <Container.FlexRow className="h-[40px] w-full items-center justify-center gap-4">
      <TopbarLink name={'Marketplace'} href={Route.MARKETPLACE} />
      <TopbarLink name={'Real Estate'} href={Route.REAL_ESTATE} />
      <TopbarLink name={'Agencies'} href={Route.AGENCIES} />
    </Container.FlexRow>
    <Container.FlexRow className="h-[40px] w-full items-center justify-center gap-4">
      <TopbarLink name={'About'} href={Route.ABOUT} />
      <TopbarLink name={'Documentation'} href={Route.DOCUMENTATION} />
    </Container.FlexRow>
  </div>
);

export default Mobile;
