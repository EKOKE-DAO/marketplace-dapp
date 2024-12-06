import React from 'react';
import * as Icon from 'react-icons/fi';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';

import Container from '../Container';

export interface Position {
  lat: number;
  lng: number;
}

export interface MapMarker {
  link?: string;
  position: Position;
  markerChild?: React.ReactNode;
}

interface Props {
  className?: string;
  center?: Position;
  markers?: MapMarker[];
  zoom?: number;
  onCenterChange?: (position: Position) => void;
  onZoomChange?: (zoom: number) => void;
}

const MapMarkerComponent = ({ link, position, markerChild }: MapMarker) => {
  const [showInfo, setShowInfo] = React.useState(false);

  const onHover = () => {
    setShowInfo(true);
  };

  const onBlur = () => {
    setShowInfo(false);
  };

  const onClick = () => {
    if (window && link) {
      window.open(link);
    }
  };

  return (
    <OverlayView
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      position={position}
    >
      <Container.FlexCols className="relative text-center items-center justify-center w-fit h-fit left-[-24px] top-[-24px]">
        <Icon.FiMapPin
          size={48}
          className="text-brandLight"
          fill="#fd6262"
          onMouseEnter={onHover}
          onClick={onClick}
          onMouseLeave={onBlur}
        />
        {showInfo && markerChild !== undefined && (
          <Container.FlexCols className="absolute z-10 text-center items-center justify-center top-[48px]">
            {markerChild}
          </Container.FlexCols>
        )}
      </Container.FlexCols>
    </OverlayView>
  );
};

const Map = ({
  center,
  markers,
  className,
  zoom,
  onCenterChange,
  onZoomChange,
}: Props) => {
  const [map, setMap] = React.useState<google.maps.Map>();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_APIKEY!,
  });

  const mapMarkers = markers?.map((marker, index) => (
    <MapMarkerComponent key={index} {...marker} />
  ));

  const handleCenterChange = () => {
    const center = map?.getCenter();
    if (center && onCenterChange) {
      onCenterChange({
        lat: center.lat(),
        lng: center.lng(),
      });
    }
  };

  const handleZoomChange = () => {
    const zoom = map?.getZoom();
    if (zoom && onZoomChange) {
      onZoomChange(zoom);
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName={className}
      center={center}
      zoom={zoom ?? 10}
      onLoad={setMap}
      onCenterChanged={handleCenterChange}
      onZoomChanged={handleZoomChange}
    >
      {mapMarkers}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
