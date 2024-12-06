import * as React from 'react';
import * as Icon from 'react-feather';
import { useConnectedMetaMask } from 'metamask-react';

import { useAppContext } from '../../AppContext';
import TaskList, { Result } from '../../../Task/TaskList';
import EkokePresaleClient from '../../../../web3/EkokePresaleClient';
import { ChainId } from '../../../MetamaskConnect';
import UsdtClient from '../../../../web3/UsdtClient';
import {
  convertToHumanReadable,
  EKOKE_DECIMALS,
  USDT_DECIMALS,
} from '../../../../utils/format';
import Container from '../../../reusable/Container';
import Skeleton from 'react-loading-skeleton';
import Input from '../../../reusable/Input';
import Button from '../../../reusable/Button';
import Heading from '../../../reusable/Heading';

interface Props {
  tokenPrice: bigint;
}

const BuyForm = ({ tokenPrice }: Props) => {
  const { setAppError, setAppSuccess } = useAppContext();
  const { account, ethereum, chainId } = useConnectedMetaMask();

  const [amount, setAmount] = React.useState<string>('1');
  const [balance, setBalance] = React.useState<bigint>();
  const [pendingTx, setPendingTx] = React.useState(false);

  const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const loadBalance = () => {
    const presaleClient = new EkokePresaleClient(
      account,
      ethereum,
      chainId as ChainId,
    );

    presaleClient
      .ekokeBalance()
      .then((balance) => {
        setBalance(balance);
      })
      .catch((e) => {
        console.error(`Failed to load balance: ${e}`);
        setAppError('Failed to load balance');
      });
  };

  const onBuyTokens = () => {
    const tokensAmount = BigInt(amount);
    if (tokensAmount === BigInt(0)) {
      setAppError('You cannot buy 0 tokens');
      return;
    }

    setPendingTx(true);
  };

  const approveUsdt = async (): Promise<Result> => {
    const totalPrice = BigInt(amount) * tokenPrice;

    if (tokenPrice === undefined) {
      return { error: 'Token price is not available' };
    }
    // get current approval for marketplace
    const presaleClient = new EkokePresaleClient(
      account,
      ethereum,
      chainId as ChainId,
    );
    const presaleAddress = presaleClient.presaleAddress();

    const usdtClient = new UsdtClient(account, ethereum, chainId as ChainId);
    // get allowance
    const allowance = await usdtClient.allowance(account, presaleAddress);
    // check if allowance is enough
    if (allowance >= totalPrice) {
      return true;
    }

    // approve
    try {
      await usdtClient.approve(presaleAddress, totalPrice);
    } catch (e) {
      console.error(`Failed to approve marketplace: ${e}`);
      return {
        error: `Failed to approve marketplace to spend ${convertToHumanReadable(totalPrice, USDT_DECIMALS)} USDT`,
      };
    }

    return true;
  };

  const buyTokens = async (): Promise<Result> => {
    const presaleClient = new EkokePresaleClient(
      account,
      ethereum,
      chainId as ChainId,
    );
    const tokensAmount = BigInt(amount);

    try {
      await presaleClient.buyTokens(tokensAmount);
    } catch (e) {
      console.error(`Failed to buy tokens: ${e}`);
      return { error: 'Failed to buy tokens' };
    }

    return true;
  };

  const onTokensBought = (result: Result) => {
    const tokensAmount = BigInt(amount);
    const totalPrice = (tokensAmount * tokenPrice) / BigInt(1_000_000);
    setPendingTx(false);

    if (result === true) {
      setAppSuccess(
        `You have successfully bought ${tokensAmount.toString()} for ${totalPrice.toString()} USDT`,
      );
      // reload token
      loadBalance();
    } else {
      setAppError(`Failed to buy token: ${result.error}`);
    }
  };

  React.useEffect(() => {
    loadBalance();
  }, [account]);

  if (balance === undefined) {
    return (
      <Container.Container>
        <Skeleton count={7} />
      </Container.Container>
    );
  }

  const usdToPay = (BigInt(amount) * tokenPrice) / BigInt(1_000_000);
  const amountNum = Number(amount);

  return (
    <Container.FlexCols className="text-left gap-4">
      <form onSubmit={onBuyTokens}>
        <Container.FlexCols className="justify-center items-center">
          <Heading.H3>Buy EKOKE</Heading.H3>
          <Input.IconInput
            id="presale-buy-form-amount"
            icon={<Icon.ShoppingBag />}
            type="number"
            min={1}
            max={1_000}
            step={1}
            placeholder="123"
            label="EKOKE Amount"
            value={amount}
            onChange={onAmountChange}
          />
          <Input.IconInput
            id="presale-buy-dollars-amount"
            icon={<Icon.DollarSign />}
            disabled
            label="You Pay"
            value={usdToPay.toString()}
          />
          <Button.Primary
            onClick={onBuyTokens}
            disabled={pendingTx || amountNum === 0}
          >
            Buy {amount} EKOKE for {usdToPay.toString()} USDT
          </Button.Primary>
        </Container.FlexCols>
      </form>
      <hr />
      <Container.Container>
        <span className="text-text text-center block">
          You currently have a balance of{' '}
          <strong>
            {convertToHumanReadable(balance, EKOKE_DECIMALS, true)} EKOKE
          </strong>
        </span>
      </Container.Container>
      <TaskList
        run={pendingTx}
        title={`Buying ${amount} EKOKE for ${usdToPay.toString()} USDT`}
        tasks={[
          {
            label: `Approve ${usdToPay.toString()} USDT`,
            action: approveUsdt,
          },
          {
            label: `Buy ${amount} EKOKE`,
            action: buyTokens,
          },
        ]}
        onDone={onTokensBought}
      />
    </Container.FlexCols>
  );
};

export default BuyForm;
