import React from 'react';
import Carousel from '../offers-carousel';
import OfferCardList from '../offer-card-list/offer-card-list.component';
import { WithSpinner } from '../../../../hoc';
import { connect } from 'react-redux';
import { compose } from 'redux';

const OffersShowcaseComponent = () => (
  <React.Fragment>
    <Carousel />
    <OfferCardList />
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  isLoading: state.offer.isFetching,
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(OffersShowcaseComponent);
