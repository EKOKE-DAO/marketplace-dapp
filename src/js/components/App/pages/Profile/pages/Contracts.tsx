import * as React from 'react';
import { useConnectedMetaMask } from 'metamask-react';

import { useAppContext } from '../../../AppContext';
import Wrapper from '../Wrapper';
import Container from '../../../../reusable/Container';
import Alerts from '../../../../reusable/Alerts';
import getContracts from '../../../../../api/getContracts';
import ContractCard from './Contracts/ContractCard';
import Paragraph from '../../../../reusable/Paragraph';
import { signMessage } from '../../../../../web3/sign';

export const Contracts = () => {
  const { setAppError, signature, setSignature } = useAppContext();
  const { account, ethereum } = useConnectedMetaMask();
  const [contracts, setContracts] = React.useState<bigint[]>([]);
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [signatureRequested, setSignatureRequested] =
    React.useState<boolean>(false);

  const fetchContracts = async () => {
    // get contracts for user
    setContracts(
      await getContracts({
        seller: account,
      }),
    );

    setLoaded(true);
  };

  // sign
  React.useEffect(() => {
    if (!signature && ethereum && !signatureRequested) {
      setSignatureRequested(true);
      // sign with metamask
      signMessage(account, ethereum)
        .then((signedMsg) => {
          setSignature(signedMsg);
          setSignatureRequested(false);
        })
        .catch((err) => {
          setAppError('Failed to sign message. Please try again');
          console.error(err);
          setSignatureRequested(false);
        });
    }
  }, [signature, ethereum, signatureRequested]);

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
        {loaded && !signature && (
          <Alerts.Danger>
            You need to sign with Metamask in to view your contracts
          </Alerts.Danger>
        )}
        <Container.Container className="grid grid-cols-2 sm:grid-cols-1 gap-4">
          {loaded &&
            signature &&
            contracts.map((id) => (
              <ContractCard key={id.toString()} signature={signature} id={id} />
            ))}
        </Container.Container>
        {loaded && contracts.length === 0 && (
          <Paragraph.Center>You have no contracts</Paragraph.Center>
        )}
      </Container.Container>
    </Wrapper>
  );
};

export default Contracts;
