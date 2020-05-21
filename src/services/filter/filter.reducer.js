import initialState from '../initial-state';
import * as types from './filter.types';

const FILTER_INITIAL_STATE = Object.assign({}, initialState.filter);

export const filter = (state = { ...FILTER_INITIAL_STATE }, action) => {
  switch (action.type) {
    case types.CREATE_FILTER:
      return {
        ...FILTER_INITIAL_STATE,
        ...action.payload,
      };
    case types.RESET_FILTER:
      return FILTER_INITIAL_STATE;
    default:
      return state;
  }
};
