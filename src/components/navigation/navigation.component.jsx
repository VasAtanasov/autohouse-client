import React from 'react';
import NavbarDrawer from './drawer/drawer.component';
import NavbarBar from './bar/bar.component';

const Navigation = (props) => {
  const { isAuthenticated } = props;

  return (
    <React.Fragment>
      <NavbarDrawer />
      <NavbarBar />
    </React.Fragment>
  );
};

export default Navigation;
