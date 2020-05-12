import * as types from './filter.types';

export const createFilterAction = (filter) => ({
  type: types.CREATE_FILTER,
  payload: filter,
});

export const createFilter = (filter) => (dispatch) => {
  dispatch(createFilterAction(filter));
};
