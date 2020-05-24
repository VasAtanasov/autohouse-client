import React from 'react';
import { MenuLink } from '../navigation.styles';

const NavbarAuthenticatedLinks = () => (
  <React.Fragment>
    <MenuLink to="/home">Home</MenuLink>
    {/* <MenuLink to="/user/saved-searches">Saved Searches</MenuLink> */}
  </React.Fragment>
);

export default NavbarAuthenticatedLinks;
