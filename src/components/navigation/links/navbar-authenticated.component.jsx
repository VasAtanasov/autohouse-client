import React from 'react';
import { MenuLink } from '../navigation.styles';
import userRoutes from '../../../routes/user';

const NavbarAuthenticatedLinks = () => (
  <React.Fragment>
    <MenuLink to="/home">Home</MenuLink>
    <MenuLink to={userRoutes.savedSearches.path}>Saved Searches</MenuLink>
    <MenuLink to={userRoutes.savedInventory.path}>Favorites</MenuLink>
  </React.Fragment>
);

export default NavbarAuthenticatedLinks;
