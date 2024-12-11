import * as React from 'react';

import Paragraph from '../../../../reusable/Paragraph';
import Container from '../../../../reusable/Container';
import Heading from '../../../../reusable/Heading';

interface Props {
  step: BuyerStep | SellerStep | MemberStep | AgentStep;
}

export enum BuyerStep {
  CreateSellContract = 'Create a sell contract',
  Deposit = 'Deposit',
  BuyTokens = 'Buy tokens',
  MoveToNewHouse = 'Move to new house',
  BuyAllTokens = 'Buy all tokens',
}

export enum SellerStep {
  CreateSellContract = 'Seller creates a sell contract',
  AllTokensAreSold = 'All tokens are sold',
}

export enum MemberStep {
  ContractIsCreated = 'Contract is created',
  BuyTokenOnMarketplace = 'Buy token on marketplace',
  GetsReward = 'Gets reward',
}

export enum AgentStep {
  CreateSellContract = 'The agent creates the contract',
  MonitorSell = 'Monitor sell',
  CloseContract = 'Close contract',
}

const Content = ({ step }: Props) => contentByStep[step];

interface StepProps {
  image: string;
  step: BuyerStep | SellerStep | MemberStep | AgentStep;
  children: React.ReactNode;
}

const Step = ({ image, step, children }: StepProps) => (
  <Container.Card>
    <Container.FlexResponsiveRow className="w-full gap-4 sm:items-center">
      <Container.Container className="w-[150px]">
        <img src={image} alt={'Step'} width={150} height={150} />
      </Container.Container>
      <Container.Container className="flex-1">
        <Heading.H3>{step}</Heading.H3>
        {children}
      </Container.Container>
    </Container.FlexResponsiveRow>
  </Container.Card>
);

