import * as React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Contract } from '../../../../../data/contract';
import { useAppContext } from '../../../AppContext';
import getContractById from '../../../../../api/getContractById';
import Container from '../../../../reusable/Container';
import { Route } from '../../../../../utils/routes';
import Item from './Item';

const ContractLoader = ({ id }: { id: bigint }) => {
  const { setAppError } = useAppContext();
  const [contract, setContract] = React.useState<Contract>();

  React.useEffect(() => {
    getContractById(id)
      .then((contract) => {
        setContract(contract);
      })
      .catch((error) => {
        setAppError('Failed to load contract');
        console.error(error);
      });
  }, [id]);

  return (
    <a className="block" href={Route.marketplaceRealEstateUrl(id)}>
      <Container.Card className="bg-white !p-0 transition-transform transform scale-100 hover:scale-105 rounded-lg h-full">
        {contract ? <Item contract={contract} /> : <SkeletonContract />}
      </Container.Card>
    </a>
  );
};

const SkeletonContract = () => (
  <Container.Container>
    <Skeleton width={300} height={200} />
    <Skeleton count={5} width={300} />
  </Container.Container>
);

export default ContractLoader;
