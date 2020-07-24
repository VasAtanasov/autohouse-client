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
      <Dropdown.Item as={MenuLink} to={userRoutes.savedSearches.path}>
        Saved Searches
      </Dropdown.Item>
      <Dropdown.Item as={MenuLink} to={userRoutes.savedInventory.path}>
        Favorites
      </Dropdown.Item>
      <Dropdown.Item as={MenuLink} to={userRoutes.myInventory.path}>
        My Inventory
      </Dropdown.Item>
      <Dropdown.Item as={MenuLink} to={userRoutes.account.path}>
        Account
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={handleLogout}>
        Logout
      </Dropdown.Item>
    </React.Fragment>
  );
};

export default connect(null, { logout })(DropdownAuthenticatedLinks);
