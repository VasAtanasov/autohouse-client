import React from 'react';
import { HeaderContainer, HeaderWrapper, Brand } from './header.styles';
import Navbar from '../navbar/slider-navbar.component';

const Header = () => (
    <HeaderContainer>
        <HeaderWrapper>
            <div className="left">
                <Brand>
                    Auto<span>house</span>
                </Brand>
            </div>
            <div className="right">
                <Navbar />
            </div>
        </HeaderWrapper>
    </HeaderContainer>
);

export default Header;
