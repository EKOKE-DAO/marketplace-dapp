import * as React from 'react';
import * as FiIcon from 'react-icons/fi';
import * as FaIcon from 'react-icons/fa6';

import Container from '../../../../reusable/Container';
import Heading from '../../../../reusable/Heading';
import Accordion from '../../../../reusable/Accordion';
import Paragraph from '../../../../reusable/Paragraph';
import Wrapper from '../Wrapper';
import Link from '../../../../reusable/Link';
import { Route } from '../../../../../utils/routes';
import { EKOKE_ADDRESS, MARKETPLACE_ADDRESS } from '../../../../../web3/tokens';
import Input from '../../../../reusable/Input';

const Faq = () => {
  const [search, setSearch] = React.useState('');

  // search
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    if (search.length > 0) {
      // search into the page for the question or answer
      const elements = document.querySelectorAll('#faq .accordion');
      elements.forEach((element) => {
        const title = element.querySelector('.accordion-title')?.textContent;
        const content =
          element.querySelector('.accordion-content')?.textContent;

        if (
          title?.toLowerCase().includes(search.toLowerCase()) ||
          content?.toLowerCase().includes(search.toLowerCase())
        ) {
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        }
      });
    } else {
      // show all elements
      const elements = document.querySelectorAll('#faq .accordion');
      elements.forEach((element) => {
        element.classList.remove('hidden');
      });
    }
  }, [search]);

  return (
    <Wrapper>
      <Heading.H1>Frequently Asked Questions</Heading.H1>
      <Container.FlexCols className="justify-center items-center gap-2">
        <Input.IconInput
          containerClassName="w-fit"
          id="faq-search"
          type="text"
          label="Search for a question or answer"
          placeholder="Search"
          value={search}
          onChange={onSearchChange}
          icon={<FiIcon.FiSearch className="inline mr-2 text-text" />}
        />
      </Container.FlexCols>
      <Container.Container id="faq">
        <Heading.H2 className="text-center">General</Heading.H2>
        <Question question="Which type of tokens exist in the EKOKE DAO?">
          <Paragraph.Default>
            There are 3 different tokens. The first one is called{' '}
            <strong>EKOKE</strong>, an ERC20 token used as a form of reward for
            users for paying for the installments on the marketplace. The second
            one is called <strong>Deferred</strong>, an ERC721 token (NFT) which
            represents an installment of the payment of a property. The third
            and final one is called <strong>EKOGOV</strong> and you can use it
            to partecipate in the governance of the decentralized organization
            (DAO).
          </Paragraph.Default>
        </Question>
        <Question question="What is Deferred?">
          <Paragraph.Default>
            Deferred is the name of our ERC721 token which represents an{' '}
            <strong>
              installment of the total amount that the buyer of the house owes
              to the property's seller
            </strong>
            . All the{' '}
            <strong>
              Deferred token has a fixed price at their creation expressed in
              Dollars
            </strong>
            , they can't be exchanged with other users. Each user can buy a
            Deferred token from the property seller and each token can be bought
            by the property buyer.{' '}
            <strong>
              Owning a Deferred token does NOT grant you any right on the real
              estate ownership
            </strong>
            .
          </Paragraph.Default>
        </Question>
        <Question question="Why should I pay an installment of another's house?">
          <Paragraph.Default>
            By buying an installment of a property you are helping the property
            owner to sell his property faster. The property owner can sell the
            property in a shorter time and the buyer can buy the property by
            paying it in installments. By doing that you will receive a reward
            in EKOKE tokens, which is deflationary and its value is supposed to
            go up over time. The more people buy Deferred tokens, the more the
            EKOKE token becomes scarce and its may value increase.
          </Paragraph.Default>
        </Question>
        <Question question="Which is the difference between a Deferred token and an EKOKE token?">
          <Paragraph.Default>
            The main difference between a Deferred token and an EKOKE token is
            that the first one represents an installment of the payment of a
            property while the second one is a reward token that is given away
            when a user buys a Deferred token. The use of the EKOKE token is to
            serve as a form of installment as its value is supposed to go up
            over time.
          </Paragraph.Default>
        </Question>
        <Question question="What requirements a property have to satisfy in order to be listed on EKOKE DAO?">
          <Paragraph.Default>
            The only requirements a property has to respect to be tokenized
            following the EKOKE DAO method is to be a real Estate property.
            There is no minimum or maximum value a property must have.
          </Paragraph.Default>
        </Question>
        <Question question="Is EKOKE legal?">
          <Paragraph.Default>
            Yes, all actions undertaken within the project comply with the legal
            framework of our jurisdiction. However, for tax purposes, we
            recommend verifying whether you need to take any additional steps in
            accordance with the laws of your country or region. For more
            information check our{' '}
            <Link.Paragraph href={Route.TERMS_AND_CONDITIONS}>
              Terms and conditions
            </Link.Paragraph>
            .
          </Paragraph.Default>
        </Question>
        <Heading.H2 className="text-center">EKOKE Token</Heading.H2>
        <Question question="By what is the EKOKE token backed?">
          <Paragraph.Default>
            We have a liquidity pool that is funded by the property buyer with
            the interests. In average the 10% of the total amount of the
            property is locked in the liquidity pool. The EKOKE token is backed
            by the <strong>liquidity pool</strong>.
          </Paragraph.Default>
        </Question>
        <Question question="What is the total supply of EKOKE tokens?">
          <Paragraph.Default>
            The total supply of EKOKE tokens is set to{' '}
            <strong>8,880,101.01</strong> tokens.
          </Paragraph.Default>
        </Question>
        <Question question="How much an EKOKE token does cost?">
          <Paragraph.Default>
            An EKOKE token can be obtained freely by doing actions within the
            EKOKE project, such as by selling a property by using the EKOKE DAO,
            or by joining as an agency in our environment. The price of the
            EKOKE token is not fixed and can vary over time, based on the market
            demand.
          </Paragraph.Default>
        </Question>
        <Question question="How can I verify the authenticity of an EKOKE token?">
          <Paragraph.Default>
            Only the EKOKE tokens that belongs to the official EKOKE ERC20
            contract at {EKOKE_ADDRESS} are considered authentic. You can check
            the contract address on Etherscan or on our website.
          </Paragraph.Default>
        </Question>
        <Heading.H2 className="text-center">Reward Pool</Heading.H2>
        <Question question="What is the reward Pool?">
          <Paragraph.Default>
            The reward pool is the pool of EKOKE tokens that are given away to
            the users that buy Deferred tokens. The reward pool is set to{' '}
            <strong>66%</strong> of the total supply of EKOKE tokens.
          </Paragraph.Default>
        </Question>
        <Question question="Why is the balance of the reward pool 0?">
          <Paragraph.Default>
            The reward pool doesn't have a balance because the EKOKE tokens are
            minted on the fly when a user buys a Deferred token. The EKOKE
            tokens allows minting up to the 66% of the total supply of EKOKE
            tokens if the minter is the reward pool contract.
          </Paragraph.Default>
        </Question>
        <Question question="How can I get EKOKE tokens from the reward pool?">
          <Paragraph.Default>
            You can get EKOKE tokens from the reward pool by buying Deferred
            tokens from the EKOKE DAO marketplace.
          </Paragraph.Default>
        </Question>
        <Question question="What happens when the reward pool runs out of mintable tokens?">
          <Paragraph.Default>
            We have explained that in details in our{' '}
            <Link.Paragraph href={Route.DOCUMENTATION_REWARD}>
              Rewards documentation
            </Link.Paragraph>
            . Basically when the reward pool runs out of mintable tokens, the
            Buyer or the seller of the property will have to burn some EKOKE
            tokens make them mintable again by the reward pool. At this point
            the system could even become more competitive, because the higher
            the reward, the faster that sale contract will be sold to the
            community.
          </Paragraph.Default>
        </Question>
        <Heading.H2 className="text-center">Marketplace</Heading.H2>
        <Question question="Where is the Marketplace located?">
          <Paragraph.Default>
            The marketplace is located on the EKOKE DAO website. You can access
            it by going to the{' '}
            <Link.Paragraph href={Route.MARKETPLACE}>
              Marketplace page
            </Link.Paragraph>
            . The marketplace is completely decentralized and it is managed by a
            smart contract on the Ethereum blockchain. The address of the
            Marketplace is <strong>{MARKETPLACE_ADDRESS}</strong>.
          </Paragraph.Default>
        </Question>
        <Question question="How can I buy a Deferred NFT?">
          <Paragraph.Default>
            You can buy a Deferred token by going to the EKOKE DAO website and
            selecting a property you want to pay an installment for and then
            from its page you can buy the next token. Tokens must be paid with{' '}
            <strong>USDT (Thether USDt)</strong>, so this means you must be
            connected to the EKOKE DAO website with your Wallet and own some
            USDT. Once you click on the <strong>Buy token</strong> button you
            will be prompted to <strong>approve</strong> the transaction and
            then you can buy the token. The properties are listed on our{' '}
            <Link.Paragraph href={Route.MARKETPLACE}>
              Marketplace page
            </Link.Paragraph>
            .
          </Paragraph.Default>
        </Question>
        <Question question="How can I list a Deferred NFT?">
          <Paragraph.Default>
            If you have bought a Deferred NFT{' '}
            <strong>you don't have to list it</strong> anywhere. The token is
            already available for the property buyer to be bought directly from
            the marketplace. The property buyer can buy the token by going to
            the property page and clicking on the <strong>Buy token</strong>{' '}
            button.
          </Paragraph.Default>
        </Question>
        <Question question="Can I set the price for a Deferred NFT?">
          <Paragraph.Default>
            No, the Deferred token represents an installment of the payment of a
            property and its price is fixed at the creation of the token. The
            price is expressed in Dollars and it is set by the property seller.
          </Paragraph.Default>
        </Question>
        <Question question="Can I transfer or sell the token on another market, such as OpenSea?">
          <Paragraph.Default>
            No, it is not possible to perform any action on the Deferred token
            that consists in transferring or selling it to another user. The
            Deferred token is a token that is created by the property seller and
            it can be bought only by the property buyer. The token is not
            transferable and it can't be sold to other users. The only smart
            contract that can operate on the property of the token is the{' '}
            <strong>Marketplace contract</strong>.
          </Paragraph.Default>
        </Question>
        <Question question="Which requirements I must have in order to buy a Deferred NFT">
          <Paragraph.Default>
            In order to be able to buy a Deferred token (NFT) you must login
            with your own Ethereum wallet clicking on <strong>Login</strong>.
            You also need to own at least an amount of{' '}
            <strong>USDT (Thether USDt)</strong> equal to the price of the
            installment on your wallet. In order to buy any token within EKOKE
            organization you must be at least 18 or 21 (based on your
            jurisdiction). For further details see our{' '}
            <Link.Paragraph href={Route.TERMS_AND_CONDITIONS}>
              Terms and conditions
            </Link.Paragraph>
            .
          </Paragraph.Default>
        </Question>
        <Question question="Do I have to be an adult to buy a Deferred token?">
          <Paragraph.Default>
            Yes you do. You must you must be at least 18 or 21 (based on your
            jurisdiction) to take any action in our DAO. For further details see
            our{' '}
            <Link.Paragraph href={Route.TERMS_AND_CONDITIONS}>
              Terms and conditions
            </Link.Paragraph>
          </Paragraph.Default>
        </Question>
        <Question question="Where can I get USDt?">
          <Paragraph.Default>
            You can get USDT from any exchange that supports it. There are many
            of them, such as Binance, Kraken, Bitfinex, and many others, where
            you can buy USDt by exchanging them with credit on your credit card.
            You can also get USDT from a friend or from a USDT ATM.
          </Paragraph.Default>
        </Question>
        <Question question="How do I get a Wallet?">
          <Paragraph.Default>
            On EKOKE DAO users must have an Ethereum Wallet to be able to buy
            tokens. We suggest you to opt for <strong>Metamask</strong>, a
            browser extension that allows you to interact with the Ethereum
            blockchain. You can download it from the official website. You can
            also use other wallets such as Trust Wallet, Coinbase Wallet, or any
            other wallet that supports ERC20 tokens.
          </Paragraph.Default>
        </Question>
        <Question question="Where can I check the state of my NFTs?">
          <Paragraph.Default>
            You can see the state of your NFTs in your private area. You have to
            log in into your account by clicking on{' '}
            <strong>Login (or profile)</strong> from the Topbar, then by
            clicking on <strong>collected</strong> to see them.
          </Paragraph.Default>
        </Question>
        <Question question="Can I send a message or get to know the identity or any piece of personal information of the person who bought the NFTs of my real estate?">
          <Paragraph.Default>
            No you can not. The owner (or the seller) of the real estate can not
            be informed of the personal data of who acquire the NFTs. Blockcahin
            and ICP techonology are based on decentralization and anonimity of
            all parties involved. You can get to know only the wallet address to
            be able to complete the actions provided on EKOKE website. Privacy
            is important for the EKOKE organization and we aim to guarantee it
            in all ways possible.
          </Paragraph.Default>
        </Question>
        <Heading.H2 className="text-center">Presale</Heading.H2>
        <Question question="What is the presale?">
          <Paragraph.Default>
            The presale is the first phase of the EKOKE DAO project where the
            EKOKE token is sold to the public at a discounted price. The presale
            is limited in time and in quantity of tokens available. The limit of
            the presale is set to <strong>444,005 EKOKE</strong> tokens.
          </Paragraph.Default>
        </Question>
        <Question question="When will the presale end?">
          <Paragraph.Default>
            The presale will end on March 31, 2025, or when the limit of{' '}
            <strong>444,005 EKOKE</strong> tokens is reached.
          </Paragraph.Default>
        </Question>
        <Question question="Is there any minimum amount of tokens I have to buy?">
          <Paragraph.Default>
            The minimum amount of tokens is set to 1 EKOKE token. You can buy as
            many tokens as you want.
          </Paragraph.Default>
        </Question>
        <Question question="What is the base price?">
          <Paragraph.Default>
            The base price of the EKOKE token is set to 1$.
          </Paragraph.Default>
        </Question>
        <Question question="Will the price increase over time?">
          <Paragraph.Default>
            The price of a token will increase by 1$ each 20,000 tokens sold.
          </Paragraph.Default>
        </Question>
        <Question question="What is the minimum amount to be raised?">
          <Paragraph.Default>
            We have set a minimum amount of 50,000$ to be raised during the
            presale.
          </Paragraph.Default>
        </Question>
        <Question question="What happens if the presale fails?">
          <Paragraph.Default>
            You will be able to claim a refund of your investment. The refund
            will be available from the same wallet you used to buy the tokens
            and from the same page you used to buy them, which is our{' '}
            <Link.Paragraph href={Route.PRESALE}>Presale page</Link.Paragraph>.
          </Paragraph.Default>
        </Question>
        <Question question="When I will receive my tokens?">
          <Paragraph.Default>
            You will receive your tokens as soon as the presale ends. The tokens
            must be claimed from the same page you used to buy them, which is
            our{' '}
            <Link.Paragraph href={Route.PRESALE}>Presale page</Link.Paragraph>.
          </Paragraph.Default>
        </Question>
        <Heading.H2 className="text-center">Agencies</Heading.H2>
        <Question question="Where can I register my real estate agency?">
          <Paragraph.Default>
            As soon as the presale is over, we'll publish the website for real
            estate agents where they will be able to register their agencies.
            Once the agency is registered, the agent will be able to create sale
            contracts for their customers to start selling properties with EKOKE
            DAO.
          </Paragraph.Default>
        </Question>
        <Question question="Which requirments should I have to be registered as a real estate agency?">
          <Paragraph.Default>
            Within the EKOKE DAO project to be registered as a real estate
            agency you must fulfill all legal and regulatory requirements
            applicable in the jurisdiction where you conduct business in order
            to be considered a legit real estate agency. All real estate
            agencies MUST be approved by a vote on the DAO.
          </Paragraph.Default>
        </Question>
        <Question question="There is no agency in my area. What can I do?">
          <Paragraph.Default>
            In the eventuality there is no real estate that support EKOKE, you
            can ask us and we will adress you to one of our real estate agency
            that is willing to help you both to sell or buy your property. You
            can check agencies at any time by going to our{' '}
            <Link.Paragraph href={Route.AGENCIES}>Agencies page</Link.Paragraph>
            .
          </Paragraph.Default>
        </Question>
        <Question question="Is there any advantage to join EKOKE DAO as an agency?">
          <Paragraph.Default>
            Yes, the first <strong>100 agencies that join the EKOKE DAO</strong>{' '}
            will receive a bonus of <strong>1000 EKOKE token</strong>. Further
            bonus will be defined in the future by the DAO.
          </Paragraph.Default>
        </Question>
        <Heading.H2 className="text-center">Technical definitions</Heading.H2>
        <Question question="What is a DAO?">
          <Paragraph.Default>
            A DAO (Decentralized Autonomous Organization) is an organization who
            operate throught a set of rules coded thrught "Smart contract"
            running of a blockchain. All the decision are collectly taken by its
            communnity member without the intervene of a central authority.
          </Paragraph.Default>
        </Question>
        <Question question="What is an NFT?">
          <Paragraph.Default>
            A NFT (Non-Fungible Token) is a cryptografic token that is running
            on a blockchain. It rapresent a unique object. NFTs usually
            represent art works, videos, images or other form of digital media.
            In the specific case of EKOKE DAO, the NFTs are called "Deferred
            token" and they represents an installment of the payment of a
            property.
          </Paragraph.Default>
        </Question>

        <Heading.H2 className="text-center">
          Selling of tokens and NFTs
        </Heading.H2>
        <Question question="Can I sell my Deferred NFT?">
          <Paragraph.Default>
            No, once you've bought a Deferred token you can't sell it to other
            users. The only way to get your money back is to wait for the
            property buyer to pay the installment. This could also take years to
            happen.
          </Paragraph.Default>
        </Question>
        <Question question="Can I sell my EKOKE Token?">
          <Paragraph.Default>
            Yes you can sell your EKOKE token when you prefer on any exchange
            that supports it. You can check the list of the exchanges that
            support EKOKE token on our website.
          </Paragraph.Default>
        </Question>
        <Question question="What does happen if I lost the credentials of my wallet? ">
          <Paragraph.Default>
            If you have lost the credentials of your wallet, you can't recover
            them. This is because the wallet is decentralized and there is no
            central authority that can help you recover your password. We
            suggest you to write down your password on a piece of paper and keep
            it in a safe place.
          </Paragraph.Default>
        </Question>
        <Heading.H2 className="text-center">Sale process</Heading.H2>
        <Question question="Can someone create a sale contract without going through an agency?">
          <Paragraph.Default>
            No, the sale contract can be created only by an agency that has been
            approved by the DAO. The agency can create a sale contract by
            calling the smart contract of the EKOKE DAO. That's because the
            agency must be qualified and trained to create and manage sale
            contracts on the EKOKE DAO. Also we need to trust the creator of the
            sale contract, and we can't trust a random user.
          </Paragraph.Default>
        </Question>
        <Question question="When can the buyer move into the house?">
          <Paragraph.Default>
            The buyer can move the house as soon as the last installment is
            bought from the <strong>seller</strong>. This means that the buyer
            can move before he has paid for all the installments, but the only
            thing that matter is that the seller has received all the
            installments. This is the standard procedure, but the two parties
            could agree to anticipate the move-in date, for example when the 50%
            of the total amount has been paid etc.
          </Paragraph.Default>
        </Question>
        <Question question="Could the buyer just wait for the installments to be paid by the others and then stop paying for the property?">
          <Paragraph.Default>
            No, because the buyer is legally bound to pay the installments. If
            the buyer stops paying the installments, the DAO can take legal
            action against him to get the property back.
          </Paragraph.Default>
        </Question>
        <Question question="What happens if the buyer stops paying the installments?">
          <Paragraph.Default>
            If the buyer stops paying the installments, the DAO can take legal
            action against him to get the property back. The property will be
            sold again to another buyer.
          </Paragraph.Default>
        </Question>
        <Question question="What happens if the property value changes during the sale process?">
          <Paragraph.Default>
            The property value can change during the sale process. If the value
            of the property goes up, the seller may decide to increase the price
            of the installments. If the value of the property goes down, the
            seller may decide to decrease the price of the installments. This
            won't change the current sale contract, but it will cause an
            additional contract to be created with the price difference. If the
            buyer rejects the new contract, the property will be sold again to
            another buyer.
          </Paragraph.Default>
        </Question>
        <Heading.H2 className="text-center">
          Frauds and Scam protection
        </Heading.H2>
        <Question question="Could a malicious agency create a fake contract to get a lot of EKOKE in rewards?">
          <Paragraph.Default>
            Yes and no. Theorically it could be possible, but this would also
            mean that the agency would have to pay real money to get the
            rewards. If the installment price is set to 1$ for instance, the
            reward amount will be proportional to the price. So even if it's
            possible, there absolutely no interest or advantage in doing that.
            Also, the agency may get banned from the DAO.
          </Paragraph.Default>
        </Question>
        <Question question="What happens if the agency is a scammer?">
          <Paragraph.Default>
            If the agency is a scammer, the DAO can take legal action against it
            to get the property back. The agency will also be banned from the
            DAO.
          </Paragraph.Default>
        </Question>
        <Question question="What happens if the seller/buyer is a scammer?">
          <Paragraph.Default>
            If the seller/buyer is a scammer, the DAO and the agency can take
            legal action against him to get the property back.
          </Paragraph.Default>
        </Question>
        <Heading.H2 className="text-center">
          DAO management and partecipation
        </Heading.H2>
        <Question question="How can I join EKOKE DAO?">
          <Paragraph.Default>
            Joining the EKOKE DAO is very simple, and there are actually two
            different ways you can join it: the first one is by buying a
            Deferred, so you contribute to accelerate the process of the
            property selling. The second one is by buying an{' '}
            <strong>EKOGOV</strong> token, so you can partecipate in the
            governance of the DAO. Mind that the <strong>EKOGOV</strong> token
            will be launched later after the presale.
          </Paragraph.Default>
        </Question>
        <Question question="What is a Voting">
          <Paragraph.Default>
            Voting consists in a proposal to modify the code governing the
            functioning of NFTs and Smart Contracts. Therefore, the proposal
            would impact the operation of the entire project. For the proposal
            to become effective, it must be approved by a majority (50% +1) of
            the voters.
          </Paragraph.Default>
        </Question>
        <Question question="How am I notified that a vote is in progress?">
          <Paragraph.Default>
            You can check the proposals related to our project, EKOKE DAO, on
            the NNS website every week. Alternatively, you can subscribe to our
            Telegram channel, where you will receive messages about all project
            updates, including voting proposals submitted by other users.
          </Paragraph.Default>
        </Question>
        <Question question="Who can make a proposal?">
          <Paragraph.Default>
            In order to set a proposal, you must own at least (TBD) EKOGOV
            tokens. The proposal must be approved by the majority of the voters
            to be accepted.
          </Paragraph.Default>
        </Question>
        <Question question="Who can vote for a proposal?">
          <Paragraph.Default>
            Anyone who owns at least one EKOGOV token can vote for a proposal.
            The proposal must be approved by the majority of the voters to be
            accepted. The impact of a vote depends on the number of EKOGOV
            tokens owned by the voter.
          </Paragraph.Default>
        </Question>
        <Question question="What kind of proposals can be made?">
          <Paragraph.Default>
            We'll have basically these types of proposals:
          </Paragraph.Default>
          <ul>
            <li>
              <Paragraph.Default>
                <strong>Technical proposals</strong>: proposals that aim to
                modify the code governing the functioning of NFTs and Smart
                Contracts.
              </Paragraph.Default>
            </li>
            <li>
              <Paragraph.Default>
                <strong>Agency proposals</strong>: proposal where a real estate
                agency can propose themselves to be approved by the DAO to be
                allowed to issue sale contracts.
              </Paragraph.Default>
            </li>
            <li>
              <Paragraph.Default>
                <strong>Refund proposals</strong>: proposal that aim to refund
                victims of fraud/failed sales on the EKOKE DAO.
              </Paragraph.Default>
            </li>
          </ul>
        </Question>
      </Container.Container>
      <Container.FlexCols className="justify-center items-center gap-2">
        <Heading.H2>Do you have any other question?</Heading.H2>
        <Link.Button href={'https://discord.gg/AuWa2JATYf'}>
          <FaIcon.FaDiscord className="inline mr-2" />
          Join our Discord server
        </Link.Button>
      </Container.FlexCols>
    </Wrapper>
  );
};

interface QProps {
  question: string;
  children: React.ReactNode | React.ReactNode[];
}

const Question = ({ question, children }: QProps) => (
  <Container.Card className="accordion !bg-zinc-50">
    <Accordion title={question}>{children}</Accordion>
  </Container.Card>
);

export default Faq;
