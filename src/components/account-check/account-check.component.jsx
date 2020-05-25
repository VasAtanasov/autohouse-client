// Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AccountCheck = ({ user, pathToRedirect }) =>
  user.hasAccount ? null : <Redirect to={pathToRedirect} />;

AccountCheck.propTypes = {
  user: PropTypes.object.isRequired,
  pathToRedirect: PropTypes.string.isRequired,
};

const accountCheckState = (state) => ({
  user: state?.user?.details,
});

export default connect(accountCheckState, {})(AccountCheck);
