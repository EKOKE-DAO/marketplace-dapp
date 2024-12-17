import * as React from 'react';

import Container from '../../../../reusable/Container';
import Heading from '../../../../reusable/Heading';
import Accordion from '../../../../reusable/Accordion';
import Paragraph from '../../../../reusable/Paragraph';
import Wrapper from '../Wrapper';
import Link from '../../../../reusable/Link';
import { Route } from '../../../../../utils/routes';

const Faq = () => (
  <Wrapper>
    <Heading.H1>Frequently Asked Questions</Heading.H1>

    <Heading.H2 className="text-center">General</Heading.H2>
    <Question question="Which type of token esist inside the Ekoke Project?">
      <Paragraph.Default>
        There are 3 different type of Ekoke token. The first one is called Ekoke
        token and you can get it by doing specific actions, the second is called
        Deffereal token e non ho capito cosa fa, the third one is called EkoGov
        and you can use it to partecipate in the decision making processes of
        the decentralized organization Ekoke.
      </Paragraph.Default>
    </Question>
    <Question question="What is a contract token?">
      <Paragraph.Default>
        A contract token represent a share of the debt that the buyer of the
        house stipulated within the DAO community. It grants you the right to
        have your investement back. It NOT grant you any right on the real
        estate.
      </Paragraph.Default>
    </Question>
    <Question question="Which is the difference between a deffereal token and a Ekoke token?">
      <Paragraph.Default>??????????????</Paragraph.Default>
    </Question>
    <Question question="How much a Ekoke token does cost?">
      <Paragraph.Default>
        An Ekoke token can be obtained freely by doing actions within the Ekoke
        project. To learn more about Ekoke distribution you can read this
        document. <br />
        You can buy Ekoke tokens also on the secondary market at market rate
        price.
      </Paragraph.Default>
    </Question>
    <Question question="How can I verify the authenticity of a Ekoke token?">
      <Paragraph.Default>
        To verify the authenticity of a Ekoke Token or any other NFT token, you
        can check our website for the NFT's details or throught a third party
        app operating as explorer blockchain like Etherscan.
      </Paragraph.Default>
    </Question>
    <Question question="A property to be listed on Ekoke should respect some requirment?">
      <Paragraph.Default>
        The only requirment a property have to respect to be tokenized following
        Ekoke method is to be a real Estate property. There is no minimum or
        massimum value a property must have.
      </Paragraph.Default>
    </Question>
    <Question question="Is Ekoke legal?">
      <Paragraph.Default>
        Yes, all actions undertaken within the project comply with the legal
        framework of our jurisdiction. However, for tax purposes, we recommend
        verifying whether you need to take any additional steps in accordance
        with the laws of your country or region.
      </Paragraph.Default>
    </Question>
    <Heading.H2 className="text-center">Agencies</Heading.H2>
    <Question question="Where can I register my real estate agency?">
      <Paragraph.Default>
        As soon as the presale is over, we'll publish the website for real
        estate agents where they will be able to register their agencies. Once
        the agency is registered, the agent will be able to create sale
        contracts for their customers to start selling properties with EKOKE
        DAO.
      </Paragraph.Default>
    </Question>
    <Question question="Which requirments should I have to be registered as a real estate agency?">
      <Paragraph.Default>
        Within Ekoke project to be registered as a real estate agency you must
        fulfill all legal and regulatory requirements applicable in the
        jurisdiction where you conduct business in order to be considered a
        legit real estate agency.
      </Paragraph.Default>
    </Question>
    <Question question="There is no agency in my area. What can I do?">
      <Paragraph.Default>
        In the eventuality there is no real estate that support Ekoke, you can
        ask us and we will adress you to one of our real estate agency that is
        willing to help you both to sell or buy your property.
      </Paragraph.Default>
    </Question>
    <Heading.H2 className="text-center">Techinical definition</Heading.H2>
    <Question question="What is a DAO?">
      <Paragraph.Default>
        A DAO (Decentralized Autonomous Organization) is an organization who
        operate throught a set of rules coded thrught "Smart contract" running
        of a blockchain. All the decision are collectly taken by its communnity
        member without the intervene of a central authority.
      </Paragraph.Default>
    </Question>
    <Question question="What is a NFT?">
      <Paragraph.Default>
        A NFT (Non-Fungible Token) is a cryptografic token that is running on a
        blockchain. It rapresent a unique object. NFTs usually represent art
        works, videos, images or other form of digital media. In the specific
        case of EKOKE, the NFTs are called "deffereal token" and they represnt a
        share of real estate ownership.
      </Paragraph.Default>
    </Question>
    <Question question="How NFT works inside a DAO organization?">
      <Paragraph.Default>
        The DAO system is able to manage the creation, distribution of NFTs. The
        member of the DAO have voting power on the decision dealing with the
        NFTs' management, for example: funds distribution, token distributions
        and other key decisions.
      </Paragraph.Default>
    </Question>

    <Heading.H2 className="text-center">
      Acquisition and distribution
    </Heading.H2>
    <Question question="How can I buy an NFT?">
      <Paragraph.Default>
        A DAO (Decentralized Autonomous Organization) is an organization who
        operates through a set of rules coded through a D-App running of on the
        blockchain. All the decision are collectly taken by its community member
        without the intervention of a central authority.
      </Paragraph.Default>
    </Question>
    <Question question="Which requirement I must have in order to buy a contract NFT">
      <Paragraph.Default>
        In order to be able to buy a Deferred token (NFT) you must login with
        your own Ethereum wallet. In order to buy any token within EKOKE
        organization you must be at least 18 or 21 (based on your jurisdiction).
        For further details see our{' '}
        <Link.Paragraph href={Route.TERMS_AND_CONDITIONS}>
          Terms and conditions
        </Link.Paragraph>
        .
      </Paragraph.Default>
    </Question>
    <Question question="Do I have to be an adult to buy a token?">
      <Paragraph.Default>
        Yes you do. You must you must be at least 18 or 21 (based on your
        jurisdiction) to take any action in our DAO. For further details see our{' '}
        <Link.Paragraph href={Route.TERMS_AND_CONDITIONS}>
          Terms and conditions
        </Link.Paragraph>
      </Paragraph.Default>
    </Question>
    <Question question="How can I obtain an EKOKE Token?">
      <Paragraph.Default>
        You can obtain EKOKE token thought different actions within the EKOKE
        organization, you can get them as a reward from selling or buying a
        property or by buying a contract token. For further detail you can look
        at this document?????????? .You can buy a EKOKE token also on the
        secondary market.
      </Paragraph.Default>
    </Question>
    <Question question="How can I obtain an EKOKE Token?">
      <Paragraph.Default>
        You can obtain EKOKE token thought different actions within the EKOKE
        organization, you can get them as a reward from selling or buying a
        property or by buying a contract token. You can buy a EKOKE token also
        on the secondary market.
      </Paragraph.Default>
    </Question>
    <Question question="How can I charge my wallet?">
      <Paragraph.Default>
        You can use this website: This is the most notorius website but also
        website that manages wallet are suitable to use on Ekoke. You can
        download the app on your browser to make things easier.
      </Paragraph.Default>
    </Question>
    <Question question="Where can I check the state of my NFTs?">
      <Paragraph.Default>
        You can see the state of your NFTs in your private area.You have to log
        in inti your account, then click "collect" to see them.
      </Paragraph.Default>
    </Question>
    <Question question="Can I send a message or get to know the identity or personal information of the people who buy the NFTs of my real estate?">
      <Paragraph.Default>
        No you can not. The owner (or the seller) of the real estate can not be
        informed of the personal data of who acquire the NFTs. Blockcahin and
        ICP techonology are based on decentralization and anonimity of all
        parties involved. You have to know only the wallet adress to be able to
        complete the actions provided on Ekoke website. Privacy is important for
        Ekoke organization and we aim to guarantee it in all ways possible.
      </Paragraph.Default>
    </Question>
    <Heading.H2 className="text-center">Selling of token and NFTs</Heading.H2>
    <Question question="Can I sell my NFTs">
      <Paragraph.Default>
        In the case you changed your mind or you need your investemnt back, you
        can or cannot???????????????
      </Paragraph.Default>
    </Question>
    <Question question="Can I sell my Ekoke Token?">
      <Paragraph.Default>
        Yes you can sell your Ekoke token when you prefer on the secondary
        market.
      </Paragraph.Default>
    </Question>
    <Question question="Can I sell my deffereal token">
      <Paragraph.Default>
        Yes you can sell your deffereal token but the person who will acquire
        them will not receive any Ekoke Token as reward.
      </Paragraph.Default>
    </Question>
    <Question question="What does happen if I lost the log in credential of my wallet? ">
      <Paragraph.Default>
        In the case the access credential for a NFT wallet that contain Ekoke
        token get lost there is nothing we can do. Our advise is to always
        storage in a safe place all of your credential an consider also the use
        of a hardware wallet to store them with additional safety.
      </Paragraph.Default>
    </Question>
    <Heading.H2 className="text-center">
      DAO management and partecipation
    </Heading.H2>
    <Question question="Can I join EKOKE DAO">
      <Paragraph.Default>
        Yes you can. In order to enter EKOKE DAO you must own one or more
        EkoGov. You can by them here:
      </Paragraph.Default>
    </Question>
    <Question question="What is a Voting">
      <Paragraph.Default>
        A "Votazione" or "voting" is a proposal to modify the code governing the
        functioning of NFTs and Smart Contracts. Therefore, the proposal would
        impact the operation of the entire project. For the proposal to become
        effective, it must be approved by a majority (50% +1) of the voters.
      </Paragraph.Default>
    </Question>
    <Question question="How am I notified that a vote is in progress?">
      <Paragraph.Default>
        You can check the proposals related to our project, Ekoke-token, on the
        NNS website every week. Alternatively, you can subscribe to our Telegram
        channel, where you will receive messages about all project updates,
        including voting proposals submitted by other users.????????????
      </Paragraph.Default>
    </Question>
    <Question question="How can I exercise my voting power?">
      <Paragraph.Default>
        You can vote after you have logged in into the NSS website, then find
        Ekoke-token project, selct the voting proposal and send your vote.
        ???????
      </Paragraph.Default>
    </Question>
    <Question question="Who can set a propoal">
      <Paragraph.Default>
        A proposal can be set by anyone, there is no need to own any NFTs or
        special requirement.
      </Paragraph.Default>
    </Question>
    <Question question="Who vote for a propoal">
      <Paragraph.Default>
        Anyone who own at least one EkoGov token can partecipate in the voting
        proportionally to the token owned.
      </Paragraph.Default>
    </Question>
  </Wrapper>
);

interface QProps {
  question: string;
  children: React.ReactNode | React.ReactNode[];
}

const Question = ({ question, children }: QProps) => (
  <Container.Card className="!bg-zinc-50">
    <Accordion title={question}>{children}</Accordion>
  </Container.Card>
);

export default Faq;
