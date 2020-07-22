import React from 'react';
import {
  OFFER_SEARCH_FAILURE,
  OFFER_SEARCH_START,
  OFFER_SEARCH_SUCCESS,
  OFFER_SELECT_SORT,
  OFFER_SELECT_PAGE,
} from '../../services/offer/offer.types';
import { searchFavoriteOffers } from '../../services/offer/offer.api';
import { ListWrapper, ListContainer } from '../offer-list/offer-list.styles';
import { Spinner } from '../../components';
import List from '../offer-list/list/list.component';
import { connect } from 'react-redux';
import {
  EmptyCardContainer,
  ReturnToSearch,
  ReturnToSearchButton,
} from './offer-favorites.styles';

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

const OfferFavorites = ({ favorites }) => {
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
        const response = await searchFavoriteOffers(
          favorites,
          sort,
          pageNumber
        );
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
      <ListContainer>
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
              <EmptyCardContainer>
                <div className="empty-card">
                  <i className="flaticon-star-2" />
                  <div className="empty-card-label">You have no favorites</div>
                  <div className="empty-card-content">
                    Click the star link on any vehicle for easy access and
                    instant price drop alerts.
                  </div>
                </div>
              </EmptyCardContainer>
            )}
          </React.Fragment>
        )}
      </ListContainer>
      <ReturnToSearch>
        <h5 className="return-to-search-title">Favorite Vehicles</h5>
        <p>
          Save your favorite vehicles for easy access and get alerted when their
          price drops
        </p>
        <ReturnToSearchButton to="/list">
          Return to last search
        </ReturnToSearchButton>
      </ReturnToSearch>
    </ListWrapper>
  );
};

const mapStateToProps = ({ user }) => ({ favorites: user.details.favorites });

export default connect(mapStateToProps)(OfferFavorites);
