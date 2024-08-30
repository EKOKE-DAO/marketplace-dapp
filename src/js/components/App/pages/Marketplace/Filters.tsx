import * as React from 'react';

import Container from '../../../reusable/Container';
import Map from './Filters/Map';
import FiltersCard from './Filters/FiltersCard';

const Filters = () => (
  <Container.FlexCols className="gap-4">
    <Container.Container>
      <Map />
    </Container.Container>
    <Container.Container>
      <FiltersCard />
    </Container.Container>
  </Container.FlexCols>
);

export default Filters;
