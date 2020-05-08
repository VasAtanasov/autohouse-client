import * as types from './common.types';
import * as commonApi from './common.api';

export const fetchMakersStart = () => ({
  type: types.FETCH_MAKERS_START,
});

export const fetchMakersSuccess = (response) => ({
  type: types.FETCH_MAKERS_SUCCESS,
  payload: response.data,
});

export const fetchMakersFailure = (response) => ({
  type: types.FETCH_MAKERS_FAILURE,
  payload: response.data.message,
});

export const fetchMakersStartAsync = () => async (dispatch) => {
  dispatch(fetchMakersStart());
  try {
    const response = await commonApi.loadMakers();
    dispatch(fetchMakersSuccess(response));
  } catch (error) {
    dispatch(fetchMakersFailure(error));
  }
};

export const fetchStatisticsSuccess = (response) => ({
  type: types.FETCH_STATISTICS_SUCCESS,
  payload: response,
});

export const fetchStatistics = () => async (dispatch) => {
  try {
    const response = await commonApi.loadStatistic();
    dispatch(fetchStatisticsSuccess(response));
  } catch (error) {
    throw error;
  }
};
