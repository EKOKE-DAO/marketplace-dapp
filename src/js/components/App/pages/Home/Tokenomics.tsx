import * as React from 'react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Link from '../../../reusable/Link';
import EkokeTokenomics from '../../../shared/EkokeTokenomics';

const EKOKE_SUPPLY = 8_880_101.01;
const EKOKE_DECIMALS = 9;
const EKOKE_ADDRESS = '0x';

const Tokenomics = () => (
  <Container.FlexCols className="items-center justify-center mx-auto gap-2 w-3/6 sm:w-full">
    <Container.Container>
      <Heading.H2>
        <span className="text-brandRed font-bold">EKOKE</span>nomics
      </Heading.H2>
    </Container.Container>
    <Container.FlexResponsiveRow className="items-start justify-around sm:justify-center sm:items-center gap-8 sm:gap-4 w-full">
      <Container.FlexCols className="gap-4 flex-1">
        <Container.Container>
          <span className="block text-center text-xl">Token Name</span>
          <span className="block text-center text-xl font-bold text-brandRed">
            EKOKE
          </span>
        </Container.Container>
        <Container.Container>
          <span className="block text-center text-xl">Token Symbol</span>
          <span className="block text-center text-xl font-bold text-brandRed">
            EKOKE
          </span>
        </Container.Container>
        <Container.Container>
          <span className="block text-center text-xl">Total supply</span>
          <span className="block text-center text-xl font-bold text-brandRed">
            {EKOKE_SUPPLY.toLocaleString('en-US', {
              maximumFractionDigits: 3,
            })}
          </span>
        </Container.Container>
        <Container.Container>
          <span className="block text-center text-xl">
            ERC20 Contract Address
          </span>
          <span className="block text-center text-xl font-bold text-brandRed">
            <Link.Default
              className="text-brandRed !font-bold"
              href={`https://etherscan.io/address/${EKOKE_ADDRESS}`}
              target="_blank"
            >
              {EKOKE_ADDRESS}
            </Link.Default>
          </span>
        </Container.Container>
        <Container.Container>
          <span className="block text-center text-xl">Decimals</span>
          <span className="block text-center text-xl font-bold text-brandRed">
            {EKOKE_DECIMALS}
          </span>
        </Container.Container>
      </Container.FlexCols>
      <EkokeTokenomics className="sm:items-center sm:justify-center gap-4 flex-1" />
    </Container.FlexResponsiveRow>
  </Container.FlexCols>
);

export default Tokenomics;
