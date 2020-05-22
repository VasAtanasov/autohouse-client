import React from 'react';
import NavbarDrawer from './drawer/drawer.component';
import NavbarBar from './bar/bar.component';
import { AuthenticatedLinks, PublicLinks } from './links';
import { IconButton, UserDropDownMenu } from './navigation.styles';
import Dropdown from 'react-bootstrap/Dropdown';
import UserIcon from './icon/user-icon.component';

const Navigation = (props) => {
  const { isAuthenticated } = props;
  const links = isAuthenticated ? <AuthenticatedLinks /> : <PublicLinks />;
  return (
    <React.Fragment>
      <NavbarDrawer links={links} />
      <NavbarBar links={links} />
      <UserDropDownMenu>
        <IconButton id="dropdown-basic">
          <UserIcon />
        </IconButton>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </UserDropDownMenu>
    </React.Fragment>
  );
};

export default Navigation;
