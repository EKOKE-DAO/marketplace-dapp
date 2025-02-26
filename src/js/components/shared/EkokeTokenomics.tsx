import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';

import Container from '../reusable/Container';

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
    'Reward Pool - Deferred NFT Rewards',
    'Liquidity Bootstrapping Pool (LBP)',
    'Team',
    'Presale',
    'Investors',
    'Partner Agencies',
    'Airdrop',
  ],
  datasets: [
    {
      label: 'EKOKE',
      data: [
        5_920_067_340_000_000, 1_086_332_356_800_000, 888_010_101_000_000,
        444_005_050_500_000, 266_403_030_300_000, 266_403_030_300_000,
        8_880_101_100_000,
      ],
      backgroundColor: colors,
    },
  ],
};

interface Props {
  className?: string;
}

const EkokeTokenomics = ({ className }: Props) => {
  Chart.register(ArcElement, Tooltip);

  return (
    <Container.FlexCols className={className}>
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
          label="Liquidity Bootstrapping Pool (LBP)"
          percentage={12}
        />
        <LegendEntry color={colors[2]} label="Team" percentage={10} />
        <LegendEntry color={colors[3]} label="Presale" percentage={5} />
        <LegendEntry color={colors[4]} label="Investors" percentage={3} />
        <LegendEntry
          color={colors[5]}
          label="Partner Agencies"
          percentage={3}
        />
        <LegendEntry color={colors[7]} label="Airdrops" percentage={1} />
      </Container.FlexCols>
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

export default EkokeTokenomics;
