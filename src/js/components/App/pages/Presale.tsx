import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useConnectedMetaMask } from 'metamask-react';

import Container from '../../reusable/Container';
import WaitForMetamask from '../../reusable/WaitForMetamask';
import Heading from '../../reusable/Heading';
import MetamaskConnect, { ChainId } from '../../MetamaskConnect';
import EkokePresaleClient from '../../../web3/EkokePresaleClient';
import { useAppContext } from '../AppContext';
import {
  convertToHumanReadable,
  EKOKE_DECIMALS,
  USDT_DECIMALS,
} from '../../../utils/format';
import PresaleForm from './Presale/PresaleForm';
import Info from './Presale/Info';
import Paragraph from '../../reusable/Paragraph';

const BASE_PRICE = 1_000_000;
const STEP = 100_000_000_000;

const Presale = () => (
  <Container.Container>
    <Heading.H1>EKOKE Presale</Heading.H1>
    <Container.FlexResponsiveRow className="gap-4 items-start justify-around w-full">
      <Container.Container className="flex-1">
        <Container.Card className="!p-0">
          <Info />
        </Container.Card>
      </Container.Container>
      <Container.Container className="flex-1">
        <Container.Card>
          <WaitForMetamask otherwise={<LoginWithMetamask />}>
            <PresaleBody />
          </WaitForMetamask>
        </Container.Card>
      </Container.Container>
    </Container.FlexResponsiveRow>
  </Container.Container>
);

const LoginWithMetamask = () => (
  <Container.FlexCols className="items-center">
    <Paragraph.Default className="!text-center text-lg">
      Please login with <strong>Metamask</strong> to join the presale.
    </Paragraph.Default>
    <MetamaskConnect />
  </Container.FlexCols>
);

export interface PresaleStats {
  balance: string;
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

const PresaleBody = () => {
  const { account, ethereum, chainId } = useConnectedMetaMask();
  const { setAppError } = useAppContext();

  const [stats, setStats] = React.useState<PresaleStats | null>(null);

  const fetchStats = async (): Promise<PresaleStats> => {
    const client = new EkokePresaleClient(
      account,
      ethereum,
      chainId as ChainId,
    );

    const balance = convertToHumanReadable(
      await client.ekokeBalance(),
      EKOKE_DECIMALS,
      true,
    );
    const presaleCap = convertToHumanReadable(
      await client.presaleCap(),
      EKOKE_DECIMALS,
      true,
    );
    const tokensSoldNum = await client.tokensSold();

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
    const tokenPrice = await client.tokenPrice();

    const nextPrice = tokenPrice + BigInt(BASE_PRICE);

    const softCap = convertToHumanReadable(
      await client.softCap(),
      USDT_DECIMALS,
      true,
    );

    const isOpen = await client.isOpen();
    const hasFailed = await client.hasFailed();

    const usdtRaised = Number(
      convertToHumanReadable(await client.usdtRaised(), USDT_DECIMALS, true),
    );

    const step = Math.floor(Number(tokensSoldNum / BigInt(STEP))) + 1;

    return {
      balance,
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

  return <PresaleForm {...stats} />;
};

export default Presale;
