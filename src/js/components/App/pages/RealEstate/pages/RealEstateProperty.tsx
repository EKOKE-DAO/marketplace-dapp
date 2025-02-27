import * as React from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../../../reusable/Container';
import RealEstateCard from './RealEstateProperty/RealEstateCard';
import { useAppContext } from '../../../AppContext';
import Sidebar from './RealEstateProperty/Sidebar';
import { Helmet } from '../../../../SeoEngine';
import { RealEstate } from '../../../../../data/real_estate';
import getRealEstate from '../../../../../api/getRealEstate';

const RealEstateProperty = () => {
  const { setAppError } = useAppContext();
  const { id } = useParams<{ id: string }>();
  const [realEstate, setRealEstate] = React.useState<RealEstate>();

  React.useEffect(() => {
    const idNum = Number(id);
    getRealEstate(BigInt(idNum))
      .then((assoc) => {
        setRealEstate(assoc);
      })
      .catch((error) => {
        setAppError('Failed to fetch contract');
        console.error(error);
      });
  }, [id]);

  if (!realEstate) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{realEstate.name}</title>
        <meta name="description" content={realEstate.description} />
        <meta property="og:title" content={realEstate.name} />
        <meta property="og:description" content={realEstate.description} />
      </Helmet>
      <Container.Container>
        <Container.FlexResponsiveRow className="gap-4 w-full sm:flex-col-reverse">
          <Container.Container className="w-3/12 sm:w-full">
            <Sidebar property={realEstate} />
          </Container.Container>
          <Container.Container className="flex-1">
            <RealEstateCard property={realEstate} />
          </Container.Container>
        </Container.FlexResponsiveRow>
      </Container.Container>
    </>
  );
};

export default RealEstateProperty;
