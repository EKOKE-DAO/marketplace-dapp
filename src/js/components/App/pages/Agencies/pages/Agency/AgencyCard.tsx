import * as Icon from 'react-icons/fi';
import * as FaIcon from 'react-icons/fa6';

import { Agency } from '../../../../../../data/agency';
import Container from '../../../../../reusable/Container';
import Heading from '../../../../../reusable/Heading';
import Link from '../../../../../reusable/Link';
import { Route } from '../../../../../../utils/routes';

import AgencyPlaceholder from '../../../../../../../assets/images/real-estate-placeholder.webp';

interface Props {
  agency: Agency;
}

const AgencyCard = ({ agency }: Props) => (
  <Container.Card>
    <Container.FlexCols className="gap-4">
      <Container.FlexResponsiveRow className="gap-4">
        <Container.Container>
          <img
            src={agency.logo ?? AgencyPlaceholder}
            alt={agency.name}
            className="w-full sm:object-cover sm:h-[300px] rounded-lg"
            width={300}
            height={300}
          />
        </Container.Container>
        <Container.FlexCols className="gap-2">
          <Heading.H1L>{agency.name}</Heading.H1L>
          <Container.Container className="text-sm text-gray-500">
            <Icon.FiMapPin size={16} className="inline mr-2" />
            {agency.address} {agency.city && `, ${agency.city}`}
            {agency.region && `, ${agency.region}`}
            {agency.country && `, ${agency.country}`}
          </Container.Container>
          {agency.website && (
            <Container.Container className="text-sm text-gray-500">
              <Icon.FiGlobe size={16} className="text-gray-500 mr-2 inline" />
              <Link.Default
                className="text-gray-500"
                href={Route.agentUrl(agency.website)}
              >
                {agency.website}
              </Link.Default>
            </Container.Container>
          )}
          {agency.email && (
            <Container.Container className="text-sm text-gray-500">
              <Icon.FiMail size={16} className="text-gray-500 mr-2 inline" />
              <Link.Default
                className="text-gray-500"
                href={`mailto:${agency.email}`}
              >
                {agency.email}
              </Link.Default>
            </Container.Container>
          )}
          {agency.mobile && (
            <Container.Container className="text-sm text-gray-500">
              <Icon.FiSmartphone
                size={16}
                className="text-gray-500 mr-2 inline"
              />
              <Link.Default
                className="text-gray-500"
                href={`tel:${agency.mobile}`}
              >
                {agency.mobile}
              </Link.Default>
            </Container.Container>
          )}
          {agency.vat && (
            <Container.Container className="text-sm text-gray-500">
              <FaIcon.FaBuilding
                size={16}
                className="text-gray-500 mr-2 inline"
              />
              {agency.vat}
            </Container.Container>
          )}
        </Container.FlexCols>
      </Container.FlexResponsiveRow>
    </Container.FlexCols>
  </Container.Card>
);

export default AgencyCard;
