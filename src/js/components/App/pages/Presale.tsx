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
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
};

const PresaleBody = () => {
  const { setAppError } = useAppContext();

  const [stats, setStats] = React.useState<PresaleStats | null>(null);

  const fetchStats = async (): Promise<PresaleStats> => {
    const presaleCap = await tryEthClient(async (client) =>
      convertToHumanReadable(await client.presaleCap(), EKOKE_DECIMALS, true),
    );

    const tokensSoldNum = await tryEthClient(async (client) =>
      client.tokensSold(),
    );

    const tokensBeforeNextPriceIncrease = convertToHumanReadable(
      BigInt(STEP) - (tokensSoldNum % BigInt(STEP)),
      EKOKE_DECIMALS,
      true,
    );

    const tokensSold = convertToHumanReadable(
      tokensSoldNum,
      EKOKE_DECIMALS,
      true,
    );
    const tokenPrice = await tryEthClient(async (client) =>
      client.tokenPrice(),
    );
    await new Promise((resolve) => setTimeout(resolve, 100));

    const nextPrice = tokenPrice + BigInt(BASE_PRICE);

    const softCap = convertToHumanReadable(
      await tryEthClient(async (client) => client.softCap()),
      USDT_DECIMALS,
      true,
    );

    const isOpen = await tryEthClient(async (client) => client.isOpen());
    const hasFailed = await tryEthClient(async (client) => client.hasFailed());

    const usdtRaised = Number(
      convertToHumanReadable(
        await tryEthClient((client) => client.usdtRaised()),
        USDT_DECIMALS,
        true,
      ),
    );

    const step = Math.floor(Number(tokensSoldNum / BigInt(STEP))) + 1;

    return {
      presaleCap,
      softCap,
      tokensSold,
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
    fetchStats()
      .then(setStats)
      .catch((err) => {
        setAppError('Failed to fetch presale stats');
        console.error(err);
      });
  }, []);

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
