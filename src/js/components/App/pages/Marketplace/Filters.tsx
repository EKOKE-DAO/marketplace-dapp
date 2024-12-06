import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../reusable/Container';
import { Map, MapLink } from './Filters/Map';
import FiltersTab from './Filters/FiltersTab';
import Button from '../../../reusable/Button';
import Link from '../../../reusable/Link';

const Filters = () => (
  <>
    <Container.Container className="block sm:hidden w-2/6 xl:w-3/12">
      <PostsSidebarDesktop />
    </Container.Container>
    <Container.Container className="w-full hidden sm:block">
      <PostsSidebarMobile />
    </Container.Container>
  </>
);

const PostsSidebarDesktop = () => (
  <Container.FlexCols className="w-full">
    <Map />
    <Container.Card className="bg-white w-full block">
      <FiltersTab />
    </Container.Card>
  </Container.FlexCols>
);

const PostsSidebarMobile = () => (
  <Container.FlexRow className="justify-around py-2">
    <MapLink />
    <FiltersOnMobile filters={<FiltersTab />} />
  </Container.FlexRow>
);

const FiltersOnMobile = ({ filters }: { filters: React.ReactNode }) => {
  const [showFilters, setShowFilters] = React.useState<boolean>(false);

  const onOpenFilters = () => {
    setShowFilters(true);
  };

  return (
    <>
      {showFilters && (
        <Container.Container className="bg-white fixed z-50 top-[120px] left-0 w-screen min-h-screen overflow-y-scroll">
          <Container.FlexCols className="shadow-md p-1">
            <Icon.FiX
              className="text-brandAlt hover:cursor-pointer"
              size={24}
              onClick={() => setShowFilters(false)}
            />
          </Container.FlexCols>
          <Container.Container className="p-4">{filters}</Container.Container>
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
