import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Link from '../../../reusable/Link';

const EKOKE_SUPPLY = 8_880_101.01;
const EKOKE_DECIMALS = 8;
const EKOKE_ADDRESS = '0x';

const colors = [
  '#36a2eb',
  '#ff6384',
  '#ff9f40',
  '#ffcd56',
  '#4bc0c0',
  '#9966ff',
  '#a1f762',
  '#c9cbcf',
];

const tokenomicsData = {
  labels: ['Reward Pool - Deferred NFT Rewards', 'Admin mintable'],
  datasets: [
    {
      label: 'e8s',
      data: [592_006_734_000_000, 296_003_367_000_000],
      backgroundColor: colors,
    },
  ],
};

const Tokenomics = () => {
  Chart.register(ArcElement, Tooltip);

  return (
    <Container.FlexCols className="items-center justify-center mx-auto gap-2 w-3/6 sm:w-full">
      <Container.Container>
        <Heading.H2>
          <span className="text-brandRed font-bold">EKOKE</span> Tokenomics
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
        <Container.FlexCols className="gap-4 flex-1">
          <Doughnut
            className="max-w-[300px] transition-transform transform scale-100 hover:scale-105"
            data={tokenomicsData}
          />
          <Container.FlexCols>
            <LegendEntry
              color={colors[0]}
              label="Reward Pool - Deferred NFT Rewards"
              percentage={66}
            />
            <LegendEntry
              color={colors[1]}
              label="Admin mintable"
              percentage={33}
            />
          </Container.FlexCols>
        </Container.FlexCols>
      </Container.FlexResponsiveRow>
    </Container.FlexCols>
  );
};

const LegendEntry = ({
  color,
  label,
  percentage,
}: {
  color: string;
  label: string;
  percentage: number;
}) => (
  <Container.FlexRow className="items-center gap-2 w-full">
    <Container.Container
      className="w-4 h-4 rounded-full"
      style={{ backgroundColor: color }}
    />
    <Container.FlexRow className="items-center justify-between w-full">
      <span className="block">{label}</span>
      <span className="block font-bold">{percentage}%</span>
    </Container.FlexRow>
  </Container.FlexRow>
);

export default Tokenomics;
