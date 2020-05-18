import React from 'react';
import {
  OFFER_SEARCH_FAILURE,
  OFFER_SEARCH_START,
  OFFER_SEARCH_SUCCESS,
  OFFER_SELECT_SORT,
  OFFER_SELECT_PAGE,
} from '../../services/offer/offer.types';
import {
  FETCH_APP_STATE_SUCCESS,
  FETCH_APP_STATE_FAILURE,
} from '../../services/common/common.types';
import { connect } from 'react-redux';
import { searchOffers } from '../../services/offer/offer.api';
import { loadAppState } from '../../services/common/common.api';
import {
  searchOffersSuccess,
  searchOffersFailure,
} from '../../services/offer/offer.actions';
import {
  fetchAppStateSuccess,
  fetchAppStateFailure,
} from '../../services/common/common.actions';
import { ListWrapper, ListContainer } from './offer-list.styles';
import { Spinner } from '../../components';
import Filters from './filters/filters.component';
import List from './list/list.component';

const INITIAL_STATE = {
  loading: true,
  page: {},
  error: null,
  filter: null,
  sort: 'createdAt,desc',
  pageNumber: 0,
  app: {},
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
    case FETCH_APP_STATE_FAILURE:
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
    case FETCH_APP_STATE_SUCCESS:
      return {
        ...state,
        app: action.payload,
      };
    default:
      return state;
  }
};

const OfferList = (props) => {
  const [state, dispatch] = React.useReducer(
    offerListReducer,
    Object.assign({}, INITIAL_STATE, { filter: props.filter })
  );

  const { loading, filter, page, sort, pageNumber, app } = state;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await searchOffers(filter, sort, pageNumber);
        dispatch(searchOffersSuccess(response.data.page));
      } catch (error) {
        dispatch(searchOffersFailure(error));
      }
    })();
  }, [filter, sort, pageNumber]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await loadAppState();
        dispatch(fetchAppStateSuccess(response));
      } catch (error) {
        dispatch(fetchAppStateFailure(error));
      }
    })();
  }, []);

  const selectSort = (event) => {
    dispatch({ type: OFFER_SELECT_SORT, payload: event.target.value });
  };

  const gotToPage = (pageNumber) => {
    dispatch({ type: OFFER_SELECT_PAGE, payload: pageNumber });
  };

  return (
    <ListWrapper className="list-wrapper">
      <Filters {...app} />
      <ListContainer>
        {loading ? (
          <Spinner />
        ) : (
          <List
            page={page}
            handleSort={selectSort}
            selectedSort={sort}
            gotToPage={gotToPage}
            app={app}
          />
        )}
      </ListContainer>
    </ListWrapper>
  );
};

const mapStateToProps = ({ filter }) => ({ filter });

export default connect(mapStateToProps)(OfferList);
