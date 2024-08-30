import * as React from 'react';

import Container from '../../reusable/Container';
import Timeline from './Timeline/TimelineSvg';

const GetStarted = () => (
  <Container.FlexCols className="gap-8">
    <Container.FlexCols className="items-center">
      <Timeline />
    </Container.FlexCols>
  </Container.FlexCols>
);

export default GetStarted;
