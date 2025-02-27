import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../../reusable/Container';
import Button from '../../../../reusable/Button';
import Link from '../../../../reusable/Link';
import getContracts from '../../../../../api/getContracts';
import { useAppContext } from '../../../AppContext';
import { PopupMap } from '../../../../reusable/Map';
import { Contract } from '../../../../../data/contract';
import getContractById from '../../../../../api/getContractById';
import { Route } from '../../../../../utils/routes';

const Map = () => {
  const [mapOpen, setMapOpen] = React.useState<boolean>(false);

  return (
    <Container.Container className="w-full my-4">
      <Container.FlexCols className="w-full border rounded-lg bg-map min-h-[170px] justify-around items-center">
        <Container.Container>
          <Icon.FiMapPin className="text-brand" size={48} fill="white" />
        </Container.Container>
        <Container.Container>
          <Button.Primary onClick={() => setMapOpen(true)}>
            See on map
          </Button.Primary>
        </Container.Container>
      </Container.FlexCols>
      <MapRender open={mapOpen} onClose={() => setMapOpen(false)} />
    </Container.Container>
  );
};

const MapLink = () => {
  const [mapOpen, setMapOpen] = React.useState<boolean>(false);

  return (
    <>
      <Link.Default
        className="!text-brand hover:cursor-pointer"
        onClick={() => setMapOpen(true)}
      >
        <Icon.FiMapPin className="text-brand inline mr-2" size={24} />
        See on map
      </Link.Default>
      <MapRender open={mapOpen} onClose={() => setMapOpen(false)} />
    </>
  );
};

interface RenderProps {
  open: boolean;
  onClose: () => void;
}

const MapRender = ({ open, onClose }: RenderProps) => {
  const { setAppError } = useAppContext();

  const [contracts, setContracts] = React.useState<Contract[]>([]);
  const [radius, setRadius] = React.useState<number>(100);

  const reloadContracts = async (
    lat: number,
    lng: number,
    newRadius: number,
  ) => {
    if (newRadius !== radius) setRadius(newRadius);

    try {
      const contractIds = await getContracts({
        latitude: `${lat}`,
        longitude: `${lng}`,
        radius: `${newRadius}`,
      });

      const fetchedContracts = await Promise.all(
        contractIds.map((contractId) => getContractById(contractId)),
      );

      setContracts(fetchedContracts);
    } catch (error) {
      console.error('Error getting contracts:', error);
      setAppError('Error getting contracts by position');
    }
  };

  // make markers
  const markers = contracts.map((contract) => ({
    link: Route.marketplaceContractUrl(contract.id),
    position: {
      lat: contract.realEstate.latitude ?? 0,
      lng: contract.realEstate.longitude ?? 0,
    },
    markerChild: (
      <Container.FlexCols className="items-center gap-2">
        {contract.realEstate.image && (
          <img
            src={contract.realEstate.image}
            alt={contract.realEstate.name}
            width={150}
            height={150}
          />
        )}
        <span className="block text-lg">{contract.realEstate.name}</span>
        <span className="block text-sm text-text">
          {contract.price.toLocaleString('en-US', {
            style: 'currency',
            currency: contract.currency,
          })}{' '}
        </span>
      </Container.FlexCols>
    ),
  }));

  if (!open) {
    return null;
  }

  return (
    <PopupMap
      markers={markers}
      zoom={10}
      onReload={reloadContracts}
      onClose={onClose}
    />
  );
};

export { Map, MapLink };
