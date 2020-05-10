import React from 'react';
import { DrawerContainer, Drawer, Overlay } from './drawer.styles';
import { Menu, MenuLinkContainer } from '../navigation.styles';
const inputId = 'ah-toggle-menu';

const Button = ({ isClose }) => (
  <label htmlFor={inputId} className={`button` + (isClose ? ' close' : '')}>
    <span></span>
    <span></span>
    <span></span>
  </label>
);

const NavbarDrawer = () => {
  return (
    <DrawerContainer>
      <input type="checkbox" id={inputId} />
      <Button />
      <Overlay />
      <Drawer>
        <div className="close-container">
          <Button isClose={true} />
        </div>
        <Menu>
          <li>
            <MenuLinkContainer to="/home" activeClassName="active">
              Home
            </MenuLinkContainer>
          </li>
        </Menu>
      </Drawer>
    </DrawerContainer>
  );
};

export default NavbarDrawer;
