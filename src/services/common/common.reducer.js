import initialState from '../initial-state';
import * as types from './common.types';

const COMMON_STATE = Object.assign({}, initialState.common, {
  isFetching: false,
  errorMessage: undefined,
});

const commonReducer = (state = COMMON_STATE, action) => {
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
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
