import React from 'react';

import {
  OFFER_SEARCH_FAILURE,
  OFFER_SEARCH_START,
  OFFER_SEARCH_SUCCESS,
  OFFER_SELECT_SORT,
  OFFER_SELECT_PAGE,
} from '../../services/offer/offer.types';

import { ListWrapper, ListContainer } from '../offer-list/offer-list.styles';
import { Spinner } from '../../components';
import List from '../offer-list/list/list.component';

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

const OfferFavorites = ({ filter, width }) => {
  const [state, dispatch] = React.useReducer(
    offerListReducer,
    Object.assign({}, INITIAL_STATE)
  );

  const { loading, page, sort, pageNumber } = state;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

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
            <List
              page={page}
              handleSort={selectSort}
              selectedSort={sort}
              gotToPage={gotToPage}
            />
          </React.Fragment>
        )}
      </ListContainer>
    </ListWrapper>
  );
};

export default OfferFavorites;
