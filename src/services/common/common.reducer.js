import initialState from '../initial-state';
import * as types from './common.types';

export const common = (state = { ...initialState.common }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const MAKERS_INITIAL_STATE = {
  makers: [],
  isFetching: false,
  error: undefined,
};

export const makers = (state = { ...MAKERS_INITIAL_STATE }, action) => {
  switch (action.type) {
    case types.FETCH_MAKERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_MAKERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        makers: action.payload,
      };
    case types.FETCH_MAKERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const STATISTICS_INITIAL_STATE = {
  totalOffers: 0,
};

export const statistics = (state = { ...STATISTICS_INITIAL_STATE }, action) => {
  switch (action.type) {
    case types.FETCH_STATISTICS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// export default commonReducer;
