import React from 'react';
import { HeaderContainer, HeaderWrapper, Brand } from './header.styles';
import NavbarDrawer from '../navbar/drawer/drawer-navbar.component';

const Header = () => (
  <HeaderContainer>
    <HeaderWrapper>
      <div className="left">
        <Brand>
          Auto<span>house</span>
        </Brand>
      </div>
      <div className="right">
        <NavbarDrawer />
      </div>
    </HeaderWrapper>
  </HeaderContainer>
);

export default Header;
