import React from 'react';
import {
  OfferContainer,
  OfferCardHeadline,
  OfferImageContainer,
  OfferCardImage,
  Summery,
} from './offer-card.styles';
import AddToFavorites from '../add-to-favorites-button/add-to-favorites.component';
import { connect } from 'react-redux';

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
  user,
}) => {
  const imageRef = React.useRef(null);
  const [imageLoading, setImageLoading] = React.useState(true);
  const { isAuthenticated } = user;
  return (
    <a
      href={`/offer/details/${id}`}
      className="list-element-gap"
      data-uuid={id}
    >
      <OfferContainer className="offer-summary-full-main-container">
        <OfferCardHeadline>
          <div className="offer-summary-titles">
            <span className="title">
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
            </span>
          </div>
          <div className="offer-summary-action-buttons">
            {isAuthenticated && <AddToFavorites offerId={id} />}
          </div>
        </OfferCardHeadline>
        <OfferImageContainer>
          <OfferCardImage imageLoading={imageLoading}>
            <picture>
              <img
                ref={imageRef}
                src={`http://localhost:8007/api/images/${primaryPhotoKey}`}
                alt={'Main'}
                onLoad={() =>
                  imageRef.current.complete && setImageLoading(false)
                }
              />
            </picture>
          </OfferCardImage>
        </OfferImageContainer>
        <Summery>
          <div className="offer-summary-pricing">
            <div className="offer-summary-payment">
              <span className="offer-price">
                {'$ ' + price.toLocaleString()}
              </span>{' '}
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
    </a>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(OfferCard);
