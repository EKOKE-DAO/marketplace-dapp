import * as React from 'react';

import { Contract } from '../../../../../../data/contract';
import Container from '../../../../../reusable/Container';
import Heading from '../../../../../reusable/Heading';
import WaitForMetamask from '../../../../../reusable/WaitForMetamask';
import MetamaskConnect, { ChainId } from '../../../../../MetamaskConnect';
import Paragraph from '../../../../../reusable/Paragraph';
import { useConnectedMetaMask } from 'metamask-react';
import DeferredClient from '../../../../../../web3/DeferredClient';
import MarketplaceClient from '../../../../../../web3/MarketplaceClient';
import {
  convertToHumanReadable,
  USDT_DECIMALS,
} from '../../../../../../utils/format';
import Button from '../../../../../reusable/Button';
import TaskList, { Result } from '../../../../../Task/TaskList';
import { useAppContext } from '../../../../AppContext';
import UsdtClient from '../../../../../../web3/UsdtClient';
import Skeleton from 'react-loading-skeleton';

interface Props {
  contract: Contract;
}

const BuyTokenForm = (props: Props) => (
  <Container.Card className="px-0 py-0 pt-4">
    <Heading.H2 className="px-4 text-center">Buy contract tokens</Heading.H2>
    <WaitForMetamask otherwise={<LogWithMetamask />}>
      <BuyTokenFormInner {...props} />
    </WaitForMetamask>
  </Container.Card>
);

const LogWithMetamask = () => (
  <Container.FlexCols className="items-center gap-4">
    <Paragraph.Center>
      Please connect to MetaMask to buy tokens.
    </Paragraph.Center>
    <MetamaskConnect />
  </Container.FlexCols>
);

const BuyTokenFormInner = ({ contract }: Props) => {
  const { setAppError, setAppSuccess } = useAppContext();
  const { account, ethereum, chainId } = useConnectedMetaMask();

  const [tokenPrice, setTokenPrice] = React.useState<bigint>();
  const [tokenId, setTokenId] = React.useState<bigint | null>(null);
  const [fetchedData, setFetchedData] = React.useState(false);

  const [pendingTx, setPendingTx] = React.useState(false);

  const onBuyToken = () => {
    setPendingTx(true);
  };

  const approveUsdt = async (): Promise<Result> => {
    if (tokenPrice === undefined) {
      return { error: 'Token price is not available' };
    }
    // get current approval for marketplace
    const marketplaceClient = new MarketplaceClient(
      account,
      ethereum,
      chainId as ChainId,
    );
    const marketplaceAddress = marketplaceClient.marketplaceAddress();

    const usdtClient = new UsdtClient(account, ethereum, chainId as ChainId);
    // get allowance
    const allowance = await usdtClient.allowance(account, marketplaceAddress);
    // check if allowance is enough
    if (allowance >= tokenPrice) {
      return true;
    }

    // approve
    try {
      await usdtClient.approve(marketplaceAddress, tokenPrice);
    } catch (e) {
      console.error(`Failed to approve marketplace: ${e}`);
      return {
        error: `Failed to approve marketplace to spend ${convertToHumanReadable(tokenPrice, USDT_DECIMALS)} USDT`,
      };
    }

    return true;
  };

  const buyToken = async (): Promise<Result> => {
    const marketplaceClient = new MarketplaceClient(
      account,
      ethereum,
      chainId as ChainId,
    );

    try {
      await marketplaceClient.buyNextToken(contract.id);
    } catch (e) {
      console.error(`Failed to buy token: ${e}`);
      return { error: 'Failed to buy token' };
    }

    return true;
  };

  const onTokenBought = (result: Result) => {
    setPendingTx(false);

    if (result === true) {
      setAppSuccess(`Token #${tokenId} bought successfully`);
      // reload token
      loadToken();
    } else {
      setAppError(`Failed to buy token: ${result.error}`);
    }
  };

  const loadToken = () => {
    const deferredClient = new DeferredClient(
      account,
      ethereum,
      chainId as ChainId,
    );
    const marketplaceClient = new MarketplaceClient(
      account,
      ethereum,
      chainId as ChainId,
    );

    deferredClient
      .nextTokenIdToBuy(contract.id)
      .then((id) => {
        setTokenId(id);
        setFetchedData(true);
      })
      .catch((e) => {
        console.error(`Failed to load token data: ${e.message}`);
        setFetchedData(true);
      });
    marketplaceClient
      .tokenPriceForCaller(contract.id)
      .then(setTokenPrice)
      .catch((e) => {
        console.error(`Failed to load token data: ${e.message}`);
      });
  };

  React.useEffect(() => {
    loadToken();
  }, [contract]);

  if (!fetchedData) {
    return (
      <Container.Container className="w-4/6 mx-auto py-2">
        <Skeleton count={3} />
      </Container.Container>
    );
  }

  if (tokenId === null || tokenPrice === undefined) {
    return (
      <Container.FlexCols className="items-center justify-center gap-4 px-4">
        <Paragraph.Default>
          All the tokens for this contract have already been sold.
        </Paragraph.Default>
      </Container.FlexCols>
    );
  }

  const tokenPriceUsd = Number(
    convertToHumanReadable(tokenPrice, USDT_DECIMALS, true),
  );
  const tokenPriceUsdString = tokenPriceUsd.toLocaleString('en-US', {
    style: 'currency',
    currency: contract.currency,
    minimumFractionDigits: 2,
  });

  return (
    <Container.FlexCols className="items-center gap-4">
      <span className="block text-lg">
        Buy token <strong>#{tokenId.toString()}</strong>
      </span>
      <span className="block text-text">
        Token Price: {tokenPriceUsdString}
      </span>
      <Button.Primary disabled={pendingTx} onClick={onBuyToken}>
        Buy token for {tokenPriceUsdString}
      </Button.Primary>
      <TaskList
        run={pendingTx}
        title={`Buying token #${tokenId.toString()}`}
        onDone={onTokenBought}
        tasks={[
          {
            label: `Approve USDT to spend ${tokenPriceUsd} USDT`,
            action: approveUsdt,
          },
          {
            label: `Buy Deferred token #${tokenId.toString()}`,
            action: buyToken,
          },
        ]}
      />
    </Container.FlexCols>
  );
};

export default BuyTokenForm;
