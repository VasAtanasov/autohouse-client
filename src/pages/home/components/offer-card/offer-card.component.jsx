import React from 'react';
import {
  OfferContainer,
  OfferCardHeadline,
  OfferImageContainer,
  OfferCardImage,
  Summery,
} from './offer-cart.styles';

const OfferCard = ({
  id,
  price,
  locationCity,
  locationId,
  createdAt,
  primaryPhotoKey,
  vehicleMakerName,
  vehicleMakerId,
  vehicleModelName,
  vehicleModelId,
  vehicleTrim,
  vehicleYear,
  vehicleMileage,
  vehicleDoors,
  vehicleState,
  vehicleBodyStyle,
  vehicleTransmission,
  vehicleDrive,
  vehicleColor,
  vehicleFuelType,
  vehicleHasAccident,
}) => (
  <div className="list-element-gap" data-uuid={id}>
    <OfferContainer className="offer-summary-full-main-container">
      <OfferCardHeadline>
        <div className="offer-summary-titles">
          <a href="/#">
            <div className="offer-summary-title">
              <div
                className="offer-summary-makemodel"
                data-maker-id={vehicleMakerId}
                data-model-id={vehicleModelId}
              >
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
      <Summery>
        <div className="offer-summary-pricing">
          <div className="offer-summary-payment">
            <span className="offer-price">{'$ ' + price.toLocaleString()}</span>{' '}
          </div>
        </div>
        <div className="offer-summary-vehicle-data">
          <ul className="vehicle-details">
            <li>{vehicleMileage.toLocaleString()} miles</li>
            <li>{vehicleYear}</li>
            <li>{vehicleTransmission}</li>
            <li>{vehicleState}</li>
            <li data-type="drive">{vehicleDrive}</li>
            <li>{vehicleBodyStyle}</li>
            <li>{vehicleFuelType}</li>
            <li>{createdAt}</li>
            <li data-location-id={locationId}>{locationCity}</li>
          </ul>
        </div>
      </Summery>
    </OfferContainer>
  </div>
);

export default OfferCard;
