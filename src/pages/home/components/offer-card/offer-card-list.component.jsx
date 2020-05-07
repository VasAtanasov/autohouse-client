import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTopOffers } from '../../../../services/offer/offer.selectors';
import { OfferList } from './offer-card.styles';
import OfferCard from './offer-card.component';

const OfferCardList = ({ topOffers }) => (
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
