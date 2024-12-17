import * as React from 'react';
import * as FiIcon from 'react-icons/fi';
import { useConnectedMetaMask } from 'metamask-react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import {
  convertToHumanReadable,
  EKOKE_DECIMALS,
} from '../../../../utils/format';
import Button from '../../../reusable/Button';
import EkokePresaleClient from '../../../../web3/EkokePresaleClient';
import { ChainId } from '../../../MetamaskConnect';
import { useAppContext } from '../../AppContext';
import Paragraph from '../../../reusable/Paragraph';

const ClaimForm = () => {
  const { setAppError, setAppSuccess } = useAppContext();
  const { account, ethereum, chainId } = useConnectedMetaMask();

  const [balance, setBalance] = React.useState<bigint>();
  const [pendingTx, setPendingTx] = React.useState(false);
  const [claimed, setClaimed] = React.useState(false);

  const onClaimTokens = async () => {
    setPendingTx(true);
    const presaleClient = new EkokePresaleClient(
      account,
      ethereum,
      chainId as ChainId,
    );

    try {
      await presaleClient.claimTokens();
      setClaimed(true);
      setPendingTx(false);
      setAppSuccess('Tokens claimed successfully');
    } catch (e) {
      console.error(`Failed to claim tokens: ${e}`);
      setAppError('Failed to claim tokens');
      setPendingTx(false);
    }
  };

  React.useEffect(() => {
    const presaleClient = new EkokePresaleClient(
      account,
      ethereum,
      chainId as ChainId,
    );
    presaleClient
      .ekokeBalance()
      .then(setBalance)
      .catch((err) => {
        console.error(`Failed to get EKOKE balance: ${err}`);
        setAppError('Failed to get EKOKE balance');
      });
  }, []);

  if (balance === undefined) {
    return null;
  }

  return (
    <Container.FlexCols className="text-left gap-4">
      <form onSubmit={onClaimTokens}>
        <Container.FlexCols className="justify-center items-center">
          <Heading.H3>Claim your EKOKE tokens</Heading.H3>
          {balance > BigInt(0) && !claimed ? (
            <Paragraph.Default className="block text-lg text-text !text-center">
              You can claim{' '}
              {convertToHumanReadable(balance, EKOKE_DECIMALS, true)} EKOKE
              tokens
            </Paragraph.Default>
          ) : (
            <Paragraph.Default className="block text-lg text-text !text-center">
              You have no EKOKE tokens to claim
            </Paragraph.Default>
          )}
          {balance > BigInt(0) && (
            <Button.Cta onClick={onClaimTokens} disabled={pendingTx || claimed}>
              Claim your Tokens
              {pendingTx ? (
                <FiIcon.FiLoader
                  className="text-white animate-spin inline ml-2"
                  size={24}
                />
              ) : (
                <FiIcon.FiArrowRight
                  className="text-white inline ml-2"
                  size={24}
                />
              )}
            </Button.Cta>
          )}
        </Container.FlexCols>
      </form>
    </Container.FlexCols>
  );
};

export default ClaimForm;
