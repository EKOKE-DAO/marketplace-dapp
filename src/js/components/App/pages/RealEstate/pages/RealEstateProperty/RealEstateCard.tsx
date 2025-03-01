import * as React from 'react';
import * as Icon from 'react-icons/fi';
import * as MdIcon from 'react-icons/md';

import Container from '../../../../../reusable/Container';
import Heading from '../../../../../reusable/Heading';
import Paragraph from '../../../../../reusable/Paragraph';
import YoutubeVideo from '../../../../../reusable/YoutubeVideo';
import Link from '../../../../../reusable/Link';
import { Route } from '../../../../../../utils/routes';
import { RealEstate } from '../../../../../../data/real_estate';
import { Agency } from '../../../../../../data/agency';
import { getAgentByPrincipal } from '../../../../../../api/getAgent';

import PropertyPlaceholder from '../../../../../../../assets/images/property-placeholder.webp';

interface Props {
  property: RealEstate;
}

const RealEstateCard = ({ property }: Props) => {
  const [agency, setAgency] = React.useState<Agency>();

  React.useEffect(() => {
    getAgentByPrincipal(property.agency).then(setAgency).catch(console.error);
  }, [property]);

  return (
    <Container.Card>
      <Container.FlexCols className="gap-4">
        <Container.FlexResponsiveRow className="gap-4">
          <Container.Container>
            <img
              src={property.image ?? PropertyPlaceholder}
              alt={property.name}
              className="sm:object-cover sm:h-auto rounded-lg w-[300px] h-auto"
              width={300}
              height={200}
            />
          </Container.Container>
          <Container.FlexCols className="gap-2">
            <Heading.H1L>{property.name}</Heading.H1L>

            <Container.Container className="text-sm text-gray-500">
              <Icon.FiMapPin size={16} className="inline mr-2" />
              {property.address} {property.zone && `, ${property.zone}`}
              {property.city && `, ${property.city}`}
              {property.region && `, ${property.region}`}
              {property.country && `, ${property.country}`}
            </Container.Container>
            {agency && (
              <Container.Container className="text-sm text-gray-500">
                <Icon.FiSearch
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                <Link.Default
                  className="text-brand"
                  href={Route.agentUrl(agency.owner)}
                >
                  {agency.name}
                </Link.Default>
              </Container.Container>
            )}
            <Container.Container className="grid grid-cols-2 sm:grid-cols-1">
              {property.rooms !== undefined && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdBedroomParent
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  {property.rooms} Rooms
                </Container.Container>
              )}
              {property.square_meters !== undefined && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdSquareFoot
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  {property.square_meters} Square Meters
                </Container.Container>
              )}
              {property.bathrooms !== undefined && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdBathtub
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  {property.bathrooms} Bathrooms
                </Container.Container>
              )}
              {property.bedrooms !== undefined && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdBedroomParent
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  {property.bedrooms} Bedrooms
                </Container.Container>
              )}
              {property.year_of_construction !== undefined && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdCalendarToday
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  {property.year_of_construction}
                </Container.Container>
              )}
              {property.balconies !== undefined && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdBalcony
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  {property.balconies} Balconies
                </Container.Container>
              )}
              {property.garden === true && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdLocalFlorist
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  Garden
                </Container.Container>
              )}
              {property.pool === true && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdPool
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  Swimming Pool
                </Container.Container>
              )}
              {property.garage === true && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdGarage
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  Garage
                </Container.Container>
              )}
              {property.parking === true && (
                <Container.Container className="text-sm text-gray-500">
                  <MdIcon.MdLocalParking
                    size={16}
                    className="text-gray-500 mr-2 inline"
                  />
                  Outside Parking
                </Container.Container>
              )}
            </Container.Container>
          </Container.FlexCols>
        </Container.FlexResponsiveRow>
        <Paragraph.Leading>{property.description}</Paragraph.Leading>
        {property.youtube && (
          <Container.Container className="mx-auto">
            <YoutubeVideo width={720} url={property.youtube} />
          </Container.Container>
        )}
      </Container.FlexCols>
    </Container.Card>
  );
};

export default RealEstateCard;
