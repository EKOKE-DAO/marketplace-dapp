import { useLocation } from 'react-router-dom';

import { Route } from '../../../../../utils/routes';
import Container from '../../../../reusable/Container';
import Link from '../../../../reusable/Link';

enum Item {
  Collected = Route.PROFILE_COLLECTED,
  Contracts = Route.PROFILE_CONTRACTS,
}

const menu = {
  [Item.Collected]: {
    title: 'Collected',
    url: Route.PROFILE_COLLECTED,
  },
  [Item.Contracts]: {
    title: 'Contracts',
    url: Route.PROFILE_CONTRACTS,
  },
};

const routeToItems = {
  [Route.url(Route.PROFILE)]: Item.Collected,
  [Route.url(Route.PROFILE_COLLECTED)]: Item.Collected,
  [Route.url(Route.PROFILE_CONTRACTS)]: Item.Contracts,
};

const Nav = () => {
  const { pathname } = useLocation();
  const current: Item = routeToItems[pathname];

  return (
    <Container.FlexRow className="gap-2 items-center w-min">
      {Object.entries(menu).map(([key, value]) => (
        <Link.Default
          key={key}
          className={`${(key as unknown as Item) === current ? 'border-b-4 border-brandRed text-brand bg-gray-200 hover:bg-gray-300' : 'text-text border-b-2 border-transparent'}
            hover:border-brandRed hover:text-text hover:no-underline flex-1`}
          href={value.url}
        >
          <span className="block rounded-lg py-3 px-4 hover:bg-gray-300">
            {value.title}
          </span>
        </Link.Default>
      ))}
    </Container.FlexRow>
  );
};

export default Nav;
