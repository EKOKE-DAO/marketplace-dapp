import * as Icon from 'react-icons/fi';
import * as FaIcon from 'react-icons/fa6';

import Container from '../../../reusable/Container';
import Link from '../../../reusable/Link';
import { Route } from '../../../../utils/routes';

const Whitepaper = () => (
  <Container.FlexResponsiveRow className="items-center justify-center gap-4">
    <Container.Container>
      <Link.Cta href={Route.DOCUMENTATION_WHITEPAPER}>
        Read the Whitepaper{' '}
        <Icon.FiExternalLink className="inline text-white" />
      </Link.Cta>
    </Container.Container>
    <Container.Container>
      <Link.Cta href={'https://discord.gg/AuWa2JATYf'}>
        <FaIcon.FaDiscord className="inline mr-2 text-white" />
        Join us on Discord
      </Link.Cta>
    </Container.Container>
    <Container.Container>
      <Link.Cta href={'https://x.com/ekokedao'}>
        <FaIcon.FaXTwitter className="inline mr-2 text-white" />
        Join us on X.com
      </Link.Cta>
    </Container.Container>
  </Container.FlexResponsiveRow>
);

export default Whitepaper;
