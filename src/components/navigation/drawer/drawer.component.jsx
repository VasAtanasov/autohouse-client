import React from 'react';
import { DrawerContainer, Drawer, Overlay } from './drawer.styles';
import { Menu } from '../navigation.styles';

const inputId = 'ah-toggle-menu';

const Button = ({ isClose }) => (
  <label htmlFor={inputId} className={`button` + (isClose ? ' close' : '')}>
    <span></span>
    <span></span>
    <span></span>
  </label>
);

const NavbarDrawer = ({ links }) => {
  return (
    <DrawerContainer>
      <input type="checkbox" id={inputId} />
      <Button />
      <Overlay />
      <Drawer>
        <div className="close-container">
          <Button isClose={true} />
        </div>
        <Menu>{links}</Menu>
      </Drawer>
    </DrawerContainer>
  );
};

export default NavbarDrawer;
