import * as React from 'react';
import Container from '../../../reusable/Container';
import Alerts from '../../../reusable/Alerts';

const DemoAlert = () => (
  <Container.Container className="w-full">
    <Container.Container className="mx-auto">
      <Alerts.Warning>
        This is just a demo of the marketplace. The marketplace is not live yet.
        You can view some mocked real estate properties, but you cannot buy
        them.
      </Alerts.Warning>
    </Container.Container>
  </Container.Container>
);

export default DemoAlert;
