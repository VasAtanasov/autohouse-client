import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { MenuLink } from '../navigation.styles';
import { connect } from 'react-redux';
import { logout } from '../../../services/user/user.actions';
import { toast } from 'react-toastify';
import userRoutes from '../../../routes/user';

const DropdownAuthenticatedLinks = ({ logout }) => {
  const handleLogout = () => {
    logout();
    toast.success('LOGOUT SUCCESSFUL');
  };

  return (
    <React.Fragment>
      <Dropdown.Item as={MenuLink} to={userRoutes.profile.path}>
        Profile
      </Dropdown.Item>
      <Dropdown.Item as={MenuLink} to={userRoutes.settings.path}>
        Settings
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={handleLogout}>
        Logout
      </Dropdown.Item>
    </React.Fragment>
  );
};

export default connect(null, { logout })(DropdownAuthenticatedLinks);
