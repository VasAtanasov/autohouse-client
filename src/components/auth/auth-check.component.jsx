// Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import homeRoutes from '../../routes/home';
import userRoutes from '../../routes/user';

const AuthCheck = ({ user }) =>
  user.isAuthenticated ? (
    <Redirect to={homeRoutes.home.path} />
  ) : (
    <Redirect to={userRoutes.loginRegister.path} />
  );

AuthCheck.propTypes = {
  user: PropTypes.object.isRequired,
};

const authCheckState = (state) => ({
  user: state.user,
});

export default connect(authCheckState, {})(AuthCheck);
