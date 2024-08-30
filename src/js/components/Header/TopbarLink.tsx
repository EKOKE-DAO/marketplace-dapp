import * as React from 'react';

import { Route } from '../../utils/routes';
import Container from '../reusable/Container';
import Link from '../reusable/Link';

interface Props {
  href: Route;
  name: string;
}

const TopbarLink = ({ href, name }: Props) => {
  const currentPath = document.location.pathname;

  if (currentPath === Route.url(href)) {
    return (
      <Container.Container className="border-brandRed border-b-4 py-2">
        <Link.Default href={href} className="text-lg">
          {name}
        </Link.Default>
      </Container.Container>
    );
  }

  return (
    <Container.Container className="py-2">
      <Link.Default href={href} className="text-lg">
        {name}
      </Link.Default>
    </Container.Container>
  );
};

export default TopbarLink;
