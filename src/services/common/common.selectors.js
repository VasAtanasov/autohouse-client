import { createSelector } from 'reselect';

const selectCommon = (state) => state.common;

export const selectBodyStyles = createSelector(
  [selectCommon],
  (common) => common.bodyStyles
);

export const selectMakersIcons = createSelector(
  [selectCommon],
  (common) => common.makersIcons
);

export const selectPriceTags = createSelector(
  [selectCommon],
  (common) => common.priceTags
);

const selectMakers = (state) => state.makers;

export const selectMakersArray = createSelector(
  [selectMakers],
  (makers) => makers.makers
);
