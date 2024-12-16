import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Contract } from '../../../../../data/contract';
import Container from '../../../../reusable/Container';
import RealEstateCard from './Contract/RealEstateCard';
import getContractById from '../../../../../api/getContractById';
import { useAppContext } from '../../../AppContext';
import Sidebar from './Contract/Sidebar';

const ContractPage = () => {
  const { setAppError } = useAppContext();
  const { id } = useParams<{ id: string }>();
  const [contract, setContract] = React.useState<Contract>();

  React.useEffect(() => {
    const idNum = Number(id);
    getContractById(BigInt(idNum))
      .then((assocContract) => {
        setContract(assocContract);
      })
      .catch((error) => {
        setAppError('Failed to fetch contract');
        console.error(error);
      });
  }, [id]);

  if (!contract) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{contract.realEstate.name}</title>
        <meta name="description" content={contract.realEstate.description} />
        <meta property="og:title" content={contract.realEstate.name} />
        <meta
          property="og:description"
          content={contract.realEstate.description}
        />
      </Helmet>
      <Container.Container>
        <Container.FlexResponsiveRow className="gap-4 w-full sm:flex-col-reverse">
          <Container.Container className="w-3/12 sm:w-full">
            <Sidebar contract={contract} />
          </Container.Container>
          <Container.Container className="flex-1">
            <RealEstateCard contract={contract} />
          </Container.Container>
        </Container.FlexResponsiveRow>
      </Container.Container>
    </>
  );
};

export default ContractPage;
