import * as React from 'react';

import Container from './reusable/Container';
import Page from './reusable/Page';
import Header from './Header';
import Footer from './Footer';
import Routes from './App/Routes';
import { BrowserRouter } from 'react-router-dom';

const AppLayout = () => (
  <Page.BlankPage>
    <Header />
    <Container.PageContent className="w-page min-h-[80vh] pb-16">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Container.PageContent>
    <Footer />
  </Page.BlankPage>
);

export default AppLayout;
