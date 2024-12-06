import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from './Container';
import Button from './Button';
import Map, { MapMarker, Position } from './Map/GMap';

interface Props {
  center?: Position;
  markers: MapMarker[];
  zoom?: number;
  onCenterChange?: (position: Position) => void;
  onZoomChange?: (zoom: number) => void;
}

const SeeOnMap = (props: Props) => {
  const [revealMap, setRevealMap] = React.useState(false);

  if (revealMap) {
    return (
      <Container.Container className="w-full my-4">
        <Map {...props} />
      </Container.Container>
    );
  }

  return (
    <Container.Container className="w-full my-4">
      <Container.FlexCols className="w-full border rounded-lg bg-map min-h-[170px] justify-around items-center">
        <Container.Container>
          <Icon.FiMapPin className="text-brand" size={48} fill="white" />
        </Container.Container>
        <Container.Container>
          <Button.Primary onClick={() => setRevealMap(true)}>
            See on map
          </Button.Primary>
        </Container.Container>
      </Container.FlexCols>
    </Container.Container>
  );
};

interface PopupMapProps extends Props {
  onReload: (lat: number, lng: number, radius: number) => void;
  onClose: () => void;
}

const PopupMap = (props: PopupMapProps) => {
  const [center, setCenter] = React.useState<Position>();
  const [currentPosition, setCurrentPosition] = React.useState<Position>();
  const [zoom, setZoom] = React.useState<number>(10);
  const [postsDebouncer, setPostsDebouncer] =
    React.useState<NodeJS.Timeout | null>(null);

  const onPositionChange = (position: Position) => {
    setCurrentPosition(position);
  };

  const onZoomChange = (zoom: number) => {
    setZoom(zoom);
  };

  React.useEffect(() => {
    if (!props.center) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    } else {
      setCenter(props.center);
      setCurrentPosition(props.center);
    }
  }, [props.center]);

  React.useEffect(() => {
    if (currentPosition) {
      if (postsDebouncer) {
        clearTimeout(postsDebouncer);
      }
      setPostsDebouncer(
        setTimeout(() => {
          const radius = (40075 / Math.pow(2, zoom)) * 2;
          props.onReload(currentPosition.lat, currentPosition.lng, radius);
        }, 2000),
      );
    }
  }, [currentPosition, zoom]);

  return (
    <Container.FlexCols className="fixed z-50 items-center justify-center bg-gray-700/80 w-full h-full top-0 left-0">
      <Container.Container className="m-auto bg-brandLight relative">
        <Container.FlexRow
          className="justify-center hover:cursor-pointer hover:bg-brandLightDark px-4 items-center z-10 absolute text-brand shadow-lg w-auto h-[48px] top-[-24px] sm:top-[12px] right-[-24px] sm:right-[12px] bg-brandLight"
          onClick={props.onClose}
        >
          Chiudi mappa
          <Icon.FiX className="text-brand inline" size={24} />
        </Container.FlexRow>
        <Map
          className="w-[80vw] h-[80vh] sm:w-screen sm:h-screen"
          markers={props.markers}
          center={center}
          zoom={zoom}
          onCenterChange={onPositionChange}
          onZoomChange={onZoomChange}
        />
      </Container.Container>
    </Container.FlexCols>
  );
};

export { PopupMap, SeeOnMap };
