import * as React from 'react';

import Container from '../../reusable/Container';
import Filters from './Agencies/Filters';
import AgentsTable from './Agencies/AgentsTable';

export interface IFilters {
  country?: string;
}

const Agencies = () => {
  const [filters, setFilters] = React.useState<IFilters>({});

  return (
    <Container.Container>
      <Container.FlexResponsiveRow className="flex-1 gap-8">
        <Filters filters={filters} setFilters={setFilters} />
        <Container.Container className="flex-1 py-4">
          <AgentsTable filters={filters} />
        </Container.Container>
      </Container.FlexResponsiveRow>
    </Container.Container>
  );
};

export default Agencies;
