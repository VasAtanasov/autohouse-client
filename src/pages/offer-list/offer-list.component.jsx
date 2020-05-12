import React from 'react';
import { connect } from 'react-redux';
import { searchOffers } from '../../services/offer/offer.actions';

const OfferList = ({ filter, searchOffers }) => {
  searchOffers(filter);
  return <div>Offer List</div>;
};

const mapStateToProps = ({ filter }) => ({
  filter,
});

export default connect(mapStateToProps, { searchOffers })(OfferList);
