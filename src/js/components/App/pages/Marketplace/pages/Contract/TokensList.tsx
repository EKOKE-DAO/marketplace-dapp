import * as React from 'react';

import { Contract } from '../../../../../../data/contract';
import Container from '../../../../../reusable/Container';
import Heading from '../../../../../reusable/Heading';
import TokenItem from './TokensList/TokenItem';

interface Props {
  contract: Contract;
}

const TokensList = ({ contract }: Props) => {
  const tokenValue = contract.price / contract.installments;
  const tokens = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    value: tokenValue,
  }));

  return (
    <Container.Card className="px-0 py-0 pt-4">
      <Heading.H2 className="px-4">Tokens for sale</Heading.H2>
      <Container.FlexCols>
        {tokens.map((token) => (
          <TokenItem key={token.id} {...token} />
        ))}
      </Container.FlexCols>
    </Container.Card>
  );
};

export default TokensList;
