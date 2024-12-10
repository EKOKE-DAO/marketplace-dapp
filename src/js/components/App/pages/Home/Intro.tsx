import * as React from 'react';
import * as Icon from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

import Container from '../../../reusable/Container';
import Ekoke from '../../../svg/Ekoke';
import Heading from '../../../reusable/Heading';
import Paragraph from '../../../reusable/Paragraph';
import Link from '../../../reusable/Link';

const Intro = () => (
  <Container.FlexCols className="items-center justify-center w-3/6 sm:w-full mx-auto gap-2">
    <Container.Container className="rounded-full bg-white p-4 border-gray-200 border">
      <Ekoke fill="#000000" width={128} height={128} />
    </Container.Container>
    <Container.Container>
      <Heading.H1>
        <span className="text-brandRed font-bold">EKOKE</span> DAO
      </Heading.H1>
    </Container.Container>
    <Container.Container>
      <Paragraph.Leading className="sm:w-5/6 mx-auto">
        We're revolutionizing home financing by replacing traditional mortgages
        with a fair, decentralized alternative. Through our{' '}
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
    <Container.FlexResponsiveRow className="justify-center items-center gap-4">
      <Link.Button href={'https://twitter.com/ekoketoken'} target={'_blank'}>
        <FaXTwitter className="inline mr-2 text-white" /> X.com
      </Link.Button>
      <Link.Button href={'https://t.me/ekokeTOKENgroup'} target={'_blank'}>
        <Icon.FiSend className="inline mr-2 text-white" /> Telegram
      </Link.Button>
    </Container.FlexResponsiveRow>
  </Container.FlexCols>
);

export default Intro;
