import React from 'react';
import { OfferCard } from '../../../components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { WithSpinner } from '../../../hoc';

const List = ({ pageContent }) =>
  pageContent &&
  pageContent.map((offer) => <OfferCard key={offer.id} {...offer} />);

const mapStateToProps = (state) => ({
  isLoading: state.offer.isFetching,
});

export default compose(connect(mapStateToProps), WithSpinner)(List);
