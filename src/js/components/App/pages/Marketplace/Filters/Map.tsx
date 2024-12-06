import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../../reusable/Container';
import Button from '../../../../reusable/Button';

const Map = () => {
  return (
    <Container.Container className="w-full my-4">
      <Container.FlexCols className="w-full border rounded-lg bg-map min-h-[170px] justify-around items-center">
        <Container.Container>
          <Icon.FiMapPin className="text-brand" size={48} fill="white" />
        </Container.Container>
        <Container.Container>
          <Button.Primary disabled>See on map</Button.Primary>
        </Container.Container>
      </Container.FlexCols>
    </Container.Container>
  );
};

export default Map;
