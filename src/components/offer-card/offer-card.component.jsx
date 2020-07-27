import React from 'react';
import {
  OfferContainer,
  OfferCardHeadline,
  OfferImageContainer,
  OfferCardImage,
  Summery,
  OfferOwnerActionsContainer,
  ActionButton,
  ViewCountContainer,
  SavedCountContainer,
  OfferLink,
} from './offer-card.styles';
import AddToFavorites from '../add-to-favorites-button/add-to-favorites.component';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import offerRoutes from '../../routes/offer';
import userRoutes from '../../routes/user';
import { ReactComponent as ViewIcon } from './icons/eye.svg';
import { ReactComponent as StarIcon } from './icons/star.svg';
import { toast } from 'react-toastify';

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
  hitCount,
  savedCount,
  active,
}) => {
  const imageRef = React.useRef(null);
  const [imageLoading, setImageLoading] = React.useState(true);
  const [isUserInventoryPage, setIsUserInventoryPage] = React.useState(false);
  const { isAuthenticated } = user;
  let location = useLocation();

  React.useEffect(() => {
    setIsUserInventoryPage(location.pathname === userRoutes.myInventory.path);
  }, [location]);

  // const activateFirst = (event) => {
  //   if (!active) {
  //     toast.info('Before viewing, editing offer u must activate it!');
  //     event.preventDefault();
  //   }
  // };

  const onClick = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <OfferLink
        className={active ? '' : 'is-disabled'}
        to={offerRoutes.offerDetails.path(id)}
        data-uuid={id}
      >
        <OfferContainer
          className={`offer-summary-full-main-container ${
            isUserInventoryPage ? '' : ' _padding-bottom'
          }`}
        >
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
              {isAuthenticated && !isUserInventoryPage && (
                <AddToFavorites offerId={id} />
              )}
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
              {isUserInventoryPage && (
                <React.Fragment>
                  <ViewCountContainer>
                    <ViewIcon />
                    <span>{hitCount}</span>
                  </ViewCountContainer>
                  <SavedCountContainer>
                    <StarIcon />
                    <span>{savedCount}</span>
                  </SavedCountContainer>
                </React.Fragment>
              )}
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
          {isUserInventoryPage && (
            <OfferOwnerActionsContainer className="user-actions-container">
              <ActionButton
                onClick={onClick}
                variant="success"
                disabled={!active}
              >
                Mark As Sold
              </ActionButton>{' '}
              <ActionButton onClick={onClick} variant="info" disabled={!active}>
                Edit
              </ActionButton>{' '}
              <ActionButton
                className={active ? '' : 'is-disabled'}
                onClick={onClick}
                variant={active ? 'warning' : 'primary'}
              >
                {active ? 'Disable' : 'Activate'}
              </ActionButton>{' '}
              <ActionButton
                className={active ? '' : 'is-disabled'}
                onClick={onClick}
                variant="danger"
              >
                Delete
              </ActionButton>
            </OfferOwnerActionsContainer>
          )}
        </OfferContainer>
      </OfferLink>
    </React.Fragment>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(OfferCard);
