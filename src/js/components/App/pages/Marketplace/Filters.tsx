import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../reusable/Container';
import { Map, MapLink } from './Filters/Map';
import FiltersTab from './Filters/FiltersTab';
import Button from '../../../reusable/Button';
import Link from '../../../reusable/Link';
import { IFilters } from '../Marketplace';

interface Props {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

const Filters = (props: Props) => (
  <>
    <Container.Container className="block sm:hidden w-2/6 xl:w-3/12">
      <PostsSidebarDesktop {...props} />
    </Container.Container>
    <Container.Container className="w-full hidden sm:block">
      <PostsSidebarMobile {...props} />
    </Container.Container>
  </>
);

const PostsSidebarDesktop = (props: Props) => (
  <Container.FlexCols className="w-full">
    <Map />
    <Container.Card className="bg-white w-full block">
      <FiltersTab {...props} />
    </Container.Card>
  </Container.FlexCols>
);

const PostsSidebarMobile = (props: Props) => (
  <Container.FlexRow className="justify-around py-2">
    <MapLink />
    <FiltersOnMobile tab={<FiltersTab {...props} />} />
  </Container.FlexRow>
);

const FiltersOnMobile = ({ tab }: { tab: React.ReactNode }) => {
  const [showFilters, setShowFilters] = React.useState<boolean>(false);

  const onOpenFilters = () => {
    setShowFilters(true);
  };

  return (
    <>
      {showFilters && (
        <Container.Container className="bg-white fixed z-50 top-0 left-0 w-screen min-h-screen overflow-y-scroll">
          <Container.FlexCols className="shadow-md p-1">
            <Icon.FiX
              className="text-brandAlt hover:cursor-pointer"
              size={24}
              onClick={() => setShowFilters(false)}
            />
          </Container.FlexCols>
          <Container.Container className="p-4">{tab}</Container.Container>
          <Container.Container className="p-4">
            <Button.Primary onClick={() => setShowFilters(false)}>
              Apply filters
            </Button.Primary>
          </Container.Container>
        </Container.Container>
      )}
      <Link.Default className="!text-brand" onClick={onOpenFilters}>
        <Icon.FiFilter className="text-brand inline mr-2" size={24} />
        Filters
      </Link.Default>
    </>
  );
};

export default Filters;
