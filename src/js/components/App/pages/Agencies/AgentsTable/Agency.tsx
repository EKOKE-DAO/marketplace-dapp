import * as Icon from 'react-icons/fi';

import { Agency } from '../../../../../data/agency';
import Container from '../../../../reusable/Container';
import { Route } from '../../../../../utils/routes';

import AgencyPlaceholder from '../../../../../../assets/images/real-estate-placeholder.webp';

interface Props {
  agency: Agency;
}

const AgencyView = ({ agency }: Props) => (
  <a href={Route.agentUrl(agency.owner)}>
    <Container.Card hoverScale className="bg-white !p-0 rounded-lg h-full">
      <Container.FlexCols className="items-start gap-4">
        <Container.Container className="w-full">
          <img
            src={agency.logo ?? AgencyPlaceholder}
            alt={agency.name}
            className="w-full object-cover sm:h-[300px] rounded-t-lg"
            width={300}
            height={300}
          />
        </Container.Container>
        <Container.FlexCols className="px-4 pb-4 gap-2 justify-between h-full">
          <span className="block text-brand text-lg font-semibold">
            {agency.name}
          </span>
          <span className="text-gray-500">
            <Icon.FiMapPin size={16} className="text-gray-500 mr-2 inline" />
            {agency.address}
            {agency.city && `, ${agency.city}`}
            {agency.region && `, ${agency.region}`}
            {agency.country && `, ${agency.country}`}
          </span>
        </Container.FlexCols>
      </Container.FlexCols>
    </Container.Card>
  </a>
);

export default AgencyView;
