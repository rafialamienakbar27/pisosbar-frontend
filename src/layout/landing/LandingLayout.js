import React from 'react';
import { Footer, Navbar } from './index';

const LandingLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default LandingLayout;
