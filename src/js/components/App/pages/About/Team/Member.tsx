import * as React from 'react';

import Container from '../../../../reusable/Container';

interface Props {
  name: string;
  role: string;
  image: string;
  children: React.ReactNode;
}

const Member = ({ name, role, image, children }: Props) => (
  <Container.FlexCols className="items-center text-center">
    <img
      className="rounded-full shadow-lg grayscale mb-4"
      src={image}
      alt={name}
      width={150}
      height={150}
    />
    <span className="text-lg block font-bold text-brandRed">{name}</span>
    <span className="text-md block font-bold text-text">{role}</span>
    <Container.Container>{children}</Container.Container>
  </Container.FlexCols>
);

export default Member;
