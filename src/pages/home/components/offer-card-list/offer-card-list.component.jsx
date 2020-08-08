import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTopOffers } from '../../../../services/offer/offer.selectors';
import { OfferList } from './offer-card-list.styles';
import { OfferCard } from '../../../../components';

const OfferCardList = ({ topOffers = [] }) => (
  <OfferList className="offer-list">
    {topOffers.map((offer) => (
      <OfferCard key={offer.id} {...offer} />
    ))}
  </OfferList>
);

const mapStateToProps = createStructuredSelector({
  topOffers: selectTopOffers,
});

export default connect(mapStateToProps)(OfferCardList);
