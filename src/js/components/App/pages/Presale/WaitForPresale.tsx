import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../reusable/Container';
import Paragraph from '../../../reusable/Paragraph';
import Link from '../../../reusable/Link';
import { PRESALE_START_DATE } from '../Presale';

const WaitForPresale = () => (
  <Container.FlexCols className="items-center justify-center gap-4">
    <Paragraph.Default className="text-lg !text-center">
      The presale starts on{' '}
      <strong>
        {PRESALE_START_DATE.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short',
        })}
      </strong>
      .<br /> Please, come back later.
    </Paragraph.Default>
    <Link.Button
      className="w-fit"
      target="_blank"
      href={`https://www.google.com/calendar/render?action=TEMPLATE&text=EKOKE+Presale+starts&dates=20250115T120000Z/20250115T120000Z&details=Visit+https%3A%2F%2Fekokedao.com%2Fpresale+to+buy+EKOKE+tokens&sf=true&output=xml`}
    >
      <Icon.FiBell className="mr-2 inline" />
      Set a reminder on Google Calendar
    </Link.Button>
  </Container.FlexCols>
);

export default WaitForPresale;
