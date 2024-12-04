import * as React from 'react';
import { useMetaMask } from 'metamask-react';

import Logo from './MetamaskConnect/Logo';
import Button from './reusable/Button';
import Container from './reusable/Container';

export enum ChainId {
  Mainnet = '0x1',
  Sepolia = '0xaa36a7',
}

const MetamaskConnect = () => {
  const {
    status,
    connect,
    account,
    chainId: currentChainId,
    switchChain,
  } = useMetaMask();

  const disabled = [
    'initializing',
    'unavailable',
    'connecting',
    'connected',
  ].includes(status);

  const onClick = () => {
    if (status === 'notConnected') {
      if (ChainId.Mainnet !== currentChainId) {
        switchChain(ChainId.Mainnet);
      }
      return connect();
    }
    return undefined;
  };

  const addressText = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4,
    )}`;
  };

  const text = () => {
    if (status === 'initializing') return 'Initializing...';
    if (status === 'unavailable') return 'MetaMask not available';
    if (status === 'notConnected') return 'Connect to MetaMask';
    if (status === 'connecting') return 'Connecting...';
    if (status === 'connected') return addressText(account);
    return undefined;
  };

  React.useEffect(() => {
    if (currentChainId && currentChainId !== ChainId.Mainnet) {
      switchChain(ChainId.Mainnet);
    }
  }, [switchChain]);

  return (
    <Container.FlexRow className="items-center gap-8">
      <Button.Alternative
        className="my-0 !mb-0"
        onClick={onClick}
        disabled={disabled}
      >
        <Logo />
        {text()}
      </Button.Alternative>
    </Container.FlexRow>
  );
};

export default MetamaskConnect;