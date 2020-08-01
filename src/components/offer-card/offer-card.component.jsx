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
import { deleteOffer } from '../../services/offer/offer.api';
import { notifyReload } from '../../services/notification/notification.actions';
import ConfirmDeleteModal from './components/confirm-delete-modal.component';

const IMAGE_LOAD_SUCCESS = 'IMAGE_LOAD_SUCCESS';
const TOGGLE_ACTIVE_SUCCESS = 'TOGGLE_ACTIVE_SUCCESS';
const SET_IS_USER_INVENTORY_PAGE = 'SET_IS_USER_INVENTORY_PAGE';
const TOGGLE_MODAL = 'TOGGLE_MODAL';
const TOGGLE_DELETE_IN_PROGRESS = 'TOGGLE_DELETE_IN_PROGRESS';
const DELETE_OFFER_SUCCESS = 'DELETE_OFFER_SUCCESS';

const INITIAL_STATE = {
  imageLoading: true,
  isUserInventoryPage: false,
  isOfferActive: null,
  showModal: false,
  isDeleteInProgress: false,
};

const imageLoadSuccess = () => {
  return { type: IMAGE_LOAD_SUCCESS };
};

const toggleActiveSuccess = (data) => {
  return { type: TOGGLE_ACTIVE_SUCCESS, payload: data };
};

const toggleModal = (data) => {
  return { type: TOGGLE_MODAL, payload: data };
};

const toggleDeleteInProgress = (data) => {
  return { type: TOGGLE_DELETE_IN_PROGRESS, payload: data };
};

const deleteOfferSuccess = () => {
  return { type: DELETE_OFFER_SUCCESS };
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE_SUCCESS:
      return {
        ...state,
        isOfferActive: action.payload,
      };
    case IMAGE_LOAD_SUCCESS:
      return {
        ...state,
        imageLoading: false,
      };
    case SET_IS_USER_INVENTORY_PAGE:
      return {
        ...state,
        isUserInventoryPage: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case TOGGLE_DELETE_IN_PROGRESS:
      return {
        ...state,
        isDeleteInProgress: action.payload,
      };
    case DELETE_OFFER_SUCCESS:
      return {
        ...state,
        isDeleteInProgress: false,
        showModal: false,
      };
    default:
      return state;
  }
};

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
  loadOfferForEditAsync,
  notifyReload,
}) => {
  let location = useLocation();
  const [state, dispatch] = React.useReducer(reducer, {
    ...INITIAL_STATE,
    isOfferActive: active,
    isUserInventoryPage: location.pathname === userRoutes.myInventory.path,
  });

  const imageRef = React.useRef(null);
  const { isAuthenticated, account } = user;
  const {
    imageLoading,
    isUserInventoryPage,
    isOfferActive,
    showModal,
    isDeleteInProgress,
  } = state;
  let history = useHistory();

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
      dispatch(toggleActiveSuccess(response.data));
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

  const handleDeleteClick = async (event) => {
    activateFirst(event);
    event.preventDefault();
    try {
      dispatch(toggleDeleteInProgress(true));
      const response = await deleteOffer(id);
      console.log(response);
      dispatch(deleteOfferSuccess());
      toast.success('Offer deleted successful.');
      notifyReload();
    } catch (error) {
      toast.error('Offer delete failed.');
      dispatch(toggleDeleteInProgress(false));
    }
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
                    imageRef.current.complete &&
                    dispatch(imageLoadSuccess(false))
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
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(toggleModal(true));
                }}
                variant="danger"
              >
                Delete
              </ActionButton>
            </OfferOwnerActionsContainer>
          )}
        </OfferContainer>
      </OfferLink>
      <ConfirmDeleteModal
        show={showModal}
        onHide={() => dispatch(toggleModal(false))}
        handleDeleteClick={handleDeleteClick}
        offerTitle={`${vehicleYear} ${vehicleMakerName} ${vehicleModelName}`}
        isDeleteInProgress={isDeleteInProgress}
      />
    </React.Fragment>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, {
  loadOfferForEditAsync,
  notifyReload,
})(OfferCard);
