import * as React from 'react';
import * as Icon from 'react-icons/pi';
import { useMetaMask } from 'metamask-react';

import Logo from './MetamaskConnect/Logo';
import Button from './reusable/Button';
import { Route } from '../utils/routes';
import Link from './reusable/Link';
import Container from './reusable/Container';

export enum ChainId {
  Mainnet = '0x1',
  Sepolia = '0xaa36a7',
}

const DEFAULT_CHAIN_ID =
  process.env.NODE_ENV === 'development' ? ChainId.Sepolia : ChainId.Mainnet;

export const MetamaskProfile = () => {
  const {
    status,
    connect,
    chainId: currentChainId,
    switchChain,
  } = useMetaMask();

  const disabled = ['initializing', 'connecting'].includes(status);

  const onClick = () => {
    if (status === 'unavailable') {
      // open a new tab to install metamask
      window.open('https://metamask.io/download/', '_blank');
      return undefined;
    }

    if (status === 'notConnected') {
      if (DEFAULT_CHAIN_ID !== currentChainId) {
        switchChain(DEFAULT_CHAIN_ID);
      }
      return connect();
    }

    if (status === 'connected') {
      // go to profile page
      window.location.href = Route.url(Route.PROFILE);
      return undefined;
    }

    return undefined;
  };

  const text = () => {
    if (status === 'initializing') return 'Initializing…';
    if (status === 'unavailable') return 'Profile';
    if (status === 'notConnected') return 'Login';
    if (status === 'connecting') return 'Connecting…';
    if (status === 'connected') return 'Profile';
    return undefined;
  };

  React.useEffect(() => {
    if (currentChainId && currentChainId !== DEFAULT_CHAIN_ID) {
      switchChain(DEFAULT_CHAIN_ID);
    }
  }, [switchChain]);

  const isConnected = status === 'connected';

  if (isConnected) {
    return (
      <Container.Container className="w-fit">
        <Link.Button href={Route.PROFILE} className="my-0 !mb-0 sm:text-xs">
          <Icon.PiUserCircleFill size={24} className="mr-2 inline" />
          {text()}
        </Link.Button>
      </Container.Container>
    );
  }

  return (
    <Container.Container className="w-fit">
      <Button.Primary
        className="my-0 !mb-0 sm:text-xs"
        onClick={onClick}
        disabled={disabled}
      >
        <Icon.PiUserCircleFill size={24} className="mr-2 inline" />
        {text()}
      </Button.Primary>
    </Container.Container>
  );
};

const MetamaskConnect = () => {
  const {
    status,
    connect,
    account,
    chainId: currentChainId,
    switchChain,
  } = useMetaMask();

  const disabled = ['initializing', 'connecting', 'connected'].includes(status);

  const onClick = () => {
    if (status === 'unavailable') {
      // open a new tab to install metamask
      window.open('https://metamask.io/download/', '_blank');
      return undefined;
    }

    if (status === 'notConnected') {
      if (DEFAULT_CHAIN_ID !== currentChainId) {
        switchChain(DEFAULT_CHAIN_ID);
      }
      return connect();
    }
    return undefined;
  };

  const addressText = (address: string) => {
    return `${address.substring(0, 6)}…${address.substring(
      address.length - 4,
    )}`;
  };

  const text = () => {
    if (status === 'initializing') return 'Initializing…';
    if (status === 'unavailable') return 'Click to install MetaMask';
    if (status === 'notConnected') return 'Login';
    if (status === 'connecting') return 'Connecting…';
    if (status === 'connected') return addressText(account);
    return undefined;
  };

  React.useEffect(() => {
    if (currentChainId && currentChainId !== DEFAULT_CHAIN_ID) {
      switchChain(DEFAULT_CHAIN_ID);
    }
  }, [switchChain]);

  return (
    <Button.Alternative
      className="my-0 !mb-0 sm:text-xs"
      onClick={onClick}
      disabled={disabled}
    >
      <Logo />
      {text()}
    </Button.Alternative>
  );
};

export default MetamaskConnect;
