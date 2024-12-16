import * as React from 'react';
import Container from '../../reusable/Container';
import Heading from '../../reusable/Heading';
import Paragraph from '../../reusable/Paragraph';
import Link from '../../reusable/Link';
import { Route } from '../../../utils/routes';

const TermsAndConditions = () => (
  <Container.Container>
    <Heading.H1>Terms and Conditions</Heading.H1>
    <Paragraph.Leading>
      You should read these Terms because they contain our legal commitments to
      you and a number of DOs and DON'Ts which you need to be aware of when you
      use our Services. Please read these Terms carefully to make sure you
      understand them. By using our Services, you are automatically deemed to
      agree to accept and be legally bound by these Terms. For the avoidance of
      doubt if you do not agree with the Terms, you should not proceed to access
      or use our Services. You should also read our{' '}
      <Link.Paragraph href={Route.PRIVACY}>Privacy Policy</Link.Paragraph>. The
      Privacy Policy explains how we use your personal data. If you think that
      there is a mistake in these terms or have any queries, please contact us
      to discuss. If we have to contact you, we will do so by writing to you at
      the email address you have provided to us. It is therefore very important
      that you confirm you have provided a legitimate email address that is used
      by you personally and by proceeding with use of our Services you warrant
      that you have done so. We will only contact you if you have given explicit
      consent for us to do so. The only other time you will receive emails is
      where you have registered to receive our newsletter and updates. When we
      use the words "writing" or "written" in these terms, this includes emails.
    </Paragraph.Leading>
    <Heading.H2>Changes to Terms</Heading.H2>
    <Paragraph.Default>
      We may revise these Terms at any time by amending this page. Please check
      this page from time to time to take notice of any changes we made, as they
      are binding on you. We may also update and change our Services from time
      to time to reflect changes to our products, our users' needs, and our
      business priorities. We will try to give you reasonable notice of any
      major changes.
    </Paragraph.Default>
    <Heading.H2>Using Our Service</Heading.H2>
    <Paragraph.Default>
      To use our service, you will need to have a virtual Ethereum wallet. We
      draw your attention that wallets are third-party services, and we advise
      you to read their terms of use.
    </Paragraph.Default>
    <Heading.H2>Security</Heading.H2>
    <Paragraph.Default>
      Security is important to EKOKE DAO, and you therefore agree not to share
      your wallet access with any other user or third party, or knowingly carry
      out any activity which enables a third party to access or use your
      account. If we believe, acting in our discretion, that your account is
      used inappropriately, we reserve the right to suspend or terminate or
      cease to support your account without liability. We cannot check the
      identities of people using our Services and will not be liable if your
      wallet connection or account is used by someone else. If you become aware
      of any unauthorised use of your login, you should notify us immediately by
      contacting us at{' '}
      <Link.Paragraph href="mailto:ekokefly@gmail.com">
        ekokefly@gmail.com
      </Link.Paragraph>
      , using 'Security Breach' as the subject line. Please note that we may
      need to verify your identity and validate ownership of the account. Be
      alert for other websites and services which may pretend to be us or to be
      associated with us.
    </Paragraph.Default>
    <Heading.H2>Rules of Use</Heading.H2>
    <Paragraph.Default>
      <ul>
        <li>Do not engage in personal attacks on other individuals.</li>
        <li>
          Do not use the Services to promote or engage in any illegal activity.
        </li>
        <li>
          Do not use the Services to promote or engage in any activity that is
          harmful to others.
        </li>
        <li>
          Do not use the Services to promote or engage in any activity that is
          harmful to us.
        </li>
        <li>
          Do not violate the intellectual property or privacy rights of any
          third party.
        </li>
        <li>Do not impersonate others or misrepresent your identity.</li>
        <li>
          Do not engage in spamming, trolling, or other antisocial behavior.
        </li>
        <li>
          Do not promote or generate money for yourself or a third party without
          permission.
        </li>
      </ul>
    </Paragraph.Default>
    <Heading.H2>Service Interruption</Heading.H2>
    <Paragraph.Default>
      We will do our best to provide continuous, uninterrupted access to our
      Services. However, we cannot guarantee this. We accept no responsibility
      or liability for any interruption or delay. We may also change, suspend,
      or discontinue certain Services without giving you prior notice.
    </Paragraph.Default>
    <Heading.H2>Prohibited Person</Heading.H2>
    <Paragraph.Default>
      You must not use our Services if you are a Prohibited Person. A Prohibited
      Person is any person who is:
    </Paragraph.Default>
    <ul>
      <li>
        Located, incorporated, or otherwise established in, or a citizen or
        resident of any jurisdiction in which the provision of our Services is
        prohibited by law.
      </li>
      <li>
        Identified on any relevant sanctions list, including but not limited to
        the U.S. Treasury Department’s list of Specially Designated Nationals or
        the U.S. Department of Commerce Denied Person’s List.
      </li>
      <li>
        Engaged in any activity that is prohibited by law, regulation, or
        sanctions.
      </li>
    </ul>
    <Heading.H2>Agreeing to Terms</Heading.H2>
    <Paragraph.Default>
      By using our Services, you agree to these Terms. If you do not agree to
      these Terms, you must not use our Services. We recommend that you print a
      copy of these Terms for future reference.
    </Paragraph.Default>
    <Heading.H2>Children</Heading.H2>
    <Paragraph.Default>
      Our services are not available for use by children under the age of 18
      years old or 21 years old in some jurisdictions. Please refer to your
      country's laws for age-related guidance.
    </Paragraph.Default>
  </Container.Container>
);

export default TermsAndConditions;
