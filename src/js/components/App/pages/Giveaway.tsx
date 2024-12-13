import * as React from 'react';
import Container from '../../reusable/Container';
import { Helmet } from 'react-helmet';

const Giveaway = () => (
  <>
    <Helmet>
      <meta
        property="og:url"
        content="https://gleam.io/Iu8Ng/ekoke-dao-100-ekoke-giveaway"
      />
      <meta
        property="og:title"
        content="EKOKE DAO 100 $EKOKE Giveaway - 1$EKOKE = 1$"
      />
      <meta property="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Since we're going to launch EKOKE DAO on April 1st 2025 and we'll open the Presale on January 10th 2025, we've decided to start a Giveaway where 10 lucky users will be able to win 100$EKOKE which are worth 100$."
      />
    </Helmet>
    <Container.Container>
      <a
        className="e-widget"
        href="https://gleam.io/Iu8Ng/ekoke-dao-100-ekoke-giveaway"
        rel="nofollow"
      >
        EKOKE DAO 100 $EKOKE Giveaway
      </a>
      <script
        type="text/javascript"
        src="https://widget.gleamjs.io/e.js"
        async
      ></script>
    </Container.Container>
  </>
);

export default Giveaway;
