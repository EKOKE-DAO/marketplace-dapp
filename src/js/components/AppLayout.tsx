import * as React from 'react';

import Container from './reusable/Container';
import Page from './reusable/Page';
import Header from './Header';
import Footer from './Footer';

const AppLayout = () => (
  <Page.BlankPage>
    <Header />
    <Container.PageContent className="py-8 mt-[80px] min-h-[80vh]"></Container.PageContent>
    <Footer />
  </Page.BlankPage>
);

export default AppLayout;
