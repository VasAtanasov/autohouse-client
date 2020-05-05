import { createSelector } from 'reselect';

const selectCommon = (state) => state.common;

export const selectBodyStyles = createSelector(
  [selectCommon],
  (common) => common.bodyStyles
);

export const selectMakers = createSelector(
  [selectCommon],
  (common) => common.makers
);
