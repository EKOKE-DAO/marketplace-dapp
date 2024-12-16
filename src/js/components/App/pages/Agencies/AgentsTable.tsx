import * as React from 'react';

import Container from '../../../reusable/Container';
import Pagination from '../../../reusable/Pagination';
import { useAppContext } from '../../AppContext';
import { IFilters } from '../Agencies';
import Paragraph from '../../../reusable/Paragraph';
import { getAgents } from '../../../../api/getAgents';
import { Agency } from '../../../../data/contract';
import AgencyView from './AgentsTable/Agency';

const MAX_AGENCIES_PER_PAGE = 12;

interface Props {
  filters: IFilters;
}

const AgentsTable = ({ filters }: Props) => {
  const { setAppError } = useAppContext();
  const [maxPage, setMaxPage] = React.useState<number>(1);
  const [page, setPage] = React.useState<number>(1);
  const [agencies, setAgencies] = React.useState<Agency[] | undefined>(
    undefined,
  );

  React.useEffect(() => {
    getAgents({
      offset: (page - 1) * MAX_AGENCIES_PER_PAGE,
      limit: MAX_AGENCIES_PER_PAGE,
      country: filters.country,
    })
      .then((fetchedAgencies) => {
        setAgencies(fetchedAgencies);
      })
      .catch((error) => {
        setAppError('Failed to load contracts');
        console.error(error);
      });
  }, [page, filters]);

  React.useEffect(() => {
    getAgents({}).then((items) => {
      setMaxPage(Math.ceil(items.length / MAX_AGENCIES_PER_PAGE));
    });
  }, []);

  const minPage = Math.max(1, page - 2);
  const maxPageToPaginate = Math.min(Math.max(4, page + 2), maxPage);

  return (
    <Container.FlexCols className="w-full items-center h-full gap-8">
      <Container.Container className="grid grid-cols-3 2xl:grid-cols-4 sm:grid-cols-1 gap-4">
        {agencies?.map((agency) => (
          <AgencyView key={agency.owner} agency={agency} />
        ))}
      </Container.Container>
      {agencies?.length === 0 && (
        <Container.Container>
          <Paragraph.Center>There are no agencies to show</Paragraph.Center>
        </Container.Container>
      )}
      {maxPageToPaginate > 1 && (
        <Pagination
          page={page}
          onChange={setPage}
          min={minPage}
          max={maxPageToPaginate}
          onNext={() => setPage(Math.min(maxPage, page + 1))}
          onPrev={() => setPage(Math.max(maxPage, page - 1))}
        />
      )}
    </Container.FlexCols>
  );
};

export default AgentsTable;
