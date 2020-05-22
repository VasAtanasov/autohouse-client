import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import userRoutes from '../../routes/user';

const PrivateRoute = (props) =>
  props.user.isAuthenticated ? (
    props.role ? (
      props.user.details.role === props.role ? (
        <Route {...props} component={props.component} />
      ) : (
        <Redirect to={userRoutes.loginRegister.path} />
      )
    ) : (
      <Route {...props} component={props.component} />
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
