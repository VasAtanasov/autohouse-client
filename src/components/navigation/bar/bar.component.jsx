import React from 'react';
import { BarContainer } from './bar.styles';
import { Menu } from '../navigation.styles';

const NavbarBar = ({ links }) => {
  return (
    <BarContainer>
      <Menu horizontal={true}>{links}</Menu>
    </BarContainer>
  );
};

export default NavbarBar;
