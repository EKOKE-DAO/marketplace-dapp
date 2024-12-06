import * as React from 'react';
import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Paragraph from '../../../reusable/Paragraph';

const Intro = () => (
  <Container.Container>
    <Heading.H2 className="text-center">
      What is <strong>EKOKE DAO</strong>?
    </Heading.H2>
    <Paragraph.Leading>
      <strong>EKOKE</strong> is a{' '}
      <strong>decentralized autonomous organization (DAO)</strong> built on the{' '}
      <strong>Ethereum</strong> and <strong>Internet Computer</strong>{' '}
      blockchains that aims to create a community-driven ecosystem to provide a
      method for people who want to buy and sell real-estate properties with{' '}
      <strong>installments</strong>. The installments to pay for the property
      are supplied in the form of <strong>Ethereum</strong> NFTs (ERC721). Each
      member of the community can contribute by paying the installments to the
      property seller and in return, they will receive a <strong>reward</strong>{' '}
      as a certain value of <strong>EKOKE Tokens</strong> (ERC20).
    </Paragraph.Leading>
    <Paragraph.Leading>
      This method allows the <strong>seller</strong> to quickly sell their
      property and receive the money back from the installments which are paid
      by the community members.
    </Paragraph.Leading>
    <Paragraph.Leading>
      The <strong>buyer</strong> on the other hand can afford to buy a property
      thanks to the installments and so can pay the property in a longer period
      of time.
    </Paragraph.Leading>
    <Paragraph.Leading>
      <strong>Community members</strong> can also benefit from this method by
      receiving a reward in the form of <strong>EKOKE Tokens</strong> which
      value is supposed to work as a <strong>store of value</strong> and
      <strong>medium of exchange</strong> in the <strong>EKOKE</strong>{' '}
      ecosystem.
    </Paragraph.Leading>
  </Container.Container>
);

export default Intro;
