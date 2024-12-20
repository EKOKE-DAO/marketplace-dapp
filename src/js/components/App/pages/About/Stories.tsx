import * as React from 'react';
import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Nav from '../../../reusable/Nav';
import CardStory from './Stories/CardStory';
import Persons from './Stories/Persons';
import Paragraph from '../../../reusable/Paragraph';

enum Actor {
  Robert = 'Robert',
  Alice = 'Alice',
  Paul = 'Paul',
}

const stories = {
  [Actor.Robert]: (
    <CardStory title={'Robert'} person={<Persons.Robert />}>
      <Paragraph.Leading>
        Robert is a young man who dreams of buying a nice apartment in the city
        center. Although his rent is quite high, he manages to pay it every
        month. However, the bank is hesitant to give him a mortgage, even though
        the monthly installments would be similar to his rent. Robert finds this
        absurd, as he is already proving he can afford the same amount every
        month. Frustrated, he decides to try the Ekoke method.
        <br />
        Being tech-savvy, Robert quickly understands how Ekoke works and is
        ready to begin. He pays the deposit, and an NFT collection representing
        his mortgage is issued. People from around the world—third-party
        investors—buy these NFTs. Robert moves into his new home and begins
        purchasing an NFT each month. Within a couple of years, he manages to
        buy them all.
        <br />
        Now, Robert proudly owns his property, having paid far less in interest
        than he would have with more "mainstream" methods. &quot;main
        stream&quot;.
      </Paragraph.Leading>
    </CardStory>
  ),
  [Actor.Alice]: (
    <CardStory title={'Alice'} person={<Persons.Alice />}>
      <Paragraph.Leading>
        Alice is a middle-aged woman who wants to buy a larger home for her
        family. However, the bank is reluctant to give her a mortgage because
        she doesn't have enough money for the entire down payment. She decides
        to use the Ekoke method for a portion of the property's value, rather
        than the entire purchase, with the intention of getting a traditional
        mortgage from the bank for the remaining amount. For Alice, an NFT
        collection is issued, but it only represents 30% of the property's
        value. She puts down a deposit based on that 30%. Her plan is to
        gradually buy all the NFTs related to that portion of the house. Once
        that's done, Alice approaches the bank, which gives her a mortgage for
        the remaining 70% of the property's value. This way, she gets her dream
        home without the risk of losing it due to lack of capital and time.
      </Paragraph.Leading>
    </CardStory>
  ),
  [Actor.Paul]: (
    <CardStory title={'Paul'} person={<Persons.Paul />}>
      <Paragraph.Leading>
        Alice found his dream home but didn't want to rely on a bank to purchase
        it, so he turned to Ekoke. After paying the deposit, he began repaying
        the third parties by buying back the NFTs tied to the property. However,
        Alice, not being a reliable person, stopped making his installment
        payments, which meant he no longer repaid the NFTs. This upset the third
        parties, and since the repayment deadline passed, Ekoke had to step in.
        <br />
        Alice had already moved into the house, but because the NFTs were still
        owned by third parties, Ekoke used the deposit Alice initially paid to
        cover part of the debt. Unfortunately, it wasn't enough to fully repay
        everyone, so Ekoke dipped into its own reserves to settle the remaining
        balances. As a result, Ekoke legally took ownership of the property and
        began the eviction process.
        <br />
        Once the eviction is complete, Ekoke plans to sell the house. Any extra
        profit made from the sale will be added back to the reserve they used,
        ensuring they are prepared for future cases of unreliable buyers. Alice,
        having breached the contract, lost all of his investment.
      </Paragraph.Leading>
    </CardStory>
  ),
};

const Stories = () => {
  const [actor, setActor] = React.useState<Actor>(Actor.Robert);

  return (
    <Container.Container>
      <Heading.H2 className="text-center">User Stories</Heading.H2>
      <Nav value={actor} options={Actor} onChange={setActor} />
      <Container.Container>{stories[actor]}</Container.Container>
    </Container.Container>
  );
};

export default Stories;
