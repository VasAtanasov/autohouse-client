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
  const inputRef = React.useRef(null);
  const drawerRef = React.useRef(null);

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      inputRef.current.checked = false;
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <DrawerContainer>
      <input ref={inputRef} type="checkbox" id={inputId} />
      <Button />
      <Overlay />
      <Drawer ref={drawerRef}>
        <div className="close-container">
          <Button isClose={true} />
        </div>
        <Menu onClick={() => (inputRef.current.checked = false)}>{links}</Menu>
      </Drawer>
    </DrawerContainer>
  );
};

export default NavbarDrawer;
