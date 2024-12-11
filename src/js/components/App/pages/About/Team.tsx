import * as React from 'react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';

import LelioImg from '../../../../../assets/images/team/lelio.webp';
import VeesoImg from '../../../../../assets/images/team/veeso.webp';
import ChiaraImg from '../../../../../assets/images/team/chiara.webp';
import Member from './Team/Member';
import Paragraph from '../../../reusable/Paragraph';

const Team = () => (
  <Container.FlexCols className="justify-center items-center">
    <Heading.H2>Meet the team</Heading.H2>
    <Container.Container className="justify-between grid xl:grid-cols-5 sm:grid-cols-1 grid-cols-2 gap-8">
      <Member image={LelioImg} name={'Lelio Pellegrini'} role={'CEO & Founder'}>
        <Paragraph.Default>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </Paragraph.Default>
      </Member>
      <Member
        image={VeesoImg}
        name={'Christian "veeso" Visintin'}
        role={'CTO & Software Engineer'}
      >
        <Paragraph.Default>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </Paragraph.Default>
      </Member>
      <Member image={ChiaraImg} name={'Chiara Rovis'} role={'Web developer'}>
        <Paragraph.Default>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </Paragraph.Default>
      </Member>
      <Member
        image={'http://placekittens.com/150/150'}
        name={'Michele Sessa'}
        role={'Marketing manager'}
      >
        <Paragraph.Default>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </Paragraph.Default>
      </Member>
      <Member
        image={'http://placekittens.com/150/150'}
        name={'Silvia...'}
        role={'Graphic designer'}
      >
        <Paragraph.Default>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </Paragraph.Default>
      </Member>
    </Container.Container>
  </Container.FlexCols>
);

export default Team;
