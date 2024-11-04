import * as React from 'react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';

const Roadmap = () => (
  <Container.FlexCols className="items-center justify-center w-3/6 sm:w-full mx-auto gap-2">
    <Container.Container>
      <Heading.H2>
        <span className="text-brandRed font-bold">Project</span> Roadmap
      </Heading.H2>
    </Container.Container>
    <Container.FlexCols className="gap-4 w-full">
      <Container.Container>
        <span className="text-xl font-bold text-brandRed">2024</span>
        <Container.FlexResponsiveRow className="gap-4">
          <Milestone title="Token development" date="Q1" />
          <Milestone title="DAO and SNS market analysis" date="Q2" />
          <Milestone title="Anslysis of the real estate market" date="Q3" />
          <Milestone title="DAO and SNS Launch" date="Q4" />
        </Container.FlexResponsiveRow>
      </Container.Container>
      <Container.Container>
        <span className="text-xl font-bold text-brandRed">2025</span>
        <Container.FlexResponsiveRow className="gap-4">
          <Milestone title="Exchange Listing" date="Q1" />
          <Milestone title="Airdrop" date="Q2" />
          <Milestone title="Gold-backed token" date="Q3" />
          <Milestone title="Real estate tokenization" date="Q4" />
        </Container.FlexResponsiveRow>
      </Container.Container>
      <Container.Container>
        <span className="text-xl font-bold text-brandRed">2026</span>
        <Container.FlexResponsiveRow className="gap-4">
          <Milestone title="NFT Marketplace" date="Q1" />
          <Milestone title="Real estate global network" date="Q2" />
          <Milestone title="Enlarge the market worldwide" date="Q3" />
          <Milestone title="Becoming a relevant reality" date="Q4" />
        </Container.FlexResponsiveRow>
      </Container.Container>
    </Container.FlexCols>
  </Container.FlexCols>
);

const Milestone = ({ title, date }: { title: string; date: string }) => (
  <Container.Card className="transition-transform transform scale-100 hover:scale-105 text-center flex-1">
    <Container.FlexCols className="justify-between h-full">
      <span className="block text-lg font-bold text-brandRed">{title}</span>
      <span className="block">{date}</span>
    </Container.FlexCols>
  </Container.Card>
);

export default Roadmap;
