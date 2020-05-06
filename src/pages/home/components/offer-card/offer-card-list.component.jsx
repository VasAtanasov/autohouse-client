import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTopOffers } from '../../../../services/offer/offer.selectors';
import {
  OfferList,
  OfferContainer,
  OfferCardHeadline,
  OfferImageContainer,
  OfferCardImage,
} from './offer-cart.styles';

const OfferCardList = ({ topOffers }) => (
  <OfferList className="offer-list">
    {topOffers.map((offer, idx) => {
      const {
        id,
        vehicleMakerName,
        vehicleModelName,
        primaryPhotoKey,
        price,
        vehicleMileage,
        vehicleYear,
        vehicleTrim,
      } = offer;
      return (
        <div className="list-element-gap" key={offer.id}>
          <OfferContainer className="offer-summary-full-main-container">
            <OfferCardHeadline>
              <div className="offer-summary-titles">
                <a href="/#">
                  <div className="offer-summary-title">
                    <div className="offer-summary-makemodel">
                      {vehicleYear} {vehicleMakerName} {vehicleModelName}
                    </div>
                    <div className="offer-summary-version">{vehicleTrim}</div>
                  </div>
                </a>
              </div>
              <div className="offer-summary-action-buttons">
                <div></div>
                <div></div>
              </div>
            </OfferCardHeadline>
            <OfferImageContainer>
              <OfferCardImage>
                <picture>
                  <img
                    src={`http://localhost:8007/api/images/${primaryPhotoKey}`}
                    alt={'Main'}
                  />
                </picture>
              </OfferCardImage>
            </OfferImageContainer>
          </OfferContainer>
        </div>
      );
    })}
  </OfferList>
);

const mapStateToProps = createStructuredSelector({
  topOffers: selectTopOffers,
});

export default connect(mapStateToProps)(OfferCardList);
