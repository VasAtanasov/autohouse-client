import React from 'react';
import NavbarDrawer from './drawer/drawer.component';
import NavbarBar from './bar/bar.component';
import {
  NavbarAuthenticatedLinks,
  NavbarPublicLinks,
  DropdownAuthenticatedLinks,
  DropdownPublicLinks,
} from './links';
import {
  IconButton,
  UserDropDownMenu,
  CreateOfferButton,
} from './navigation.styles';
import Dropdown from 'react-bootstrap/Dropdown';
import UserIcon from './icon/user-icon.component';
import CreateOfferIcon from './icon/create-offer-icon';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Navigation = (props) => {
  let history = useHistory();
  const { isAuthenticated } = props.user;
  const navbarLinks = isAuthenticated ? (
    <NavbarAuthenticatedLinks />
  ) : (
    <NavbarPublicLinks />
  );
  const dropdownLinks = isAuthenticated ? (
    <DropdownAuthenticatedLinks />
  ) : (
    <DropdownPublicLinks />
  );
  return (
    <React.Fragment>
      <NavbarDrawer links={navbarLinks} />
      <NavbarBar links={navbarLinks} />
      {isAuthenticated && (
        <CreateOfferButton onClick={() => history.push('/offer/create')}>
          <CreateOfferIcon />
        </CreateOfferButton>
      )}
      <UserDropDownMenu>
        <IconButton id="dropdown-basic">
          <UserIcon />
        </IconButton>
        <Dropdown.Menu>{dropdownLinks}</Dropdown.Menu>
      </UserDropDownMenu>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Navigation);
