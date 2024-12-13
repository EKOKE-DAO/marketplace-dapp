import * as React from 'react';

import Container from '../../reusable/Container';
import Heading from '../../reusable/Heading';
import Paragraph from '../../reusable/Paragraph';
import Link from '../../reusable/Link';

const Cookies = () => (
  <Container.Container>
    <Heading.H1>Coookie Policy</Heading.H1>
    <Paragraph.Leading>
      On <strong>ekokedao.com</strong>, we do not use any cookies to track user
      behavior
    </Paragraph.Leading>
    <Heading.H2>What are cookies?</Heading.H2>
    <Paragraph.Default>
      Cookies are small text files that are placed on your computer by websites
      that you visit. They are widely used in order to make websites work, or
      work more efficiently, as well as to provide information to the owners of
      the site.
    </Paragraph.Default>
    <Heading.H2>How can I control cookies?</Heading.H2>
    <Paragraph.Default>
      You have the right to decide whether to accept or reject cookies. You can
      exercise your cookie preferences by clicking on the appropriate opt-out
      links provided in the cookie table above.
    </Paragraph.Default>
    <Heading.H2>How can I opt out of Cookies?</Heading.H2>
    <Paragraph.Default>
      If you do not wish to have cookies placed on your device, we suggest
      setting your cookie preferences in your browser. If you want to remove
      previously stored cookies, you can manually delete them at any time.
      However, this will not prevent additional cookies from being stored on
      your device in the future when you visit this website.
    </Paragraph.Default>
    <Paragraph.Default>
      For more information on how to manage cookies, please visit{' '}
      <Link.Paragraph href="https://www.allaboutcookies.org/manage-cookies/">
        www.allaboutcookies.org/manage-cookies/
      </Link.Paragraph>
    </Paragraph.Default>
    <span className="text-text">Last updated: 2025-12-13</span>
  </Container.Container>
);

export default Cookies;
