import * as React from 'react';
import * as Icon from 'react-icons/fi';
import * as MdIcon from 'react-icons/md';

import { Contract } from '../../../../../../data/contract';
import Container from '../../../../../reusable/Container';
import Heading from '../../../../../reusable/Heading';
import Paragraph from '../../../../../reusable/Paragraph';
import Progress from './RealEstateCard/Progress';
import YoutubeVideo from '../../../../../reusable/YoutubeVideo';
import ContractDocuments from './RealEstateCard/ContractDocuments';
import Link from '../../../../../reusable/Link';
import { Route } from '../../../../../../utils/routes';

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
            <Icon.FiDollarSign
              size={16}
              className="text-gray-500 mr-2 inline"
            />
            {contract.price.toLocaleString('en-US', {
              style: 'currency',
              currency: contract.currency,
            })}
          </Container.Container>
          <Container.Container className="text-sm text-gray-500">
            <Icon.FiMapPin size={16} className="inline mr-2" />
            {contract.realEstate.address}{' '}
            {contract.realEstate.zone && `, ${contract.realEstate.zone}`}
            {contract.realEstate.city && `, ${contract.realEstate.city}`}
            {contract.realEstate.region && `, ${contract.realEstate.region}`}
            {contract.realEstate.country && `, ${contract.realEstate.country}`}
          </Container.Container>
          {contract.agency && (
            <Container.Container className="text-sm text-gray-500">
              <Icon.FiSearch size={16} className="text-gray-500 mr-2 inline" />
              <Link.Default
                className="text-brand"
                href={Route.agentUrl(contract.agency.owner)}
              >
                {contract.agency.name}
              </Link.Default>
            </Container.Container>
          )}
          <Container.Container className="text-sm text-gray-500">
            <Icon.FiCalendar size={16} className="inline mr-2" />
            Expires on {contract.expiration.toLocaleDateString()}
          </Container.Container>
          <Container.Container className="grid grid-cols-2 sm:grid-cols-1">
            {contract.realEstate.rooms !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBedroomParent
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {contract.realEstate.rooms} Rooms
              </Container.Container>
            )}
            {contract.realEstate.squareMeters !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdSquareFoot
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {contract.realEstate.squareMeters} Square Meters
              </Container.Container>
            )}
            {contract.realEstate.bathrooms !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBathtub
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {contract.realEstate.bathrooms} Bathrooms
              </Container.Container>
            )}
            {contract.realEstate.balconies !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBalcony
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {contract.realEstate.balconies} Balconies
              </Container.Container>
            )}
            {contract.realEstate.garden === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdLocalFlorist
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Garden
              </Container.Container>
            )}
            {contract.realEstate.pool === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdPool
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Swimming Pool
              </Container.Container>
            )}
            {contract.realEstate.garage === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdGarage
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Garage
              </Container.Container>
            )}
            {contract.realEstate.parking === true && (
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
      <Progress contractId={contract.id} installments={contract.installments} />
      <Paragraph.Leading>{contract.realEstate.description}</Paragraph.Leading>
      {contract.realEstate.youtubeUrl && (
        <Container.Container className="mx-auto">
          <YoutubeVideo width={720} url={contract.realEstate.youtubeUrl} />
        </Container.Container>
      )}
      {contract.documents.length > 0 && (
        <ContractDocuments
          contract={contract.id}
          documents={contract.documents}
        />
      )}
    </Container.FlexCols>
  </Container.Card>
);

export default RealEstateCard;
