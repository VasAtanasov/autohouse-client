import React from 'react';
import {
  OFFER_SEARCH_FAILURE,
  OFFER_SEARCH_START,
  OFFER_SEARCH_SUCCESS,
  OFFER_SELECT_SORT,
  OFFER_SELECT_PAGE,
} from '../../services/offer/offer.types';
import { loadUserOffers } from '../../services/user/user.api';
import { resetReload } from '../../services/notification/notification.actions';
import { Spinner } from '../../components';
import List from '../offer-list/list/list.component';
import { connect } from 'react-redux';
import { AccountCheck } from '../../components';
import emptyFuelGuage from '../../assets/fuel-guage.png';
import { NoResults } from '../offer-list/offer-list.styles';
import {
  AddOfferButton,
  ButtonContainer,
  UserOffersListContainer,
  UserOffersContainer,
  UserOffersData,
  InfoLine,
} from './user-offers.styles';

const INITIAL_STATE = {
  loading: true,
  page: null,
  sort: 'createdAt,desc',
  pageNumber: 0,
};

const offerListReducer = (state, action) => {
  switch (action.type) {
    case OFFER_SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case OFFER_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.page,
      };
    case OFFER_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case OFFER_SELECT_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case OFFER_SELECT_PAGE:
      return {
        ...state,
        pageNumber: action.payload,
      };
    default:
      return state;
  }
};

const UserOffers = ({ account, isFetching, reload, resetReload }) => {
  const [state, dispatch] = React.useReducer(
    offerListReducer,
    Object.assign({}, INITIAL_STATE)
  );

  const { loading, page, sort, pageNumber } = state;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  React.useEffect(() => {
    (async () => {
      try {
        if (reload) {
          resetReload();
        }
        const response = await loadUserOffers(sort, pageNumber);
        dispatch({
          type: OFFER_SEARCH_SUCCESS,
          page: response.data,
        });
      } catch (error) {
        dispatch({
          type: OFFER_SEARCH_SUCCESS,
          error,
        });
      }
    })();
  }, [sort, pageNumber, reload, resetReload]);

  const selectSort = (event) => {
    dispatch({ type: OFFER_SELECT_SORT, payload: event.target.value });
  };

  const gotToPage = (pageNumber) => {
    dispatch({ type: OFFER_SELECT_PAGE, payload: pageNumber });
  };

  return (
    <UserOffersContainer>
      <UserOffersData>
        <h4>My Inventory</h4>
        <InfoLine>Seller: {account?.displayName}</InfoLine>
        <InfoLine>Total offers: {page?.totalElements}</InfoLine>
        {account && (
          <InfoLine>
            Slots left: {account.maxOffersCount - page?.totalElements}
          </InfoLine>
        )}
      </UserOffersData>
      <UserOffersListContainer>
        {loading || !page || isFetching ? (
          <Spinner />
        ) : (
          <React.Fragment>
            {page.content.length > 0 ? (
              <List
                page={page}
                handleSort={selectSort}
                selectedSort={sort}
                gotToPage={gotToPage}
              />
            ) : (
              <NoResults>
                <div className="placeholder">
                  <img
                    className="empty-fuel-guage"
                    src={emptyFuelGuage}
                    alt="No results"
                  />
                  <h4 className="title">There no offers added</h4>
                  <ButtonContainer>
                    <AddOfferButton to="/offer/create">
                      Add Offer
                    </AddOfferButton>
                  </ButtonContainer>
                </div>
              </NoResults>
            )}
          </React.Fragment>
        )}
      </UserOffersListContainer>
      <AccountCheck pathToRedirect="/user/settings/edit-personal-info" />
    </UserOffersContainer>
  );
};

const mapStateToProps = ({ user, offer, notification }) => ({
  account: user.account,
  isFetching: offer.isFetching,
  reload: notification.reload,
});

export default connect(mapStateToProps, { resetReload })(UserOffers);
