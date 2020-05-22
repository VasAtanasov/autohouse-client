import React from 'react';
import { MenuLinkContainer } from '../navigation.styles';

const PublicLinks = () => (
  <li>
    <MenuLinkContainer to="/home">Home</MenuLinkContainer>
    <MenuLinkContainer to="/saved">Saved Searches</MenuLinkContainer>
    <MenuLinkContainer to="/user/login-register-form">
      Sign in
    </MenuLinkContainer>
  </li>
);

export default PublicLinks;
