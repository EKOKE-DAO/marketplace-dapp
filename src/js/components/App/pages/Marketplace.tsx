import * as React from 'react';

import Container from '../../reusable/Container';
import Filters from './Marketplace/Filters';
import PropertyTable from './Marketplace/PropertyTable';

const Marketplace = () => (
  <Container.Container>
    <Container.FlexResponsiveRow className="flex-1 gap-8">
      <Filters />
      <Container.Container className="flex-1 py-4">
        <PropertyTable />
      </Container.Container>
    </Container.FlexResponsiveRow>
  </Container.Container>
);

export default Marketplace;
