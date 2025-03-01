import * as Icon from 'react-icons/fi';
import * as MdIcon from 'react-icons/md';

import Container from '../../../../reusable/Container';
import Paragraph from '../../../../reusable/Paragraph';
import { RealEstate } from '../../../../../data/real_estate';
import { elide } from '../../../../../utils/text';

import PropertyPlaceholder from '../../../../../../assets/images/property-placeholder.webp';

interface Props {
  realEstate: RealEstate;
}

const MAX_LENGTH = 200;

const Item = ({ realEstate }: Props) => (
  <Container.FlexCols className="items-start gap-4">
    <Container.Container className="w-full">
      <img
        src={realEstate.image ?? PropertyPlaceholder}
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
        <Icon.FiMapPin size={16} className="text-gray-500 mr-2 inline" />
        {realEstate.address} {realEstate.zone && `, ${realEstate.zone}`}
        {realEstate.city && `, ${realEstate.city}`}
        {realEstate.region && `, ${realEstate.region}`}
        {realEstate.country && `, ${realEstate.country}`}
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
        {realEstate.square_meters !== undefined && (
          <Container.Container className="text-sm text-gray-500">
            <MdIcon.MdSquareFoot
              size={16}
              className="text-gray-500 mr-2 inline"
            />
            {realEstate.square_meters} Square Meters
          </Container.Container>
        )}
        {realEstate.bathrooms !== undefined && (
          <Container.Container className="text-sm text-gray-500">
            <MdIcon.MdBathtub size={16} className="text-gray-500 mr-2 inline" />
            {realEstate.bathrooms} Bathrooms
          </Container.Container>
        )}
      </Container.FlexCols>
      <Paragraph.Default>
        {elide(realEstate.description, MAX_LENGTH)}
      </Paragraph.Default>
    </Container.FlexCols>
  </Container.FlexCols>
);

export default Item;
