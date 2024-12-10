import * as React from 'react';
import { useConnectedMetaMask } from 'metamask-react';

import { useAppContext } from '../../../AppContext';
import Wrapper from '../Wrapper';
import Container from '../../../../reusable/Container';
import Alerts from '../../../../reusable/Alerts';
import getContracts from '../../../../../api/getContracts';
import ContractCard from './Contracts/ContractCard';
import Paragraph from '../../../../reusable/Paragraph';

export const Contracts = () => {
  const { setAppError } = useAppContext();
  const { account } = useConnectedMetaMask();
  const [contracts, setContracts] = React.useState<bigint[]>([]);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  const fetchContracts = async () => {
    // get contracts for user
    setContracts(
      await getContracts({
        seller: account,
      }),
    );

    setLoaded(true);
  };

  React.useEffect(() => {
    fetchContracts().catch((error) => {
      setAppError('Failed to fetch contracts');
      console.error(error);
    });
  }, []);

  return (
    <Wrapper>
      <Container.Container>
        {loaded && (
          <span className="block text-lg">{contracts.length} contracts</span>
        )}
        {!loaded && (
          <Alerts.Warning>Loading contracts could take a while</Alerts.Warning>
        )}
        <Container.Container className="grid grid-cols-4 sm:grid-cols-2 gap-4">
          {loaded &&
            contracts.map((id) => <ContractCard key={id.toString()} id={id} />)}
        </Container.Container>
        {loaded && contracts.length === 0 && (
          <Paragraph.Center>You have no contracts</Paragraph.Center>
        )}
      </Container.Container>
    </Wrapper>
  );
};

export default Contracts;
