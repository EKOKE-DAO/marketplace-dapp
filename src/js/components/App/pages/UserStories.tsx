import * as React from 'react';

import Container from '../../reusable/Container';
import Intro from './UserStories/Intro';
import Scenarios from './UserStories/Scenarios';

const UserStories = () => (
  <Container.FlexCols className="gap-8">
    <Intro />
    <Scenarios />
  </Container.FlexCols>
);

export default UserStories;
