import { useMetaMask } from 'metamask-react';
import * as React from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  otherwise?: React.ReactNode;
}

const WaitForMetamask = ({ children, otherwise }: Props) => {
  const { status } = useMetaMask();

  if (status === 'connected') {
    return <>{children}</>;
  }

  return otherwise ? otherwise : null;
};

export default WaitForMetamask;
