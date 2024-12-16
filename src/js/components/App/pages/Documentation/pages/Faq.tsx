import * as React from 'react';

import Container from '../../../../reusable/Container';
import Heading from '../../../../reusable/Heading';
import Accordion from '../../../../reusable/Accordion';
import Paragraph from '../../../../reusable/Paragraph';
import Wrapper from '../Wrapper';

const Faq = () => (
  <Wrapper>
    <Heading.H1>Frequently Asked Questions</Heading.H1>
    <Heading.H2 className="text-center">General</Heading.H2>

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
