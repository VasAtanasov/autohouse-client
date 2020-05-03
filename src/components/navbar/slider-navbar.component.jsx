import React from 'react';
import {
    NavBar,
    Drawer,
    Overlay,
    Menu,
    MenuLinkContainer,
} from './slider-navbar.styles';
import { routes } from '../../global';

const inputId = 'ah-toggle-menu';

const OpenButton = () => (
    <label htmlFor={inputId} className="button">
        <span></span>
        <span></span>
        <span></span>
    </label>
);

const CloseButton = () => (
    <label htmlFor={inputId} className="button close">
        <span></span>
        <span></span>
        <span></span>
    </label>
);

const NavbarDrawer = () => {
    return (
        <NavBar>
            <input type="checkbox" id={inputId} />
            <OpenButton />
            <Overlay />
            <Drawer>
                <div className="close-container">
                    <CloseButton />
                </div>
                <Menu>
                    {routes.map((route, idx) => (
                        <MenuLinkContainer key={`${idx}_${route}`}>
                            <a href="/#">{route}</a>
                        </MenuLinkContainer>
                    ))}
                </Menu>
            </Drawer>
        </NavBar>
    );
};

export default NavbarDrawer;
