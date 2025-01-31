import * as React from 'react';

import { hasCookiePreferences, acceptAllCookies } from '../utils/cookies';
import { Route } from '../utils/routes';
import Container from './reusable/Container';
import Heading from './reusable/Heading';
import Paragraph from './reusable/Paragraph';
import Link from './reusable/Link';
import Button from './reusable/Button';
import { acceptGa4, initGa4 } from '../utils/analytics';

const CookieBar = () => {
  const [hasCookieBar, setHasCookieBar] = React.useState(false);

  const onAcceptAll = () => {
    acceptAllCookies();
    onCookieBarClose();
    acceptGa4();
  };

  const onCookieBarClose = () => {
    setHasCookieBar(false);
  };

  const onGoToPolicy = () => {
    window.location.pathname = Route.url(Route.COOKIES);
  };

  // init GA consent
  React.useEffect(() => {
    initGa4();
    setTimeout(() => {
      setHasCookieBar(!hasCookiePreferences());
    }, 1000);
  }, []);

  return (
    <Container.Container
      className={`${
        hasCookieBar ? 'animate__animated animate__slideInUp' : 'hidden'
      } fixed z-50 right-0 left-0 w-full bottom-4 max-w-[640px] sm:max-w-[768px]`}
    >
      <Container.Container className="bg-white shadow-2xl rounded border m-8 p-10 sm:h-2/6 sm:mx-8 sm:m-2 sm:p-4">
        <Container.FlexCols className="justify-between sm:h-full">
          <Container.Container className="sm:w-full sm:overflow-y-auto">
            <Heading.H2 className="sm:py-0">Cookie Policy</Heading.H2>
            <Paragraph.Default className="sm:text-sm">
              This site uses cookies to enhance users' browsing experience and
              to collect information about the site's usage. We use both
              technical cookies and third-party cookies to analyze user behavior
              for analytics. You can find more details by consulting our{' '}
              <Link.Paragraph href={Route.COOKIES}>
                Cookie Policy.
              </Link.Paragraph>
            </Paragraph.Default>
          </Container.Container>
          <Container.FlexRow className="justify-start gap-4 sm:my-2">
            <Button.Primary
              onClick={onAcceptAll}
              className="sm:text-sm sm:px-4 sm:py-2"
            >
              Accept All
            </Button.Primary>
            <Button.Alternative
              onClick={onGoToPolicy}
              className="sm:text-sm sm:px-4 sm:py-2"
            >
              Customize
            </Button.Alternative>
          </Container.FlexRow>
        </Container.FlexCols>
      </Container.Container>
    </Container.Container>
  );
};

export default CookieBar;
