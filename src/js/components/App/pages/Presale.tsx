import * as React from 'react';
import Skeleton from 'react-loading-skeleton';

import Container from '../../reusable/Container';
import Heading from '../../reusable/Heading';
import { useAppContext } from '../AppContext';
import {
  convertToHumanReadable,
  EKOKE_DECIMALS,
  USDT_DECIMALS,
} from '../../../utils/format';
import PresaleForm from './Presale/PresaleForm';
import Info from './Presale/Info';
import EkokePresalePublicClient from '../../../web3/EkokePresalePublicClient';
import WaitForPresale from './Presale/WaitForPresale';
import { useMetaMask } from 'metamask-react';
import EkokePresaleClient from '../../../web3/EkokePresaleClient';
import { ChainId } from '../../MetamaskConnect';

const BASE_PRICE = 1_000_000;
const STEP = 20_000_000_000_000;
export const PRESALE_END_DATE = new Date('2025-03-31');
export const PRESALE_START_DATE = new Date('2025-01-15T12:00:00Z');

const Presale = () => (
  <Container.Container>
    <Heading.H1>
      <strong>EKOKE</strong> Presale
    </Heading.H1>
    <Container.FlexResponsiveRow className="gap-4 items-start justify-around w-full">
      <Container.Container className="flex-1">
        <Container.Card className="!p-0">
          <Info />
        </Container.Card>
      </Container.Container>
      <Container.Container className="flex-1">
        <Container.Card>
          <PresaleBody />
        </Container.Card>
      </Container.Container>
    </Container.FlexResponsiveRow>
  </Container.Container>
);

export interface PresaleStats {
  presaleCap: string;
  softCap: string;
  tokensSold: string;
  tokenPrice: bigint;
  tokensBeforeNextPriceIncrease: string;
  nextPrice: string;
  isOpen: boolean;
  hasFailed: boolean;
  usdtRaised: number;
  step: number;
}

const tryEthClient = async <T,>(
  fn: (client: EkokePresalePublicClient) => Promise<T>,
): Promise<T> => {
  const client = new EkokePresalePublicClient();

  for (;;) {
    try {
      return await fn(client);
    } catch (err) {
      console.error(err);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
};

const PresaleBody = () => {
  const { setAppError } = useAppContext();
  const { account, ethereum, chainId, status } = useMetaMask();

  const [stats, setStats] = React.useState<PresaleStats | null>(null);

  const fetchStats = async (): Promise<PresaleStats> => {
    let presaleCap: bigint = BigInt(0);
    let softCap: bigint = BigInt(0);
    let tokensSold: bigint = BigInt(0);
    let tokenPrice: bigint = BigInt(0);
    let isOpen: boolean = false;
    let hasFailed: boolean = false;
    if (status === 'connected') {
      const presaleClient = new EkokePresaleClient(
        ethereum,
        account,
        chainId as ChainId,
      );
      presaleCap = await presaleClient.presaleCap();
      tokensSold = await presaleClient.tokensSold();
      softCap = await presaleClient.softCap();
      tokenPrice = await presaleClient.tokenPrice();
      isOpen = await presaleClient.isOpen();
      hasFailed = await presaleClient.hasFailed();
    } else {
      presaleCap = await tryEthClient(async (client) => client.presaleCap());
      tokensSold = await tryEthClient(async (client) => client.tokensSold());
      softCap = await tryEthClient(async (client) => client.softCap());
      tokenPrice = await tryEthClient(async (client) => client.tokenPrice());
      isOpen = await tryEthClient(async (client) => client.isOpen());
      hasFailed = await tryEthClient(async (client) => client.hasFailed());
    }

    const presaleCapStr = convertToHumanReadable(
      presaleCap,
      EKOKE_DECIMALS,
      true,
    );

    const tokensBeforeNextPriceIncrease = convertToHumanReadable(
      BigInt(STEP) - (tokensSold % BigInt(STEP)),
      EKOKE_DECIMALS,
      true,
    );

    const tokensSoldStr = convertToHumanReadable(
      tokensSold,
      EKOKE_DECIMALS,
      true,
    );

    const nextPrice = tokenPrice + BigInt(BASE_PRICE);
    const softCapStr = convertToHumanReadable(softCap, USDT_DECIMALS, true);

    const usdtRaised = Number(
      convertToHumanReadable(
        await tryEthClient((client) => client.usdtRaised()),
        USDT_DECIMALS,
        true,
      ),
    );

    const step = Math.floor(Number(tokensSold / BigInt(STEP))) + 1;

    return {
      presaleCap: presaleCapStr,
      softCap: softCapStr,
      tokensSold: tokensSoldStr,
      tokenPrice,
      tokensBeforeNextPriceIncrease,
      nextPrice: convertToHumanReadable(nextPrice, USDT_DECIMALS, true),
      isOpen,
      hasFailed,
      usdtRaised,
      step,
    };
  };

  React.useEffect(() => {
    if (stats !== null) {
      return;
    }

    fetchStats()
      .then(setStats)
      .catch((err) => {
        setAppError('Failed to fetch presale stats');
        console.error(err);
      });
  }, [stats]);

  if (!stats) {
    return <Skeleton count={5} />;
  }

  const now = new Date();

  if (now < PRESALE_START_DATE) {
    return <WaitForPresale />;
  }

  return <PresaleForm {...stats} />;
};

export default Presale;
