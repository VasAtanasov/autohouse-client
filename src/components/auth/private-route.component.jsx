import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import userRoutes from '../../routes/user';

const PrivateRoute = ({ user, role, component, ...rest }) =>
  user.isAuthenticated ? (
    role ? (
      user.details.role === role ? (
        <Route {...rest} component={component} />
      ) : (
        <Redirect to={userRoutes.loginRegister.path} />
      )
    ) : (
      <Route {...rest} component={component} />
    )
  ) : (
    <Redirect to={userRoutes.loginRegister.path} />
  );

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

const routePrivateState = (state) => ({
  user: state.user,
});

export default connect(routePrivateState, {})(PrivateRoute);
