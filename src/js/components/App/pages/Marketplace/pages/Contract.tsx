import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Contract } from '../../../../../data/contract';
import { mockedContracts } from '../../../../../data/mock/mocked_real_estate';
import Container from '../../../../reusable/Container';
import RealEstateCard from './Contract/RealEstateCard';
import DemoAlert from '../DemoAlert';
import TokensList from './Contract/TokensList';

const ContractPage = () => {
  const { id } = useParams<{ id: string }>();
  const [contract, setContract] = React.useState<Contract>();

  React.useEffect(() => {
    const assocContract = mockedContracts().find(
      (contract) => contract.id.toString() === id,
    );
    if (assocContract) {
      setContract(assocContract);
    }
  }, [id]);

  if (!contract) {
    return null;
  }

  return (
    <Container.Container>
      <DemoAlert />
      <Container.FlexResponsiveRow className="gap-4 w-full sm:flex-col-reverse">
        <Container.Container className="w-2/6 sm:w-full">
          <TokensList contract={contract} />
        </Container.Container>
        <Container.Container className="flex-1">
          <RealEstateCard contract={contract} />
        </Container.Container>
      </Container.FlexResponsiveRow>
    </Container.Container>
  );
};

export default ContractPage;
