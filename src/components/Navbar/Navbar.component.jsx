import React from 'react';
import { NavbarWrapper, NavBar, Brand, Hamburger } from './navbar.styles';

const NavbarComponent = () => {
    return (
        <NavbarWrapper>
            <div className="left">
                <Brand>
                    Auto<span>house</span>
                </Brand>
            </div>
            <div className="right">
                <NavBar>
                    <Hamburger>
                        <div className="bar" />
                        <div className="bar" />
                        <div className="bar" />
                    </Hamburger>
                </NavBar>
            </div>
        </NavbarWrapper>
    );
};

export default NavbarComponent;
