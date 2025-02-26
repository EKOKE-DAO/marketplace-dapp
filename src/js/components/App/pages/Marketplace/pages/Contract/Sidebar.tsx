import { Contract } from '../../../../../../data/contract';
import Container from '../../../../../reusable/Container';
import { SeeOnMap } from '../../../../../reusable/Map';
import BuyTokenForm from './BuyTokenForm';

interface Props {
  contract: Contract;
}

const Sidebar = ({ contract }: Props) => (
  <Container.FlexCols className="gap-4">
    {contract.realEstate.latitude && contract.realEstate.longitude && (
      <SeeOnMap
        center={{
          lat: contract.realEstate.latitude,
          lng: contract.realEstate.longitude,
        }}
        markers={[
          {
            position: {
              lat: contract.realEstate.latitude,
              lng: contract.realEstate.longitude,
            },
          },
        ]}
      />
    )}
    <BuyTokenForm contract={contract} />
  </Container.FlexCols>
);

export default Sidebar;
