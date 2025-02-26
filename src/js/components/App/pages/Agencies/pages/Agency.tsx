import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Agency } from '../../../../../data/agency';
import Container from '../../../../reusable/Container';
import { useAppContext } from '../../../AppContext';
import { getAgentByPrincipal } from '../../../../../api/getAgent';
import AgencyCard from './Agency/AgencyCard';
import Sidebar from './Agency/Sidebar';
import { Helmet } from '../../../../SeoEngine';

const AgencyPage = () => {
  const { setAppError } = useAppContext();
  const { id } = useParams<{ id: string }>();
  const [agency, setAgency] = React.useState<Agency>();

  React.useEffect(() => {
    if (!id) {
      return;
    }

    getAgentByPrincipal(id)
      .then(setAgency)
      .catch((error) => {
        setAppError('Failed to fetch agency');
        console.error(error);
      });
  }, [id]);

  if (!agency) {
    return null;
  }

  const seoDescription = `Real estate agency ${agency.name} on EKOKE DAO is proposing real-estate properties on the blockchain to be bought using the EKOKE DAO system`;

  return (
    <>
      <Helmet>
        <title>{agency.name}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={agency.name} />
        <meta property="og:description" content={seoDescription} />
      </Helmet>
      <Container.Container>
        <Container.FlexResponsiveRow className="gap-4 w-full sm:flex-col-reverse">
          <Container.Container className="w-3/12 sm:w-full">
            <Sidebar agency={agency} />
          </Container.Container>
          <Container.Container className="flex-1">
            <AgencyCard agency={agency} />
          </Container.Container>
        </Container.FlexResponsiveRow>
      </Container.Container>
    </>
  );
};

export default AgencyPage;
