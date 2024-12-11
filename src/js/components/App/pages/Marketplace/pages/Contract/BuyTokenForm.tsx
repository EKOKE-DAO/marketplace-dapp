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
  EKOKE_DECIMALS,
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
  const [reward, setReward] = React.useState<bigint | null>(null);
  const [fetchedData, setFetchedData] = React.useState(false);
  const [userIsSeller, setUserIsSeller] = React.useState(false);

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
      loadToken()
        .then(() => {
          console.log('Token reloaded');
        })
        .catch((e) => {
          console.error(`Failed to reload token: ${e}`);
          setAppError(`Failed to reload token: ${e}`);
        });
    } else {
      setAppError(`Failed to buy token: ${result.error}`);
    }
  };

  const loadToken = async () => {
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

    const gotTokenId = await deferredClient.nextTokenIdToBuy(contract.id);
    setTokenId(gotTokenId);

    const gotTokenPriceForCaller = await marketplaceClient.tokenPriceForCaller(
      contract.id,
    );
    setTokenPriceForCaller(gotTokenPriceForCaller);

    const gotTokenPrice = await marketplaceClient.tokenPrice(contract.id);
    setTokenPrice(gotTokenPrice);

    const deferredContract = await deferredClient.getContract(contract.id);
    const tokenOwner = await deferredClient.ownerOf(gotTokenId);
    // check whether token is owned by a seller
    const isOwnedBySeller = deferredContract.sellers.some(
      (seller) => seller.seller.toLowerCase() === tokenOwner.toLowerCase(),
    );
    if (isOwnedBySeller) {
      console.log(
        `Token ${gotTokenId} is currently owned by a seller (${tokenOwner})`,
      );
      setReward(deferredContract.ekokeReward);
    } else {
      console.log(
        `Token ${gotTokenId} is not owned by a seller (${tokenOwner})`,
      );
      setReward(null);
    }

    const isUserSeller = deferredContract.sellers.some(
      (seller) => seller.seller.toLowerCase() === account.toLowerCase(),
    );

    setUserIsSeller(isUserSeller);

    setFetchedData(true);
  };

  React.useEffect(() => {
    loadToken()
      .then(() => {
        console.log('Token loaded');
      })
      .catch((e) => {
        console.error(`Failed to load token: ${e}`);
        setAppError(`Failed to load token: ${e}`);
      });
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
        <Paragraph.Default className="!text-center">
          All the tokens for this contract have already been sold.
        </Paragraph.Default>
      </Container.FlexCols>
    );
  }

  if (userIsSeller) {
    return (
      <Container.FlexCols className="items-center justify-center gap-4 px-4">
        <Paragraph.Default className="!text-center">
          You are the seller of this contract. <br />
          You cannot buy tokens.
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
      <Button.Cta disabled={pendingTx} onClick={onBuyToken}>
        Buy token for {tokenPriceForCallerUsdString}
      </Button.Cta>
      {reward !== null && (
        <Paragraph.Default className="!text-center text-text">
          You will receive a reward of
          <br />
          <strong>
            {convertToHumanReadable(reward, EKOKE_DECIMALS)} EKOKE
          </strong>
          <br />
          for buying this token.
        </Paragraph.Default>
      )}
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
