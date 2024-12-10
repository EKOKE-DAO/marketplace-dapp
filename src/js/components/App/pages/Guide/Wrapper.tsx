import * as React from 'react';
import { useLocation } from 'react-router-dom';
import * as IconMd from 'react-icons/md';
import * as FaIcon from 'react-icons/fa6';

import { Route } from '../../../../utils/routes';
import Container from '../../../reusable/Container';
import Link from '../../../reusable/Link';

enum Item {
  Architecture = Route.GUIDE_ARCHITECTURE,
  Faq = Route.GUIDE_FAQ,
  DeferredData = Route.GUIDE_CANISTERS_DATA,
  DeferredMinter = Route.GUIDE_CANISTERS_MINTER,
  DeferredContracts = Route.GUIDE_CONTRACTS_DEFERRED,
  EkokeContracts = Route.GUIDE_CONTRACTS_EKOKE,
  MarketplaceContracts = Route.GUIDE_CONTRACTS_MARKETPLACE,
  RewardPoolContracts = Route.GUIDE_CONTRACTS_REWARD_POOL,
  Whitepaper = Route.GUIDE_WHITEPAPER,
}

const menu = {
  [Item.Faq]: {
    title: 'F.A.Q.',
    url: Route.GUIDE_FAQ,
    icon: <IconMd.MdQuestionMark className="inline mr-2" size={24} />,
  },
  [Item.Architecture]: {
    title: 'Architecture',
    url: Route.GUIDE_ARCHITECTURE,
    icon: <IconMd.MdAccountTree className="inline mr-2" size={24} />,
  },
  [Item.DeferredData]: {
    title: 'Deferred Data',
    url: Route.GUIDE_CANISTERS_DATA,
    icon: <FaIcon.FaInfinity className="inline mr-2" size={24} />,
  },
  [Item.DeferredMinter]: {
    title: 'Deferred Minter',
    url: Route.GUIDE_CANISTERS_MINTER,
    icon: <FaIcon.FaInfinity className="inline mr-2" size={24} />,
  },
  [Item.DeferredContracts]: {
    title: 'Deferred Contracts',
    url: Route.GUIDE_CONTRACTS_DEFERRED,
    icon: <FaIcon.FaEthereum className="inline mr-2" size={24} />,
  },
  [Item.EkokeContracts]: {
    title: 'Ekoke Contracts',
    url: Route.GUIDE_CONTRACTS_EKOKE,
    icon: <FaIcon.FaEthereum className="inline mr-2" size={24} />,
  },
  [Item.MarketplaceContracts]: {
    title: 'Marketplace Contracts',
    url: Route.GUIDE_CONTRACTS_MARKETPLACE,
    icon: <FaIcon.FaEthereum className="inline mr-2" size={24} />,
  },
  [Item.RewardPoolContracts]: {
    title: 'Reward Pool Contracts',
    url: Route.GUIDE_CONTRACTS_REWARD_POOL,
    icon: <FaIcon.FaEthereum className="inline mr-2" size={24} />,
  },
  [Item.Whitepaper]: {
    title: 'Whitepaper',
    url: Route.GUIDE_WHITEPAPER,
    icon: <IconMd.MdDescription className="inline mr-2" size={24} />,
  },
};

const routeToItems = {
  [Route.url(Route.GUIDE_FAQ)]: Item.Faq,
  [Route.url(Route.GUIDE_ARCHITECTURE)]: Item.Architecture,
  [Route.url(Route.GUIDE_CANISTERS_DATA)]: Item.DeferredData,
  [Route.url(Route.GUIDE_CANISTERS_MINTER)]: Item.DeferredMinter,
  [Route.url(Route.GUIDE_CONTRACTS_DEFERRED)]: Item.DeferredContracts,
  [Route.url(Route.GUIDE_CONTRACTS_EKOKE)]: Item.EkokeContracts,
  [Route.url(Route.GUIDE_CONTRACTS_MARKETPLACE)]: Item.MarketplaceContracts,
  [Route.url(Route.GUIDE_CONTRACTS_REWARD_POOL)]: Item.RewardPoolContracts,
  [Route.url(Route.GUIDE_WHITEPAPER)]: Item.Whitepaper,
};

interface Props {
  children?: React.ReactNode | React.ReactNode[] | string;
}

const Wrapper = ({ children }: Props) => (
  <Container.FlexRow className="w-full">
    <Container.Container className="w-3/12 xl:w-2/12">
      <Menu />
    </Container.Container>
    <Container.Container className="w-9/12 xl:w-10/12 bg-white">
      {children}
    </Container.Container>
  </Container.FlexRow>
);

const Menu = () => {
  const { pathname } = useLocation();
  const current: Item = routeToItems[pathname];

  return (
    <Container.FlexCols className="min-h-screen gap-2 border-r-2">
      {Object.entries(menu).map(([key, value]) => (
        <Container.Container key={key}>
          <Link.Default
            className={`${(key as unknown as Item) === current ? 'border-b-4 border-brandRed text-brand bg-gray-200 hover:bg-gray-300' : 'text-text border-b-2 border-transparent'}
            hover:border-brandRed hover:text-text hover:no-underline flex-1`}
            href={value.url}
          >
            <span className="block text-lg py-3 px-4 hover:bg-gray-300">
              {value.icon}
              {value.title}
            </span>
          </Link.Default>
        </Container.Container>
      ))}
    </Container.FlexCols>
  );
};

export default Wrapper;
