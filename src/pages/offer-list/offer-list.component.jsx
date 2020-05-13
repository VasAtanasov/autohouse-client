import React from 'react';
import {
  OFFER_SEARCH_FAILURE,
  OFFER_SEARCH_START,
  OFFER_SEARCH_SUCCESS,
} from '../../services/offer/offer.types';
import { connect } from 'react-redux';
import { searchOffers } from '../../services/offer/offer.api';
import {
  searchOffersStart,
  searchOffersSuccess,
  searchOffersFailure,
} from '../../services/offer/offer.actions';
import { ListWrapper, ListContainer } from './offer-list.styles';
import { Spinner } from '../../components';
import Filters from './filters/filters.component';
import List from './list/list.component';

const INITIAL_STATE = {
  loading: true,
  page: {},
  error: null,
  filter: null,
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
    default:
      return state;
  }
};

const OfferList = ({ filter }) => {
  const [state, dispatch] = React.useReducer(
    offerListReducer,
    Object.assign({}, INITIAL_STATE)
  );
  const { loading, page } = state;

  React.useEffect(() => {
    (async () => {
      try {
        dispatch(searchOffersStart());
        const response = await searchOffers(filter);
        dispatch(searchOffersSuccess(response.data.page));
      } catch (error) {
        dispatch(searchOffersFailure(error));
      }
    })();
  }, [filter]);

  return (
    <ListWrapper className="list-wrapper">
      <Filters />
      <ListContainer>
        {loading ? <Spinner /> : <List page={page} />}
      </ListContainer>
    </ListWrapper>
  );
};

const mapStateToProps = ({ filter }) => ({ filter });

export default connect(mapStateToProps)(OfferList);
