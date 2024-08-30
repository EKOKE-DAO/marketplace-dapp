import * as React from 'react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';
import CardStory from './Scenarios/CardStory';
import Persons from './Scenarios/Persons';
import Paragraph from '../../../reusable/Paragraph';

const Scenarios = () => (
  <Container.Container>
    <Heading.H2 className="text-center">Possible Scenarios</Heading.H2>
    <Container.FlexCols className="gap-8">
      <CardStory title={'Robert'} person={<Persons.Robert />}>
        <Paragraph.Leading>Ciaone</Paragraph.Leading>
      </CardStory>
      <CardStory title={'Alice'} person={<Persons.Alice />} reversedLayout>
        <Paragraph.Leading>Ciaone</Paragraph.Leading>
      </CardStory>
      <CardStory title={'Darius'} person={<Persons.Darius />}>
        <Paragraph.Leading>Ciaone</Paragraph.Leading>
      </CardStory>
    </Container.FlexCols>
  </Container.Container>
);

export default Scenarios;
