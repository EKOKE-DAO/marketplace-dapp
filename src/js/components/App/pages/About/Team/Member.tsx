import * as React from 'react';
import * as FaIcon from 'react-icons/fa6';

import Container from '../../../../reusable/Container';

interface Props {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  children: React.ReactNode;
}

const Member = ({ name, role, image, linkedin, github, children }: Props) => (
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

    <Container.Flex className="justify-center my-2 gap-4">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noreferrer">
          <FaIcon.FaLinkedin size={20} className="text-3xl text-brandRed" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer">
          <FaIcon.FaGithub size={20} className="text-3xl text-brandRed" />
        </a>
      )}
    </Container.Flex>

    <Container.Flex className="justify-center xl:w-4/6">
      {children}
    </Container.Flex>
  </Container.FlexCols>
);

export default Member;
