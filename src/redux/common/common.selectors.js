import { createSelector } from 'reselect';

const selectCommon = (state) => state.common;

export const selectBodyStyles = createSelector(
    [selectCommon],
    (common) => common.bodyStyles
);
