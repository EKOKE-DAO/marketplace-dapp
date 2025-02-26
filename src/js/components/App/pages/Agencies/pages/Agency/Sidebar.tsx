import { Agency } from '../../../../../../data/contract';
import Container from '../../../../../reusable/Container';
import { SeeOnMap } from '../../../../../reusable/Map';

interface Props {
  agency: Agency;
}

const Sidebar = ({ agency }: Props) => (
  <Container.FlexCols className="gap-4">
    {agency.lat && agency.lng && (
      <SeeOnMap
        center={{
          lat: Number(agency.lat),
          lng: Number(agency.lng),
        }}
        markers={[
          {
            position: {
              lat: Number(agency.lat),
              lng: Number(agency.lng),
            },
          },
        ]}
      />
    )}
  </Container.FlexCols>
);

export default Sidebar;
