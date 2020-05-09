import initialState from '../initial-state';

const FILTER_INITIAL_STATE = initialState.filter;

export const search = (state = { ...FILTER_INITIAL_STATE }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
