import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../../reusable/Container';
import Button from '../../../../reusable/Button';
import Link from '../../../../reusable/Link';
import { getAgents } from '../../../../../api/getAgents';
import { useAppContext } from '../../../AppContext';
import { PopupMap } from '../../../../reusable/Map';
import { Agency } from '../../../../../data/contract';
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

  const [agencies, setAgencies] = React.useState<Agency[]>([]);
  const [radius, setRadius] = React.useState<number>(100);

  const reloadContracts = async (
    lat: number,
    lng: number,
    newRadius: number,
  ) => {
    if (newRadius !== radius) setRadius(newRadius);

    try {
      const agencies = await getAgents({
        latitude: `${lat}`,
        longitude: `${lng}`,
        radius: `${newRadius}`,
      });

      setAgencies(agencies);
    } catch (error) {
      console.error('Error getting contracts:', error);
      setAppError('Error getting contracts by position');
    }
  };

  // make markers
  const markers = agencies
    .filter((agency) => agency.lat !== undefined && agency.lng !== undefined)
    .map((agency) => ({
      link: Route.agentUrl(agency.owner),
      position: {
        lat: Number(agency.lat),
        lng: Number(agency.lng),
      },
      markerChild: (
        <Container.FlexCols className="items-center gap-2">
          {agency.logo && (
            <img src={agency.logo} alt={agency.name} width={150} height={150} />
          )}
          <span className="block text-lg">{agency.name}</span>
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
