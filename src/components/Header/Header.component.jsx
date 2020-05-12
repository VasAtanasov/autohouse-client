import React from 'react';
import { HeaderContainer, HeaderWrapper, Brand } from './header.styles';
import Navigation from '../navigation/navigation.component';
import { Link } from 'react-router-dom';

const Header = () => (
  <HeaderContainer>
    <HeaderWrapper>
      <div className="left">
        <Brand>
          <Link to="/home">
            Auto<span>house</span>
          </Link>
        </Brand>
      </div>
      <div className="right">
        <Navigation />
      </div>
    </HeaderWrapper>
  </HeaderContainer>
);

export default Header;
