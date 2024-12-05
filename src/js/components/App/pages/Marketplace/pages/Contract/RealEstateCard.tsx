import * as React from 'react';
import * as Icon from 'react-feather';

import { Contract } from '../../../../../../data/contract';
import Container from '../../../../../reusable/Container';
import Heading from '../../../../../reusable/Heading';
import Paragraph from '../../../../../reusable/Paragraph';
import Progress from './RealEstateCard/Progress';

interface Props {
  contract: Contract;
}

const RealEstateCard = ({ contract }: Props) => (
  <Container.Card>
    <Container.FlexCols className="gap-4">
      <Container.FlexResponsiveRow className="gap-4">
        <Container.Container>
          <img
            src={contract.realEstate.image}
            alt={contract.realEstate.name}
            className="w-full sm:object-cover sm:h-[300px] rounded-lg"
            width={300}
            height={300}
          />
        </Container.Container>
        <Container.FlexCols className="gap-2">
          <Heading.H1L>{contract.realEstate.name}</Heading.H1L>
          <Container.Container className="text-sm text-gray-500">
            <Icon.DollarSign size={16} className="text-gray-500 mr-2 inline" />
            {contract.price.toLocaleString('en-US', {
              style: 'currency',
              currency: contract.currency,
            })}
          </Container.Container>
          <Container.Container className="text-sm text-gray-500">
            <Icon.MapPin size={16} className="inline mr-2" />
            {contract.realEstate.address}
          </Container.Container>
          <Container.Container className="text-sm text-gray-500">
            <Icon.Box size={16} className="text-gray-500 mr-2 inline" />
            {contract.realEstate.rooms
              ? `${contract.realEstate.rooms} Rooms - `
              : ''}
            {contract.realEstate.bathrooms
              ? `${contract.realEstate.bathrooms} Bathrooms`
              : ''}
          </Container.Container>
        </Container.FlexCols>
      </Container.FlexResponsiveRow>
      <Progress contractId={contract.id} installments={contract.installments} />
      <Paragraph.Leading>{contract.realEstate.description}</Paragraph.Leading>
    </Container.FlexCols>
  </Container.Card>
);

export default RealEstateCard;
