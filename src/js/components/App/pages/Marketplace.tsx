import * as React from 'react';

import Container from '../../reusable/Container';
import Filters from './Marketplace/Filters';
import PropertyTable from './Marketplace/PropertyTable';

export interface IFilters {
  city?: string;
  country?: string;
  minPrice: number;
  maxPrice: number;
}

const Marketplace = () => {
  const [filters, setFilters] = React.useState<IFilters>({
    minPrice: 0,
    maxPrice: 10_000_000,
  });

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
