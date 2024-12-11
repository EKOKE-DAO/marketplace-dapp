import * as React from 'react';
import { useLocation } from 'react-router-dom';
import * as IconMd from 'react-icons/md';
import * as FaIcon from 'react-icons/fa6';

import { Route } from '../../../../utils/routes';
import Container from '../../../reusable/Container';
import Link from '../../../reusable/Link';
import Button from '../../../reusable/Button';

enum Item {
  Architecture = Route.DOCUMENTATION_ARCHITECTURE,
  Faq = Route.DOCUMENTATION_FAQ,
  DeferredData = Route.DOCUMENTATION_CANISTERS_DATA,
  DeferredMinter = Route.DOCUMENTATION_CANISTERS_MINTER,
  DeferredContracts = Route.DOCUMENTATION_CONTRACTS_DEFERRED,
  EkokeContracts = Route.DOCUMENTATION_CONTRACTS_EKOKE,
  MarketplaceContracts = Route.DOCUMENTATION_CONTRACTS_MARKETPLACE,
  RewardPoolContracts = Route.DOCUMENTATION_CONTRACTS_REWARD_POOL,
  Reward = Route.DOCUMENTATION_REWARD,
  Whitepaper = Route.DOCUMENTATION_WHITEPAPER,
}

const menu = {
  [Item.Faq]: {
    title: 'F.A.Q.',
    url: Route.DOCUMENTATION_FAQ,
    icon: <IconMd.MdQuestionMark className="inline mr-2" size={24} />,
  },
  [Item.Whitepaper]: {
    title: 'Whitepaper',
    url: Route.DOCUMENTATION_WHITEPAPER,
    icon: <IconMd.MdDescription className="inline mr-2" size={24} />,
  },
  [Item.Reward]: {
    title: 'EKOKE Rewards',
    url: Route.DOCUMENTATION_REWARD,
    icon: <IconMd.MdTrendingUp className="inline mr-2" size={24} />,
  },
  [Item.Architecture]: {
    title: 'Architecture',
    url: Route.DOCUMENTATION_ARCHITECTURE,
    icon: <IconMd.MdAccountTree className="inline mr-2" size={24} />,
  },
  [Item.DeferredData]: {
    title: 'Deferred Data',
    url: Route.DOCUMENTATION_CANISTERS_DATA,
    icon: <FaIcon.FaInfinity className="inline mr-2" size={24} />,
  },
  [Item.DeferredMinter]: {
    title: 'Deferred Minter',
    url: Route.DOCUMENTATION_CANISTERS_MINTER,
    icon: <FaIcon.FaInfinity className="inline mr-2" size={24} />,
  },
  [Item.DeferredContracts]: {
    title: 'Deferred Contracts',
    url: Route.DOCUMENTATION_CONTRACTS_DEFERRED,
    icon: <FaIcon.FaEthereum className="inline mr-2" size={24} />,
  },
  [Item.EkokeContracts]: {
    title: 'Ekoke Contracts',
    url: Route.DOCUMENTATION_CONTRACTS_EKOKE,
    icon: <FaIcon.FaEthereum className="inline mr-2" size={24} />,
  },
  [Item.MarketplaceContracts]: {
    title: 'Marketplace Contracts',
    url: Route.DOCUMENTATION_CONTRACTS_MARKETPLACE,
    icon: <FaIcon.FaEthereum className="inline mr-2" size={24} />,
  },
  [Item.RewardPoolContracts]: {
    title: 'Reward Pool Contracts',
    url: Route.DOCUMENTATION_CONTRACTS_REWARD_POOL,
    icon: <FaIcon.FaEthereum className="inline mr-2" size={24} />,
  },
};

const routeToItems = {
  [Route.url(Route.DOCUMENTATION_FAQ)]: Item.Faq,
  [Route.url(Route.DOCUMENTATION_ARCHITECTURE)]: Item.Architecture,
  [Route.url(Route.DOCUMENTATION_CANISTERS_DATA)]: Item.DeferredData,
  [Route.url(Route.DOCUMENTATION_CANISTERS_MINTER)]: Item.DeferredMinter,
  [Route.url(Route.DOCUMENTATION_CONTRACTS_DEFERRED)]: Item.DeferredContracts,
  [Route.url(Route.DOCUMENTATION_CONTRACTS_EKOKE)]: Item.EkokeContracts,
  [Route.url(Route.DOCUMENTATION_CONTRACTS_MARKETPLACE)]:
    Item.MarketplaceContracts,
  [Route.url(Route.DOCUMENTATION_CONTRACTS_REWARD_POOL)]:
    Item.RewardPoolContracts,
  [Route.url(Route.DOCUMENTATION_WHITEPAPER)]: Item.Whitepaper,
  [Route.url(Route.DOCUMENTATION_REWARD)]: Item.Reward,
};

interface Props {
  children?: React.ReactNode | React.ReactNode[] | string;
}

const Wrapper = ({ children }: Props) => (
  <Container.FlexRow className="w-full">
    <Menu />
    <Container.Container className="w-8/12 xl:w-10/12 sm:w-full bg-white p-4">
      <Container.Container className="m-4">{children}</Container.Container>
    </Container.Container>
  </Container.FlexRow>
);

const Menu = () => (
  <>
    <Container.Container className="hidden sm:block">
      <MenuMobile />
    </Container.Container>
    <Container.Container className="block sm:hidden w-4/12 xl:w-2/12">
      <MenuDesktop />
    </Container.Container>
  </>
);

const MenuDesktop = () => <MenuInner />;

const MenuMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!isOpen) {
    return (
      <Container.Container className="fixed bottom-[16px] right-[16px]">
        <Button.Alternative
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <IconMd.MdMenu className="inline" size={24} />
        </Button.Alternative>
      </Container.Container>
    );
  }

  // is open
  return (
    <Container.Container className="absolute bg-page z-50 top-0 left-0 w-screen">
      <Container.FlexRow className="p-4 items-end justify-end">
        <IconMd.MdClose
          onClick={() => {
            setIsOpen(false);
          }}
          size={32}
        />
      </Container.FlexRow>
      <MenuInner />
    </Container.Container>
  );
};

const MenuInner = () => {
  const { pathname } = useLocation();
  const current: Item = routeToItems[pathname];

  return (
    <Container.Container className="min-h-screen h-full relative overflow-visible">
      <Container.FlexCols className="sticky top-[96px] bottom-0 gap-2 border-r-2">
        {Object.entries(menu).map(([key, value]) => (
          <Container.Container key={key}>
            <Link.Default
              className={`${(key as unknown as Item) === current ? 'block border-b-4 border-brandRed text-brand bg-gray-200 hover:bg-gray-300' : 'text-text border-b-2 border-transparent'}
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
    </Container.Container>
  );
};

export default Wrapper;
