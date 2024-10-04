import * as React from 'react';
import * as Icon from 'react-feather';

import Container from '../../../../../../reusable/Container';
import Heading from '../../../../../../reusable/Heading';
import Button from '../../../../../../reusable/Button';

interface Props {
  id: number;
  value: number;
}

const TokenItem = ({ id, value }: Props) => (
  <Container.Container className="border-y border-gray-300 px-6 py-4">
    <Container.FlexRow className="justify-between items-center gap-4">
      <Container.Container>
        <Heading.H3>Token #{id}</Heading.H3>
        <span className="text-sm text-gray-500">
          <Icon.DollarSign size={16} className="text-gray-500 mr-2 inline" />
          {value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </Container.Container>
      <Container.Container>
        <Button.Primary disabled>Buy Token</Button.Primary>
      </Container.Container>
    </Container.FlexRow>
  </Container.Container>
);

export default TokenItem;
