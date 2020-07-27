import React from 'react';
import {
  OFFER_SEARCH_FAILURE,
  OFFER_SEARCH_START,
  OFFER_SEARCH_SUCCESS,
  OFFER_SELECT_SORT,
  OFFER_SELECT_PAGE,
} from '../../services/offer/offer.types';
import { loadUserOffers } from '../../services/offer/offer.api';
import { ListWrapper } from '../offer-list/offer-list.styles';
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

const UserOffers = ({ favorites }) => {
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
  }, [favorites, sort, pageNumber]);

  const selectSort = (event) => {
    dispatch({ type: OFFER_SELECT_SORT, payload: event.target.value });
  };

  const gotToPage = (pageNumber) => {
    dispatch({ type: OFFER_SELECT_PAGE, payload: pageNumber });
  };

  return (
    <ListWrapper className="list-wrapper">
      <UserOffersListContainer>
        {loading || !page ? (
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
                    <AddOfferButton ddOfferButton to="/offer/create">
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
    </ListWrapper>
  );
};

const mapStateToProps = ({ user }) => ({ favorites: user.details.favorites });

export default connect(mapStateToProps)(UserOffers);
