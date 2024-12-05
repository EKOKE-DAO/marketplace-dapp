import { useConnectedMetaMask } from 'metamask-react';
import * as React from 'react';
import WaitForMetamask from '../../../../../../reusable/WaitForMetamask';
import DeferredClient from '../../../../../../../web3/DeferredClient';
import { ChainId } from '../../../../../../MetamaskConnect';
import Container from '../../../../../../reusable/Container';
import ProgressBar from '../../../../../../reusable/ProgressBar';

interface Props {
  contractId: bigint;
  installments: number;
}

const Progress = (props: Props) => (
  <WaitForMetamask>
    <InnerProgress {...props} />
  </WaitForMetamask>
);

const InnerProgress = ({ contractId, installments }: Props) => {
  const { account, ethereum, chainId } = useConnectedMetaMask();

  const [progress, setProgress] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<boolean>(false);
  const [fetchedData, setFetchedData] = React.useState<boolean>(false);

  React.useEffect(() => {
    const deferredClient = new DeferredClient(
      account,
      ethereum,
      chainId as ChainId,
    );

    deferredClient.contractProgress(contractId).then((progressBig) => {
      const progress = Number(progressBig);
      setProgress(progress);
      setFetchedData(true);
    });
    deferredClient.contractCompleted(contractId).then(setCompleted);
  }, [contractId]);

  if (!fetchedData) {
    return null;
  }

  if (completed) {
    return (
      <Container.Container>
        <span className="text-text">Mortgage payment progress</span>
        <ProgressBar
          bgColor="bg-green-500"
          textColor="text-white"
          progress={installments}
          max={installments}
        />
      </Container.Container>
    );
  }

  return (
    <Container.Container>
      <span className="text-text">Mortgage payment progress</span>
      <ProgressBar progress={progress} max={installments} />
    </Container.Container>
  );
};

export default Progress;
