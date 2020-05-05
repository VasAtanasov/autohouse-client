import React, { Fragment } from 'react';
import OfferCardComponent from './offer-card.component';
import { ShowCase, TopOffer } from './offer-carousel.styles';
import PropTypes from 'prop-types';

const CarouselComponent = ({ offers, startIndex, endIndex }) => (
  <Fragment>
    <TopOffer>
      {offers.slice(startIndex, startIndex + 1).map((offer) => (
        <OfferCardComponent key={offer.id} {...offer} isTop={true} />
      ))}
    </TopOffer>
    <ShowCase>
      {offers.slice(startIndex + 1, endIndex + 1).map((offer) => (
        <OfferCardComponent key={offer.id} {...offer} />
      ))}
    </ShowCase>
  </Fragment>
);

CarouselComponent.propTypes = {
  offers: PropTypes.array.isRequired,
  startIndex: PropTypes.number.isRequired,
  endIndex: PropTypes.number.isRequired,
};

export default CarouselComponent;
