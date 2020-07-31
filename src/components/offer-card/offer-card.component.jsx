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
  OwnerBadge,
} from './offer-card.styles';
import AddToFavorites from '../add-to-favorites-button/add-to-favorites.component';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import offerRoutes from '../../routes/offer';
import userRoutes from '../../routes/user';
import { ReactComponent as ViewIcon } from './icons/eye.svg';
import { ReactComponent as StarIcon } from './icons/star.svg';
import { ReactComponent as KeyIcon } from './icons/key.svg';
import { toast } from 'react-toastify';
import { toggleActive } from '../../services/user/user.api';
import { loadOfferForEditAsync } from '../../services/offer/offer.actions';

const OfferCard = ({
  id,
  accountId,
  accountUserId,
  accountUserEnabled,
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
  hitCount,
  savedCount,
  active,
  user,
  offerEdit,
  loadOfferForEditAsync,
}) => {
  const imageRef = React.useRef(null);
  const [imageLoading, setImageLoading] = React.useState(true);
  const [isUserInventoryPage, setIsUserInventoryPage] = React.useState(false);
  const [isOfferActive, setIsOfferActive] = React.useState(active);
  const { isAuthenticated, account } = user;
  let location = useLocation();
  let history = useHistory();

  React.useEffect(() => {
    setIsUserInventoryPage(location.pathname === userRoutes.myInventory.path);
  }, [location]);

  const activateFirst = (event) => {
    if (!isOfferActive) {
      toast.info('Before viewing or editing offer u must activate it!');
      event.preventDefault();
    }
  };

  const handleToggleActive = async (event) => {
    event.preventDefault();
    try {
      const response = await toggleActive(id);
      setIsOfferActive(response.data);
      toast.success(
        `Offer ${vehicleYear} ${vehicleMakerName} ${vehicleModelName} ${
          response.data ? 'activated' : 'disabled'
        }.`
      );
    } catch (error) {
      toast.error(
        `Something went wrong with ${
          isOfferActive ? 'deactivating' : 'activating'
        } offer.`
      );
    }
  };

  const handleEditClick = (event) => {
    activateFirst(event);
    event.preventDefault();
    loadOfferForEditAsync(
      id,
      () => {
        toast.success('Offer loaded for editing.');
        history.push(offerRoutes.offerEdit.path);
      },
      () => {
        toast.error('Something went wrong loading offer!');
      }
    );
  };

  const onClick = (event) => {
    activateFirst(event);
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <OfferLink
        className={isOfferActive ? '' : 'is-disabled'}
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
              {isAuthenticated &&
              !isUserInventoryPage &&
              account?.id !== accountId ? (
                <AddToFavorites offerId={id} />
              ) : (
                <OwnerBadge>
                  <KeyIcon />
                  <span>Owner</span>
                </OwnerBadge>
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
                onClick={handleEditClick}
                variant="info"
                disabled={!isOfferActive}
              >
                Edit
              </ActionButton>{' '}
              <ActionButton
                className={isOfferActive ? '' : 'is-disabled'}
                onClick={handleToggleActive}
                variant={isOfferActive ? 'warning' : 'primary'}
              >
                {isOfferActive ? 'Disable' : 'Activate'}
              </ActionButton>{' '}
              <ActionButton
                className={isOfferActive ? '' : 'is-disabled'}
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

const mapStateToProps = ({ user, offer }) => ({
  user,
  offerEdit: {
    isFetching: offer.isFetching,
    error: offer.error,
    offerObject: offer.editCreate,
  },
});

export default connect(mapStateToProps, { loadOfferForEditAsync })(OfferCard);
