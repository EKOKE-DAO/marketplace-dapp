import * as React from 'react';
import * as IconsFa from 'react-icons/fa6';
import jazzicon from '@metamask/jazzicon';
import { useConnectedMetaMask } from 'metamask-react';

import Container from '../../../../reusable/Container';
import { getENSName } from '../../../../../web3/Ens';
import Link from '../../../../reusable/Link';

const addressToSeed = (address: string): number => {
  // Rimuovi il prefisso "0x" e prendi i primi 8 caratteri
  const trimmedAddress = address.toLowerCase().replace(/^0x/, '').slice(0, 8);

  // Converti la stringa esadecimale in un numero intero
  return parseInt(trimmedAddress, 16);
};

const Header = () => {
  const { account, ethereum } = useConnectedMetaMask();

  const [ensName, setEnsName] = React.useState<string | null>(null);
  const iconContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const icon = jazzicon(150, addressToSeed(account));
    // remove all children
    iconContainer.current?.childNodes.forEach((child) => {
      iconContainer.current?.removeChild(child);
    });
    iconContainer.current?.appendChild(icon);

    getENSName(account).then(setEnsName).catch(console.error);
  }, [account, ethereum]);

  const shortenedAddress = `${account.substring(0, 6)}…${account.substring(
    account.length - 4,
  )}`;

  return (
    <Container.FlexResponsiveRow className="sm:justify-center items-center sm:items-center gap-4">
      <div
        ref={iconContainer}
        className="rounded-full overflow-hidden border-white border-8 border-primary-500 shadow-xl"
      />
      <Container.FlexCols className="gap-2">
        <Container.Container>
          {ensName ? (
            <span className="text-xl">{ensName}</span>
          ) : (
            <span className="text-xl">{shortenedAddress}</span>
          )}
        </Container.Container>
        <Container.Container>
          <IconsFa.FaEthereum className="inline text-text mr-2" size={20} />
          <Link.Default
            className="text-text"
            href={`https://etherscan.io/address/${account}`}
          >
            {account}
          </Link.Default>
        </Container.Container>
      </Container.FlexCols>
    </Container.FlexResponsiveRow>
  );
};

export default Header;