const contentByStep = {
  [BuyerStep.CreateSellContract]: (
    <Step
      step={BuyerStep.CreateSellContract}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        The buyer find a real-estate to buy, once an agreement with the actual
        owner of the property is found, the real-estate agency has the job to
        create the contract. after that, they decide on the amount of the{' '}
        <strong>installments</strong> he will pay in order to buy the property
        and estinguish the debt. He promises to pay the installments each month
        and within the agreed time.
      </Paragraph.Leading>
    </Step>
  ),
  [BuyerStep.Deposit]: (
    <Step step={BuyerStep.Deposit} image={'http://placekittens.com/150/150'}>
      <Paragraph.Leading>
        The buyer <strong>deposits</strong> a certain amount of money to the
        real-estate agency as a guarantee that he will not withdraws from the
        contract and pay the installments on time. The buyer will get the money
        back if he pays all the installments on time.
      </Paragraph.Leading>
    </Step>
  ),
  [BuyerStep.BuyTokens]: (
    <Step step={BuyerStep.BuyTokens} image={'http://placekittens.com/150/150'}>
      <Paragraph.Leading>
        The buyer starts buying tokens each month from the{' '}
        <strong>EKOKE DAO Marketplace</strong>. Everytime he buys a token before
        any other DAO user, he will receive a reward. This mechanism enforce the
        buyer to pay the installments on time and quickly. Ence, The buyer has
        the option to repay installments before their due date without incurring
        any additional charges.
      </Paragraph.Leading>
    </Step>
  ),
  [BuyerStep.MoveToNewHouse]: (
    <Step
      step={BuyerStep.MoveToNewHouse}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        Once the <strong>seller</strong> has sold all the tokens, no matter if
        to the buyer or to the community members, the buyer will be able to{' '}
        <strong>move to his new house</strong>. This doesn't mean that the buyer
        has paid all the money though! He still has to pay the installments to
        the DAO users at this point.
      </Paragraph.Leading>
    </Step>
  ),
  [BuyerStep.BuyAllTokens]: (
    <Step
      step={BuyerStep.BuyAllTokens}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        At this point the only step left for the buyer is to{' '}
        <strong>buy all the remaining tokens</strong> from the marketplace. Once
        he finishes this, the <strong>Agency</strong> will close the selling
        contract and the NFTs will be burned.
      </Paragraph.Leading>
    </Step>
  ),
  [SellerStep.CreateSellContract]: (
    <Step
      step={SellerStep.CreateSellContract}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        il titolo dovrebbe essere Creation of the contract The seller agrees to
        sell the property to the buyer and contacts the real-estate agency to
        create the selling contract. The seller agrees on the price and the{' '}
        <strong>installments</strong> the buyer will pay to buy the property. He
        is guaranteed to be paid for the installments each month and within the
        agreed time. The seller will be awared with a reward from the agency for
        using this system.
      </Paragraph.Leading>
    </Step>
  ),
  [SellerStep.AllTokensAreSold]: (
    <Step
      step={SellerStep.AllTokensAreSold}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        Once all the installment tokens are sold, either by the buyer or to the
        DAO users, the seller will be able to{' '}
        <strong>transfer the ownership</strong> of the property to the buyer.
      </Paragraph.Leading>
    </Step>
  ),
  [MemberStep.ContractIsCreated]: (
    <Step
      step={MemberStep.ContractIsCreated}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        When a new selling contract is created, DAO members will be able to see
        the property associated to the contract on the{' '}
        <strong>EKOKE DAO Marketplace</strong>. From the page of the property,
        members will be able to see all the details of the contract and the
        installments the buyer has to pay and token avaiabvle to purchase.
      </Paragraph.Leading>
    </Step>
  ),
  [MemberStep.BuyTokenOnMarketplace]: (
    <Step
      step={MemberStep.BuyTokenOnMarketplace}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        From the page of the property, members will be{' '}
        <strong>able to buy the installment tokens</strong> from the
        marketplace.
      </Paragraph.Leading>
    </Step>
  ),
  [MemberStep.GetsReward]: (
    <Step
      step={MemberStep.GetsReward}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        Once the <strong>Deferred NFT</strong> is bought by the member, he will
        receive automatically a <strong>EKOKE Token Reward</strong> from the
        Marketplace contract.
      </Paragraph.Leading>
    </Step>
  ),
  [AgentStep.CreateSellContract]: (
    <Step
      step={AgentStep.CreateSellContract}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        The agency finds a buyer for a seller that wants to sell his property
        using the <strong>EKOKE DAO system</strong>. The agency creates the
        contract and the buyer and the seller agree on the price and the
        installments. The agency takes care of creating the contract with all
        the data related to the property in order to give to the DAO users all
        the information they need to <strong>trust the contract</strong>.
      </Paragraph.Leading>
    </Step>
  ),
  [AgentStep.MonitorSell]: (
    <Step
      step={AgentStep.MonitorSell}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        The agency must take care of monitoring the selling process of the
        property. The agency must be sure that the buyer pays the installments
        on time. If it doesn't they must report the buyer to the DAO
        users(community). This could lead to a vote to{' '}
        <strong>close the sell contract</strong> to prevent more users to buy
        the installment tokens. At this point the DAO can vote to{' '}
        <strong>refund</strong> the DAO users that bought the installment tokens
        using the <strong>DAO funds</strong>, which is in form of USDT paid as
        interests in the Marketplace.
      </Paragraph.Leading>
    </Step>
  ),
  [AgentStep.CloseContract]: (
    <Step
      step={AgentStep.CloseContract}
      image={'http://placekittens.com/150/150'}
    >
      <Paragraph.Leading>
        The agency, once the sell contract has succeeded or failed,{' '}
        <strong>must close the contract</strong>. If the contract has failed,
        the agency <strong>may open a vote</strong> on the DAO to{' '}
        <strong>refund</strong> the DAO users that bought the installment
        tokens.
      </Paragraph.Leading>
    </Step>
  ),
};

export default Content;
