import * as React from 'react';

import Container from '../../../../reusable/Container';
import Heading from '../../../../reusable/Heading';

interface Props {
  title: string;
  person: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
  reversedLayout?: boolean;
}

const CardStory = ({ title, person, reversedLayout, children }: Props) => (
  <Container.Card className="p-8">
    <Container.FlexResponsiveRow
      className={`gap-8 sm:gap-2 sm:items-center ${reversedLayout ? '!flex-row-reverse sm:!flex-col' : ''}`}
    >
      <Container.Container>{person}</Container.Container>
      <Container.Container className="w-full">
        <Heading.H3 className="!font-bold sm:text-center text-xl flex-1">
          {title}
        </Heading.H3>
        <Container.Container>{children}</Container.Container>
      </Container.Container>
    </Container.FlexResponsiveRow>
  </Container.Card>
);

export default CardStory;
