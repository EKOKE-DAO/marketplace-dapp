import * as React from 'react';
import * as Icon from 'react-feather';

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
        <span className="text-brandRed font-bold">EKOKE</span> DAO Marketplace
      </Heading.H1>
    </Container.Container>
    <Container.Container>
      <Paragraph.Leading className="sm:w-5/6 mx-auto">
        EKOKE is an innovative tool that aims to revolutionize the real estate
        industry. The Ekoketoken project emerges as the evolutionary response to
        the traditional real estate landscape, originating from a Milan-based
        agency's immersion into the realms of blockchain and cryptocurrencies.
        This innovative venture aspires to redefine real estate transactions by
        embracing the potential of the{' '}
        <Link.Paragraph href={'https://internetcomputer.org/'} target="_blank">
          Internet Computer
        </Link.Paragraph>{' '}
        (ICP) blockchain.
      </Paragraph.Leading>
    </Container.Container>
    <Container.FlexResponsiveRow className="justify-center items-center gap-4">
      <Link.Button href={'https://twitter.com/ekoketoken'} target={'_blank'}>
        <Icon.Twitter className="inline mr-2 text-white" /> Twitter
      </Link.Button>
      <Link.Button href={'https://t.me/ekokeTOKENgroup'} target={'_blank'}>
        <Icon.Send className="inline mr-2 text-white" /> Telegram
      </Link.Button>
    </Container.FlexResponsiveRow>
  </Container.FlexCols>
);

export default Intro;
