import * as React from 'react';

import Container from '../../reusable/Container';
import Filters from './RealEstate/Filters';
import PropertyTable from './RealEstate/PropertyTable';

export interface IFilters {
  city?: string;
  country?: string;
}

const Marketplace = () => {
  const [filters, setFilters] = React.useState<IFilters>({});

  return (
    <Container.Container>
      <Container.FlexResponsiveRow className="flex-1 gap-8">
        <Filters filters={filters} setFilters={setFilters} />
        <Container.Container className="flex-1 py-4">
          <PropertyTable filters={filters} />
        </Container.Container>
      </Container.FlexResponsiveRow>
    </Container.Container>
  );
};

export default Marketplace;
