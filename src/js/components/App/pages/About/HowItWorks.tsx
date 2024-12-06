import * as React from 'react';
import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import Nav from '../../../reusable/Nav';
import Content, {
  AgentStep,
  BuyerStep,
  MemberStep,
  SellerStep,
} from './HowItWorks/Content';

enum Actor {
  Buyer = 'Buyer',
  Seller = 'Seller',
  Member = 'DAO User',
  Agent = 'Real Estate Agent',
}

const stepByActor = {
  [Actor.Buyer]: BuyerStep,
  [Actor.Seller]: SellerStep,
  [Actor.Member]: MemberStep,
  [Actor.Agent]: AgentStep,
};

const HowItWorks = () => {
  const [actor, setActor] = React.useState<Actor>(Actor.Buyer);
  const [step, setStep] = React.useState<
    BuyerStep | SellerStep | MemberStep | AgentStep
  >(BuyerStep.CreateSellContract);

  React.useEffect(() => {
    const step = stepByActor[actor];
    const firstStep = step[Object.keys(step)[0] as keyof typeof step];
    setStep(firstStep);
  }, [actor]);

  return (
    <Container.Container className="w-full">
      <Heading.H2 className="text-center">How it works</Heading.H2>
      <Container.FlexCols className="w-full">
        <Nav value={actor} options={Actor} onChange={setActor} />
      </Container.FlexCols>
      <Container.FlexCols className="w-full">
        <Nav value={step} options={stepByActor[actor]} onChange={setStep} />
      </Container.FlexCols>
      <Content step={step} />
    </Container.Container>
  );
};

export default HowItWorks;
