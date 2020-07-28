import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import home from '../../routes/home';

const AuthAdminCheck = (props) =>
  props.user.isAuthenticated && props.user.details.roles.includes('ADMIN') ? (
    ''
  ) : (
    <Redirect to={home.home.path} />
  );

AuthAdminCheck.propTypes = {
  user: PropTypes.object.isRequired,
};

const authAdminCheckState = (state) => ({
  user: state.user,
});

export default connect(authAdminCheckState, {})(AuthAdminCheck);
