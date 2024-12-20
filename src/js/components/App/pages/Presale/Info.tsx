import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../reusable/Container';
import Paragraph from '../../../reusable/Paragraph';
import Heading from '../../../reusable/Heading';
import Input from '../../../reusable/Input';
import Link from '../../../reusable/Link';
import { PRESALE_END_DATE } from '../Presale';
import { EKOKE_ADDRESS, EKOKE_PRESALE_ADDRESS } from '../../../../web3/tokens';

import PresaleImg from '../../../../../assets/images/presale.webp';

const Info = () => {
  const [copied, setCopied] = React.useState(false);

  const onAddressCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(EKOKE_ADDRESS);
  };

  return (
    <Container.Container>
      <Container.Container>
        <img
          className="object-cover w-full"
          src={PresaleImg}
          alt="presale illustration"
          width={720}
          height={360}
        />
      </Container.Container>
      <Container.FlexCols className="p-4 gap-4 w-full">
        <Container.FlexCols className="text-center">
          <Heading.H2 className="text-center">
            Add <strong>EKOKE</strong> token to your wallet
          </Heading.H2>
          <Container.FlexRow className="items-center justify-center gap-4 mb-2">
            <Input.Input
              id="ekoke-address"
              type="text"
              value={EKOKE_ADDRESS}
              readOnly
              className="!p-2 text-center text-xl sm:text-sm"
              containerClassName="mb-0"
            />
            <button onClick={onAddressCopy}>
              {copied ? (
                <Icon.FiCheck className="cursor-pointer" />
              ) : (
                <Icon.FiCopy className="cursor-pointer" />
              )}
            </button>
          </Container.FlexRow>
          <span className="block text-text text-lg">
            Decimals: <strong>9</strong>
          </span>
        </Container.FlexCols>
        <Container.Container>
          <Heading.H2 className="text-center">Introduction</Heading.H2>
          <Paragraph.Default>
            The <strong>EKOKE</strong> token is an <strong>ERC20</strong> token
            on the <strong>Ethereum</strong> blockchain. The EKOKE token is used
            as a reward for the EKOKE dao community when they buy or partecipate
            in the real estate marketplace.
          </Paragraph.Default>
          <Heading.H2 className="text-center">Presale purpose</Heading.H2>
          <Paragraph.Default>
            The purpose of the presale is to raise funds for the development of
            the EKOKE DAO, the EKOKE marketplace and the EKOKE token. Also, we
            need to raise funds to pay for marketing in order to build our
            real-estate network worldwide, and finally to add liquidity to the{' '}
            <strong>Liquidity Bootstrapping Pool</strong>.
          </Paragraph.Default>
          <Heading.H2 className="text-center">
            Presale raised funds destination
          </Heading.H2>
          <Paragraph.Default>
            We have a clear plan on how to use the funds raised during the
            presale. The funds will be used for the following purposes:
          </Paragraph.Default>
          <ul className="list-disc mx-12">
            <li>
              <strong>20% - Up to 200.000$</strong>: Goes to the team for paying
              the development costs.
            </li>
            <li>
              <strong>20% - Up to 50.000$</strong>: Will be used for paying a
              security audit.
            </li>
            <li>
              <strong>20% - Up to 150.000$</strong>: Will be used for marketing
              and partnerships.
            </li>
            <li>
              <strong>40%</strong>: Will be used to add liquidity to the
              Liquidity Bootstrapping Pool.
            </li>
            <li>
              <strong>Unused funds</strong> will be used for further development
              and to reserve even more liquidity for other exchanges.
            </li>
          </ul>
          <Paragraph.Default className="!text-xs pt-2">
            When we say <strong>up to</strong> we mean that we will reserve the{' '}
            <strong>
              Minimum value between the percentage and the maximum value
            </strong>
            . For instance if we raise 200.000$ we will reserve 40.000$ for the
            team, 40.000$ for the security audit, 40.000$ for marketing and
            partnerships and 80.000$ for the Liquidity Bootstrapping Pool.
            <br />
            While for instance if we raise 2.000.000$ we will reserve 200.000$
            for the team, 50.000$ for the security audit, 150.000$ for marketing
            and partnerships and more than 1.000.000$ for the Liquidity
            Bootstrapping Pool.
          </Paragraph.Default>
          <Heading.H2 className="text-center">Presale details</Heading.H2>
          <Paragraph.Default>
            The presale will be held on the Ethereum blockchain using our
            Presale smart contract{' '}
            <Link.Paragraph
              href={`https://etherscan.io/address/${EKOKE_PRESALE_ADDRESS}`}
              target="_blank"
              className="sm:!text-xs"
            >
              {EKOKE_PRESALE_ADDRESS}
            </Link.Paragraph>
            . The presale will start with a <strong>soft cap</strong> of{' '}
            <strong>{(50_000).toLocaleString('en-US')} USDT</strong> and a{' '}
            <strong>hard cap</strong> of{' '}
            <strong>{(444_005.05).toLocaleString('en-US')} EKOKE</strong>
            .
            <br />
            The <strong>Base price</strong> will be set at{' '}
            <strong>1 USDT = 1 EKOKE</strong>. The price will increase by 1 USDT
            each <strong>{(20_000).toLocaleString('en-US')} EKOKE</strong> sold.
          </Paragraph.Default>
          <Heading.H2 className="text-center">Claim tokens</Heading.H2>
          <Paragraph.Default>
            Participants will be able to claim their EKOKE tokens directly on
            the <strong>presale</strong> page or by calling the{' '}
            <strong>claimTokens()</strong> method on the{' '}
            <strong>Presale</strong> smart contract. All these operations can be
            verified at any time on <strong>Etherscan</strong> by visiting the
            smart contract page at{' '}
            <Link.Paragraph
              href={`https://etherscan.io/address/${EKOKE_PRESALE_ADDRESS}`}
              target="_blank"
            >
              etherscan.io
            </Link.Paragraph>
            .
          </Paragraph.Default>
          <Heading.H2 className="text-center">Refunds</Heading.H2>
          <Paragraph.Default>
            In case the <strong>soft cap</strong> is not reached by the end of
            the presale, all the funds will be refunded to the participants.
            Participants will be able to withdraw their USDT invested at any
            time directly on the <strong>presale</strong> page or by calling the{' '}
            <strong>refund()</strong> method on the <strong>Presale</strong>{' '}
            smart contract. All these operations can be verified at any time on{' '}
            <strong>Etherscan</strong> by visiting the smart contract page at{' '}
            <Link.Paragraph
              href={`https://etherscan.io/address/${EKOKE_PRESALE_ADDRESS}`}
              target="_blank"
            >
              etherscan.io
            </Link.Paragraph>
            .
          </Paragraph.Default>
          <Container.Container>
            <Heading.H2 className="text-center">Presale end date</Heading.H2>
            <Container.FlexCols className="items-center justify-center gap-4">
              <span className="block text-lg text-center">
                The presale ends on{' '}
                <strong>{PRESALE_END_DATE.toLocaleDateString('en-US')}</strong>
              </span>
              <Link.Button
                className="w-fit"
                target="_blank"
                href={`https://www.google.com/calendar/render?action=TEMPLATE&text=EKOKE+Presale+claim&dates=20250331T000000Z/20250331T000000Z&details=Visit+https%3A%2F%2Fekokedao.com%2Fpresale+to+claim+your+tokens&sf=true&output=xml`}
              >
                <Icon.FiBell className="mr-2 inline" />
                Set a reminder on Google Calendar
              </Link.Button>
            </Container.FlexCols>
          </Container.Container>
          <Heading.H2 className="text-center">Terms and conditions</Heading.H2>
          <Paragraph.Default className="text-sm">
            The EKOKE presale is a high-risk investment. The EKOKE token is not
            a security and does not represent any ownership in the EKOKE DAO or
            the EKOKE marketplace. The EKOKE token is not a financial product
            and is not regulated by any financial authority. The EKOKE token is
            a utility token used to reward the EKOKE DAO community for their
            participation in the real estate marketplace. The EKOKE token is not
            a financial investment and does not guarantee any return on
            investment. The EKOKE token is not a stablecoin and its value may
            fluctuate. The EKOKE token may be subject to regulatory changes in
            the future. The EKOKE presale is not available to residents of the
            United States and other restricted jurisdictions. Cryptocurrency may
            be unregulated in your jurisdiction. The value of cryptocurrencies
            may go down as well as up. Profits may be subject to capital gains
            or other taxes applicable in your jurisdiction. It is your
            responsibility to ensure that you comply with tax and other legal
            obligations in your jurisdiction.
          </Paragraph.Default>
        </Container.Container>
      </Container.FlexCols>
    </Container.Container>
  );
};

export default Info;
