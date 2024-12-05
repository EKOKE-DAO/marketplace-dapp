import * as React from 'react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Paragraph from '../../../reusable/Paragraph';
import Link from '../../../reusable/Link';

const Roadmap = () => (
  <Container.FlexCols className="items-center justify-center sm:w-full">
    <Container.Container>
      <Heading.H2>
        <span className="text-brandRed font-bold">Project</span> Roadmap
      </Heading.H2>
    </Container.Container>
    <Container.FlexCols className="gap-4 w-full">
      <Container.Container>
        <span className="text-xl font-bold text-brandRed">2025</span>
        <Container.FlexResponsiveRow className="gap-4">
          <Milestone title="EKOKE Presale" date="Q1">
            EKOKE Presale will be the first step to start the project. The goal
            is to raise funds to develop the platform, the developers and to
            give liquidity to the exchange to be able to start exchaning the
            EKOKE ERC20 token. The Presale will take place on this website and
            will be open to everyone. It will continue until the end of the
            first quarter.
          </Milestone>
          <Milestone title="SNS Launch" date="Q2">
            The SNS will be launched in the second quarter. We'll base our DAO
            on the the{' '}
            <Link.Paragraph href={'https://nns.ic0.app'}>
              Internet Computer SNS
            </Link.Paragraph>
            . The SNS will be the place where the EKOKE-DAO will be able to
            discuss and vote on the decisions of the EKOKE-DAO.
          </Milestone>
          <Milestone title="EKOKE-DAO is registered" date="Q3">
            EKOKE-DAO will be registered in the second quarter. The DAO will be
            registered as a DAO as recognized in the Wyoming state. The DAO will
            be able to buy and sell real-estate and to manage the funds of the
            EKOKE-DAO token holders. The DAO will be able to vote on the
            decisions of the EKOKE-DAO.
          </Milestone>
          <Milestone title="First real-estate sold on EKOKE-DAO" date="Q4">
            We expect to sell the first real-estate on the EKOKE-DAO marketplace
            in the fourth quarter. The real-estate will be sold in USDT and the
            transaction will be done on the blockchain. The real-estate will be
          </Milestone>
        </Container.FlexResponsiveRow>
      </Container.Container>
      <Container.Container>
        <span className="text-xl font-bold text-brandRed">2026</span>
        <Container.FlexResponsiveRow className="gap-4">
          <Milestone title="First EKOKE-DAO partners" date="Q1">
            We aim to start building the real-estate network in the first
            quarter. We will start by partnering with real-estate agents and
            real-estate developers. The goal is to have a network of real-estate
            agents and developers that will be able to sell real-estate on the
            EKOKE-DAO marketplace.
          </Milestone>
          <Milestone title="Real estate global network" date="Q2">
            The real-estate global network will be launched in the second
            quarter. The network will allow people to buy and sell real-estate
            in a decentralized way. We will through voting allow people to{' '}
          </Milestone>
          <Milestone title="Enlarge the market worldwide" date="Q3">
            We aim to enlarge the market worldwide in the third quarter. We will
            start by partnering with real-estate agents and real-estate
            developers in other countries.
          </Milestone>
          <Milestone title="Becoming a relevant reality" date="Q4">
            We aim to become a relevant reality in the fourth quarter. We aim to
            become a worldwide recognized platform for buying real-estate
            without bank mortgages.
          </Milestone>
        </Container.FlexResponsiveRow>
      </Container.Container>
    </Container.FlexCols>
  </Container.FlexCols>
);

const Milestone = ({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: string | React.ReactNode | React.ReactNode[];
}) => (
  <Container.Card className="transition-transform transform scale-100 hover:scale-105 text-center flex-1">
    <Container.FlexCols className="h-full">
      <span className="block text-lg font-bold text-brandRed">{title}</span>
      <span className="block">{date}</span>
      <Paragraph.Default>{children}</Paragraph.Default>
    </Container.FlexCols>
  </Container.Card>
);

export default Roadmap;
