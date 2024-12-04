import * as React from 'react';

import Container from '../../../reusable/Container';
import Pagination from '../../../reusable/Pagination';
import getContracts from '../../../../api/getContracts';
import { useAppContext } from '../../AppContext';
import ContractLoader from './PropertyTable/ContractLoader';

const MAX_PROPERTIES_PER_PAGE = 12;

const PropertyTable = () => {
  const { setAppError } = useAppContext();
  const [maxPage, setMaxPage] = React.useState<number>(1);
  const [page, setPage] = React.useState<number>(1);
  const [contracts, setContracts] = React.useState<bigint[]>([]);

  React.useEffect(() => {
    getContracts()
      .then((contractIds) => {
        setMaxPage(Math.ceil(contractIds.length / MAX_PROPERTIES_PER_PAGE));
        // take the first `MAX_PROPERTIES_PER_PAGE` properties from the list after offset
        const offset = (page - 1) * MAX_PROPERTIES_PER_PAGE;
        setContracts(contractIds);

        const pageContractIds = contractIds.slice(
          offset,
          offset + MAX_PROPERTIES_PER_PAGE,
        );
        setContracts(pageContractIds);
      })
      .catch((error) => {
        setAppError('Failed to load contracts');
        console.error(error);
      });
  }, [page]);

  return (
    <Container.FlexCols className="w-full items-center justify-between h-full gap-8">
      <Container.Container className="grid grid-cols-3 2xl:grid-cols-4 sm:grid-cols-1 gap-4">
        {contracts.map((contractId) => (
          <ContractLoader key={contractId} id={contractId} />
        ))}
      </Container.Container>
      <Pagination
        page={page}
        onChange={setPage}
        min={1}
        max={maxPage}
        onNext={() => setPage(Math.min(maxPage, page + 1))}
        onPrev={() => setPage(Math.max(maxPage, page - 1))}
      />
    </Container.FlexCols>
  );
};

export default PropertyTable;
