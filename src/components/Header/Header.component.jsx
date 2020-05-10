import React from 'react';
import { HeaderContainer, HeaderWrapper, Brand } from './header.styles';
import Navigation from '../navigation/navigation.component';

const Header = () => (
  <HeaderContainer>
    <HeaderWrapper>
      <div className="left">
        <Brand>
          Auto<span>house</span>
        </Brand>
      </div>
      <div className="right">
        <Navigation />
      </div>
    </HeaderWrapper>
  </HeaderContainer>
);

export default Header;
