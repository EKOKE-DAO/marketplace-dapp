import * as React from 'react';
import Skeleton from 'react-loading-skeleton';

import { useAppContext } from '../../../AppContext';
import Container from '../../../../reusable/Container';
import { Route } from '../../../../../utils/routes';
import Item from './Item';
import { RealEstate } from '../../../../../data/real_estate';
import getRealEstate from '../../../../../api/getRealEstate';

const PropertyLoader = ({ id }: { id: bigint }) => {
  const { setAppError } = useAppContext();
  const [realEstate, setRealEstate] = React.useState<RealEstate>();

  React.useEffect(() => {
    getRealEstate(id)
      .then((re) => {
        setRealEstate(re);
      })
      .catch((error) => {
        setAppError('Failed to load contract');
        console.error(error);
      });
  }, [id]);

  return (
    <a className="block" href={Route.realEstateUrl(id)}>
      <Container.Card hoverScale className="bg-white !p-0 rounded-lg h-full">
        {realEstate ? <Item realEstate={realEstate} /> : <SkeletonProperty />}
      </Container.Card>
    </a>
  );
};

const SkeletonProperty = () => (
  <Container.Container>
    <Skeleton width={300} height={200} />
    <Skeleton count={5} width={300} />
  </Container.Container>
);

export default PropertyLoader;
