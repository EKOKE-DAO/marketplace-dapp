import * as React from 'react';
import * as Icon from 'react-feather';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';

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
  labels: [
    'DAO Pool - NFT Rewards',
    'SNS Treasury',
    'Dev Team',
    'SNS Swap',
    'DAO Pool - ERC20 Swap',
    'Seed Funders',
    'LBP Pool',
    'Airdrop',
  ],
  datasets: [
    {
      label: 'e8s',
      data: [
        266403000000000, 213122400000000, 133201487000000, 106561210000000,
        106561212000000, 26640300000000, 26640300000000, 8880101000000,
      ],
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
              8,880,101.010
            </span>
          </Container.Container>
          <Container.Container>
            <span className="block text-center text-xl">Decimals</span>
            <span className="block text-center text-xl font-bold text-brandRed">
              8
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
              label="DAO Pool - NFT Rewards"
              percentage={30}
            />
            <LegendEntry
              color={colors[1]}
              label="SNS Treasury"
              percentage={24}
            />
            <LegendEntry color={colors[2]} label="Dev Team" percentage={15} />
            <LegendEntry color={colors[3]} label="SNS Swap" percentage={12} />
            <LegendEntry
              color={colors[4]}
              label="DAO Pool - ERC20 Swap"
              percentage={12}
            />
            <LegendEntry
              color={colors[5]}
              label="Seed Funders"
              percentage={3}
            />
            <LegendEntry color={colors[6]} label="LBP Pool" percentage={3} />
            <LegendEntry color={colors[7]} label="Airdrop" percentage={1} />
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
