import * as Icon from 'react-icons/fi';
import * as MdIcon from 'react-icons/md';

import { Contract } from '../../../../../data/contract';
import Container from '../../../../reusable/Container';
import Paragraph from '../../../../reusable/Paragraph';

interface Props {
  contract: Contract;
}

const Item = ({
  contract: { expiration, price, currency, realEstate },
}: Props) => (
  <Container.FlexCols className="items-start gap-4">
    <Container.Container className="w-full">
      <img
        src={realEstate.image}
        alt={realEstate.name}
        className="w-full object-cover sm:h-[300px] rounded-t-lg"
        width={300}
        height={200}
      />
    </Container.Container>
    <Container.FlexCols className="px-4 pb-4 gap-2 justify-between h-full">
      <span className="block text-brand text-lg font-semibold">
        {realEstate.name}
      </span>
      <span className="text-gray-500">
        <Icon.FiDollarSign size={16} className="text-gray-500 mr-2 inline" />
        {price.toLocaleString('en-US', {
          style: 'currency',
          currency,
        })}
      </span>
      <span className="text-gray-500">
        <Icon.FiMapPin size={16} className="text-gray-500 mr-2 inline" />
        {realEstate.address} {realEstate.zone && `, ${realEstate.zone}`}
        {realEstate.city && `, ${realEstate.city}`}
        {realEstate.region && `, ${realEstate.region}`}
        {realEstate.country && `, ${realEstate.country}`}
      </span>
      <span className="text-gray-500">
        <Icon.FiCalendar size={16} className="text-gray-500 mr-2 inline" />
        Expires on {expiration.toLocaleDateString()}
      </span>
      <Container.FlexCols>
        {realEstate.rooms !== undefined && (
          <Container.Container className="text-sm text-gray-500">
            <MdIcon.MdBedroomParent
              size={16}
              className="text-gray-500 mr-2 inline"
            />
            {realEstate.rooms} Rooms
          </Container.Container>
        )}
        {realEstate.squareMeters !== undefined && (
          <Container.Container className="text-sm text-gray-500">
            <MdIcon.MdSquareFoot
              size={16}
              className="text-gray-500 mr-2 inline"
            />
            {realEstate.squareMeters} Square Meters
          </Container.Container>
        )}
        {realEstate.bathrooms !== undefined && (
          <Container.Container className="text-sm text-gray-500">
            <MdIcon.MdBathtub size={16} className="text-gray-500 mr-2 inline" />
            {realEstate.bathrooms} Bathrooms
          </Container.Container>
        )}
      </Container.FlexCols>
      <Paragraph.Default>{realEstate.description}</Paragraph.Default>
    </Container.FlexCols>
  </Container.FlexCols>
);

export default Item;
