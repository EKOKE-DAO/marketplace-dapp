import * as React from 'react';

import Container from '../../reusable/Container';
import DemoAlert from './Marketplace/DemoAlert';
import Filters from './Marketplace/Filters';
import PropertyTable from './Marketplace/PropertyTable';

const Marketplace = () => (
  <Container.Container>
    <DemoAlert />
    <Container.FlexResponsiveRow className="gap-8">
      <Container.Container className="w-2/6 xl:w-3/12 sm:w-full">
        <Filters />
      </Container.Container>
      <Container.Container className="flex-1 py-4">
        <PropertyTable />
      </Container.Container>
    </Container.FlexResponsiveRow>
  </Container.Container>
);

export default Marketplace;
