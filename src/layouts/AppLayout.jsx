import React from 'react';
import { Footer, Header, Nav } from '../components/Layout';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default AppLayout;
