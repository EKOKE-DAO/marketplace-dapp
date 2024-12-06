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
  <Container.Card className="p-4">
    <Heading.H2 className="px-4 text-center">Buy contract tokens</Heading.H2>
    <WaitForMetamask otherwise={<LogWithMetamask />}>
      <BuyTokenFormInner {...props} />
    </WaitForMetamask>
  </Container.Card>
);

const LogWithMetamask = () => (
  <Container.FlexCols className="items-center gap-4">
    <Paragraph.Default className="!text-center">
      Please connect to MetaMask to buy tokens.
    </Paragraph.Default>
    <MetamaskConnect />
  </Container.FlexCols>
);

const BuyTokenFormInner = ({ contract }: Props) => {
  const { setAppError, setAppSuccess } = useAppContext();
  const { account, ethereum, chainId } = useConnectedMetaMask();

  const [tokenPriceForCaller, setTokenPriceForCaller] =
    React.useState<bigint>();
  const [tokenPrice, setTokenPrice] = React.useState<bigint>();
  const [tokenId, setTokenId] = React.useState<bigint | null>(null);
  const [fetchedData, setFetchedData] = React.useState(false);

  const [pendingTx, setPendingTx] = React.useState(false);

  const onBuyToken = () => {
    setPendingTx(true);
  };

  const approveUsdt = async (): Promise<Result> => {
    if (tokenPriceForCaller === undefined) {
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
    if (allowance >= tokenPriceForCaller) {
      return true;
    }

    // approve
    try {
      await usdtClient.approve(marketplaceAddress, tokenPriceForCaller);
    } catch (e) {
      console.error(`Failed to approve marketplace: ${e}`);
      return {
        error: `Failed to approve marketplace to spend ${convertToHumanReadable(tokenPriceForCaller, USDT_DECIMALS)} USDT`,
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
      .then(setTokenPriceForCaller)
      .catch((e) => {
        console.error(`Failed to load token data: ${e.message}`);
      });
    marketplaceClient
      .tokenPrice(contract.id)
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

  if (
    tokenId === null ||
    tokenPriceForCaller === undefined ||
    tokenPrice === undefined
  ) {
    return (
      <Container.FlexCols className="items-center justify-center gap-4 px-4">
        <Paragraph.Default>
          All the tokens for this contract have already been sold.
        </Paragraph.Default>
      </Container.FlexCols>
    );
  }

  const tokenPriceForCallerUsd = Number(
    convertToHumanReadable(tokenPriceForCaller, USDT_DECIMALS, true),
  );
  const tokenPriceUsd = Number(
    convertToHumanReadable(tokenPrice, USDT_DECIMALS, true),
  );
  const tokenPriceForCallerUsdString = tokenPriceForCallerUsd.toLocaleString(
    'en-US',
    {
      style: 'currency',
      currency: contract.currency,
      minimumFractionDigits: 2,
    },
  );
  const tokenPriceUsdString = tokenPriceUsd.toLocaleString('en-US', {
    style: 'currency',
    currency: contract.currency,
    minimumFractionDigits: 2,
  });

  return (
    <Container.FlexCols className="items-center gap-2">
      <span className="block text-lg">
        Buy token <strong>#{tokenId.toString()}</strong>
      </span>
      <span className="block text-text">
        Token Price: <strong>{tokenPriceForCallerUsdString}</strong>
      </span>
      {tokenPriceForCaller !== tokenPrice && (
        <Paragraph.Default className="!text-center text-xs text-text">
          Interests are applied to the contract buyer.
          <br /> Original price: {tokenPriceUsdString}
        </Paragraph.Default>
      )}
      <Button.Primary disabled={pendingTx} onClick={onBuyToken}>
        Buy token for {tokenPriceForCallerUsdString}
      </Button.Primary>
      <TaskList
        run={pendingTx}
        title={`Buying token #${tokenId.toString()}`}
        onDone={onTokenBought}
        tasks={[
          {
            label: `Approve USDT to spend ${tokenPriceForCallerUsd} USDT`,
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
