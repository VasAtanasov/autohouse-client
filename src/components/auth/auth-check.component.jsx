// Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import homeRoutes from '../../routes/home';
import userRoutes from '../../routes/user';

// App Imports
// import crate from '../../setup/routes/crate';
// import admin from '../../setup/routes/admin';
// const AuthCheck = ({ user }) =>
//   user.isAuthenticated ? (
//     user.details.role === 'ADMIN' ? (
//       <Redirect to={admin.dashboard.path} />
//     ) : (
//       <Redirect to={crate.list.path} />
//     )
//   ) : (
//     ''
//   );

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
