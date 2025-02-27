import { RealEstate } from '../../../../../../data/real_estate';
import Container from '../../../../../reusable/Container';
import { SeeOnMap } from '../../../../../reusable/Map';

interface Props {
  property: RealEstate;
}

const Sidebar = ({ property }: Props) => (
  <Container.FlexCols className="gap-4">
    {property.latitude && property.longitude && (
      <SeeOnMap
        center={{
          lat: property.latitude,
          lng: property.longitude,
        }}
        markers={[
          {
            position: {
              lat: property.latitude,
              lng: property.longitude,
            },
          },
        ]}
      />
    )}
  </Container.FlexCols>
);

export default Sidebar;
