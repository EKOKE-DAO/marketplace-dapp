import * as React from 'react';

import Container from '../../../reusable/Container';
import {
  MOCKED_REAL_ESTATE,
  mockedContracts,
} from '../../../../data/mock/mocked_real_estate';
import Item from './PropertyTable/Item';
import Pagination from '../../../reusable/Pagination';
import { Contract } from '../../../../data/contract';

const MAX_PROPERTIES_PER_PAGE = 12;
const MAX_PAGE = Math.ceil(MOCKED_REAL_ESTATE.length / MAX_PROPERTIES_PER_PAGE);

const PropertyTable = () => {
  const [page, setPage] = React.useState(1);
  const [properties, setProperties] = React.useState<Contract[]>([]);

  React.useEffect(() => {
    // take the first 12 properties from the list
    const offset = (page - 1) * MAX_PROPERTIES_PER_PAGE;
    const pageProperties = mockedContracts().slice(
      offset,
      offset + MAX_PROPERTIES_PER_PAGE,
    );
    setProperties(pageProperties);
  }, [page]);

  return (
    <Container.FlexCols className="w-full items-center justify-between h-full gap-8">
      <Container.Container className="grid grid-cols-3 2xl:grid-cols-4 sm:grid-cols-1 gap-4">
        {properties.map((contract, index) => (
          <Item key={index} contract={contract} />
        ))}
      </Container.Container>
      <Pagination
        page={page}
        onChange={setPage}
        min={1}
        max={MAX_PAGE}
        onNext={() => setPage(Math.min(MAX_PAGE, page + 1))}
        onPrev={() => setPage(Math.max(MAX_PAGE, page - 1))}
      />
    </Container.FlexCols>
  );
};

export default PropertyTable;
