import React from 'react';
import { MenuLink } from '../navigation.styles';
import Dropdown from 'react-bootstrap/Dropdown';

import userRoutes from '../../../routes/user';

const DropdownPublicLinks = () => (
  <React.Fragment>
    <Dropdown.Item as={MenuLink} to={userRoutes.loginRegister.path}>
      Sign in
    </Dropdown.Item>
  </React.Fragment>
);

export default DropdownPublicLinks;
