import * as React from 'react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import CardStory from './Scenarios/CardStory';
import Persons from './Scenarios/Persons';
import Paragraph from '../../../reusable/Paragraph';

const Scenarios = () => (
  <Container.Container>
    <Heading.H2 className="text-center">Possible Scenarios</Heading.H2>
    <Container.FlexCols className="gap-8">
      <CardStory title={'Robert'} person={<Persons.Robert />}>
        <Paragraph.Leading>
          Robert is a young man, that wants to buy a nice flat in the city
          center of his city. His rent is very high but he is able to manage to
          pay it every months. The bank is reluctant to grant him a morgage,
          with instalment similar in amount to his rent. Robert thinks this is
          ridicouls since is already paying an equal amount in rent every
          mounth. Robert decide to give a try to the Ekoke method. <br />
          Robert is a tecnology guy, he was able to understand the functionament
          of Ekoke, and ready to start. He made the payment of the deposit and
          the NFT collection was issued.
          <br />
          People from all around the world, the third parties, bought the NFTs
          that rapresent robert&apos; mortgage. Robert is able to move in, and
          start to enjoy the house. He startes to buy each month a NFT, and in a
          couple of years he was able to buy them all. Robert, now, is a pride
          real estate owner, paying a little fraction of interests compared to
          the ones that he would have paid with some method that are more
          &quot;main streem&quot;.
        </Paragraph.Leading>
      </CardStory>
      <CardStory title={'Alice'} person={<Persons.Alice />} reversedLayout>
        <Paragraph.Leading>
          Alice is a middle age woman, she want to buy a bigger house for her
          family. Also in her case, the bank is reclunt to grant her a mortgage
          due to the fact she do not have enought for the down-payment.
          <br />
          She decided to use the Ekoke method only for a share of the
          house&apos;s value instead of buying the property entirly. Then her
          intentiions are to rely on a bank for the remening part of the
          mortgage.
          <br />
          Also for Alice a NFT collection is being issued, but it does not
          represent the entire value of the property but only a part, let's say
          30%. She payed also a deposit calculated on that part, so on 30%. Her
          goal is buy all the NFTs too. Once she've bought all of them, she have
          been to the bank that realise her the mortgage for the remaing part,
          so 70%. In this way she is able to obtain lower instalment and a lower
          interest rate.
        </Paragraph.Leading>
      </CardStory>
      <CardStory title={'Darius'} person={<Persons.Darius />}>
        <Paragraph.Leading>
          Darius found the house of his dream, but he does not want to rely on a
          bank to buy it, so he used Ekoke. Darius paid the deposit and started
          to repay back the third parties buying the NFTs back.
          <br />
          Darius is not a nice guy, and for some reason he have stopped to pay
          his instalment, meaning he is no longer pay back any NFTs. The third
          party are upset, and the maximum time avaiable to pay them has passe
          so the Ekoke organization intervene. Since all the NFTs are owned by
          third parties, Darius already moved in. The Ekoke organization have
          used the deposit Darius payed at the beginning to repay the thirds
          parties, but this is not enought to repay all of them. So Ekoke used
          their reserves to pay back the remaing ones.
          <br />
          Now Ekoke is legally the owner of the property, and they have started
          the evicting proccess towards Darius. Later Ekoke will sell the house,
          the extra profit they did by selling the house is being put in the
          same reserve that they used before, in the case some other
          untrustworthy people joined Ekoke. Unlucky for Darius, he have lost
          all of his investemnt due to the fact he have broke the contract.
        </Paragraph.Leading>
      </CardStory>
    </Container.FlexCols>
  </Container.Container>
);

export default Scenarios;
