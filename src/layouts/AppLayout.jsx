import React from 'react';
import { Footer, Header, Nav } from '../components/Layout';
import { SiteMeta } from './SiteMeta';

const AppLayout = ({ children, meta }) => {
  return (
    <>
      <Header />
      <Nav />

      <SiteMeta meta={meta} />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default AppLayout;
