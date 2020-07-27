// Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const AccountCheck = ({ user, pathToRedirect }) =>
  user.hasAccount ? null : (
    <React.Fragment>
      {toast.info('Create account to add, edit, delete and view own offers.')}
      <Redirect to={pathToRedirect} />
    </React.Fragment>
  );

AccountCheck.propTypes = {
  user: PropTypes.object.isRequired,
  pathToRedirect: PropTypes.string.isRequired,
};

const accountCheckState = (state) => ({
  user: state?.user?.details,
});

export default connect(accountCheckState, {})(AccountCheck);
