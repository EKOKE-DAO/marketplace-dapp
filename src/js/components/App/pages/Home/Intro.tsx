import * as React from 'react';
import * as FaIcon from 'react-icons/fa6';

import EkokeLogo from '../../../../../assets/images/ekoke-logo.webp';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Paragraph from '../../../reusable/Paragraph';
import Link from '../../../reusable/Link';

const Intro = () => (
  <Container.FlexCols className="items-center justify-center w-full mx-auto gap-2">
    <Container.Container className="rounded-full bg-white p-4 border-gray-200 border">
      <img src={EkokeLogo} alt="logo" width={128} height={128} />
    </Container.Container>
    <Container.Container>
      <Heading.H1>
        <span className="text-brandRed font-bold">EKOKE</span> DAO
      </Heading.H1>
    </Container.Container>
    <Container.Container>
      <Paragraph.Center>
        Transform Your <strong>Property</strong> into{' '}
        <strong>Digital Gold</strong>
      </Paragraph.Center>
      <Paragraph.Leading className="sm:w-5/6 mx-auto">
        We're <strong>revolutionizing home financing</strong> by replacing
        traditional mortgages with a fair, decentralized alternative. Through
        our{' '}
        <Link.Paragraph href={'https://ethereum.org/'} target="_blank">
          Ethereum
        </Link.Paragraph>{' '}
        powered <strong>Deferred NFT</strong> system, buyers can pay for their
        homes in manageable installments. Each NFT represents a payment, and
        once all are completed, ownership of the property is fully transferred.
        {'  '}
        <strong>EKOKE DAO</strong> empowers members to invest in these NFTs,
        earning deflationary <strong>EKOKE</strong> tokens as{' '}
        <strong>rewards</strong> while supporting buyers with transparent and
        sustainable interest rates. By fostering community-driven home
        ownership, we eliminate the burden of excessive mortgage rates and
        create value for everyone involved. This innovative venture aspires to
        redefine real estate transactions by embracing the potential of the{' '}
        <Link.Paragraph href={'https://ethereum.org/'} target="_blank">
          Ethereum
        </Link.Paragraph>{' '}
        and{' '}
        <Link.Paragraph href={'https://internetcomputer.org/'} target="_blank">
          Internet Computer
        </Link.Paragraph>{' '}
        blockchains.
      </Paragraph.Leading>
    </Container.Container>
    <Container.Container>
      <Heading.H2 className="text-center">
        What makes us <strong>Unique</strong>
      </Heading.H2>
      <Container.Container className="grid grid-cols-3 sm:grid-cols-1 items-start justify-between gap-8">
        <Container.Card hoverScale className="flex-1 h-full">
          <Heading.H3 className="text-center">
            <FaIcon.FaHouse className="inline text-brandRed mr-2" />
            Real Estate focused
          </Heading.H3>
          <Paragraph.Center className="!text-sm">
            We&apos;re dedicated to making home ownership more{' '}
            <strong>accessible</strong> and <strong>affordable</strong>. Our
            project targets the real-estate market, thanks to our longstanding
            experience in the field and we believe that we can make a difference
            in people's lives.
          </Paragraph.Center>
        </Container.Card>
        <Container.Card hoverScale className="flex-1 h-full">
          <Heading.H3 className="text-center">
            <FaIcon.FaMoneyBill1Wave className="inline text-brandRed mr-2" />
            Installments over Mortgages
          </Heading.H3>
          <Paragraph.Center className="!text-sm">
            We're replacing traditional mortgages with unsustainable interest
            rates with a fair, <strong>decentralized</strong> alternative.
            Through our Ethereum powered <strong>Deferred NFT system</strong>,
            buyers can pay for their homes in manageable installments.
          </Paragraph.Center>
        </Container.Card>
        <Container.Card hoverScale className="flex-1 h-full">
          <Heading.H3 className="text-center">
            <FaIcon.FaMedal className="inline text-brandRed mr-2" />
            Win-Win for Buyers, Sellers and Investors
          </Heading.H3>
          <Paragraph.Center className="!text-sm">
            We're creating a win-win situation for everyone involved.
            <br />
            <br />
            <strong>Buyers</strong> can pay for their homes in manageable
            installments.
            <br />
            <strong>Sellers</strong> can sell their properties faster.
            <br />
            <strong>Investors</strong> can earn rewards while supporting buyers.
          </Paragraph.Center>
        </Container.Card>
        <Container.Card hoverScale className="flex-1 h-full">
          <Heading.H3 className="text-center">
            <FaIcon.FaPeopleGroup className="inline text-brandRed mr-2" />
            DAO Governance and Community Driven
          </Heading.H3>
          <Paragraph.Center className="!text-sm">
            Our project is <strong>community-driven</strong> and{' '}
            <strong>decentralized</strong>. We're building a{' '}
            <strong>DAO</strong> that will be governed by the community. We aim
            to launch the DAO governance on the{' '}
            <strong>Internet Computer NNS</strong> in order to make it fully
            decentralized. On the <strong>NNS</strong> the community will be
            able to <strong>vote</strong> to manage real estate agencies, ask
            for refunds in case of frauds, and much more.
          </Paragraph.Center>
        </Container.Card>
        <Container.Card hoverScale className="flex-1 h-full">
          <Heading.H3 className="text-center">
            <FaIcon.FaEthereum className="inline text-brandRed mr-2" />
            Web3 and Blockchain Technology
          </Heading.H3>
          <Paragraph.Center className="!text-sm">
            We're embracing the potential of the <strong>Ethereum</strong> and{' '}
            <strong>Internet Computer</strong> blockchains. Our project is
            powered by <strong>smart contracts</strong> and <strong>DAO</strong>{' '}
            governance. Even our Website is hosted on the{' '}
            <strong>Internet Computer</strong> blockchain and it's running in a
            canister. Our infrastructure is <strong>100% decentralized</strong>{' '}
            and censorship-resistant.
          </Paragraph.Center>
        </Container.Card>
        <Container.Card hoverScale className="flex-1 h-full">
          <Heading.H3 className="text-center">
            <FaIcon.FaLeaf className="inline text-brandRed mr-2" />
            Sustainable, Transparent and Inflation Resistant
          </Heading.H3>
          <Paragraph.Center className="!text-sm">
            Our project is <strong>sustainable</strong>,{' '}
            <strong>transparent</strong> and{' '}
            <strong>inflation-resistant</strong>. We're using a{' '}
            <strong>deflationary</strong> token model for our{' '}
            <strong>EKOKE</strong> token. The total supply of{' '}
            <strong>EKOKE</strong> is fixed and the quantity of tokens given as
            reward will decrease over time. While the traditional mortgage
            system that is based on inflation and unsustainable interest rates
            is unsustainable, EKOKE is based on a deflationary model that will
            make it more valuable over time.
          </Paragraph.Center>
        </Container.Card>
      </Container.Container>
    </Container.Container>
  </Container.FlexCols>
);

export default Intro;
