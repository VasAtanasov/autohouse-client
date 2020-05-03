import React from 'react';
import { NavBar, Drawer, Overlay } from './slider-navbar.styles';

const NavbarComponent = () => {
    return (
        <NavBar>
            <input type="checkbox" id="ah-toggle-menu" />
            <label for="ah-toggle-menu" class="button">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <Overlay />
            <Drawer />
        </NavBar>
    );
};

export default NavbarComponent;
