import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { MenuLink } from '../navigation.styles';

import userRoutes from '../../../routes/user';

const DropdownAuthenticatedLinks = () => (
  <React.Fragment>
    <Dropdown.Item as={MenuLink} to={userRoutes.profile.path}>
      Profile
    </Dropdown.Item>
    <Dropdown.Item as={MenuLink} to={userRoutes.settings.path}>
      Settings
    </Dropdown.Item>
  </React.Fragment>
);

export default DropdownAuthenticatedLinks;
