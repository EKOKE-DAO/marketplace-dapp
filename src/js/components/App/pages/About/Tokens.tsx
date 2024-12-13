import * as React from 'react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import TokenLogo, { Token } from '../../../reusable/TokenLogo';
import Paragraph from '../../../reusable/Paragraph';
import Link from '../../../reusable/Link';

const Tokens = () => (
  <Container.Container>
    <Heading.H2 className="text-center">
      <strong>EKOKE DAO</strong> Tokenomics
    </Heading.H2>
    <Container.FlexResponsiveRow className="justify-between gap-4">
      <TokenView
        token={Token.Deferred}
        name="Deferred"
        symbol="DEFERRED"
        address="0x1234567890"
      >
        <Paragraph.Default>
          The <strong>Deferred</strong> token is an ERC721 NFT that represents
          an installment of the sale contract on the EKOKE DAO. It is used by
          the community to pay each installment of the sale contract. They can
          be bought in the <strong>EKOKE DAO Marketplace</strong> at a fixed
          price with USDT.
        </Paragraph.Default>
      </TokenView>
      <TokenView
        token={Token.Ekoke}
        name="EKOKE"
        symbol="EKOKE"
        address="0x1234567890"
        decimals={9}
      >
        <Paragraph.Default>
          The <strong>EKOKE</strong> token is an ERC20 token that is used as a
          store of value in the EKOKE DAO. It is given to the community as a
          reward for participating in the EKOKE DAO Marketplace. Everytime a
          user buys a Deferred token, they receive Ekoke tokens as a reward.
        </Paragraph.Default>
      </TokenView>
      <TokenView
        token={Token.EkoGOV}
        sns={'Coming soon...'}
        name="EKOGOV"
        symbol="EKOGOV"
        decimals={8}
      >
        <Paragraph.Default>
          The <strong>EKOKE DAO</strong> token is a <strong>SNS</strong> token
          that represents the governance of the EKOKE DAO. It is used by the
          community to vote on proposals and decisions that affect the EKOKE
          DAO. It is given to the community as a reward for participating in the
          EKOKE DAO Marketplace.
        </Paragraph.Default>
      </TokenView>
    </Container.FlexResponsiveRow>
  </Container.Container>
);

interface TokenProps {
  name: string;
  token: Token;
  symbol: string;
  address?: string;
  sns?: string;
  decimals?: number;
  children: React.ReactNode | React.ReactNode[] | string;
}

const TokenView = ({
  name,
  token,
  symbol,
  address,
  sns,
  decimals,
  children,
}: TokenProps) => (
  <Container.Card hoverScale className="flex-1">
    <Container.FlexCols className="items-center gap-4">
      <TokenLogo token={token} width={100} height={100} />
      <Container.Container className="grid grid-cols-2 gap-4 items-center justify-between">
        <Heading.H4 className="block !mb-0">
          Name: <strong>{name}</strong>
        </Heading.H4>
        <span className="block">
          Symbol: <strong>{symbol}</strong>
        </span>
        {address && (
          <span className="block">
            Address:{' '}
            <Link.Paragraph href={`https://etherscan.com/address/${address}`}>
              {address}
            </Link.Paragraph>
          </span>
        )}
        {sns && (
          <span className="block">
            SNS:{' '}
            <Link.Paragraph
              href={`https://nns.ic0.app/project/?project=${sns}`}
            >
              {sns}
            </Link.Paragraph>
          </span>
        )}
        {decimals && (
          <span className="block">
            Decimals: <strong>{decimals}</strong>
          </span>
        )}
      </Container.Container>
      <Container.Container>{children}</Container.Container>
    </Container.FlexCols>
  </Container.Card>
);

export default Tokens;
