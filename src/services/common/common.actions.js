import * as types from './common.types';
import * as commonApi from './common.api';

export const fetchMakersStart = () => ({
  type: types.FETCH_MAKERS_START,
});

export const fetchMakersSuccess = (response) => ({
  type: types.FETCH_MAKERS_SUCCESS,
  payload: response.data.data,
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

export const fetchStatisticsStart = () => ({
  type: types.FETCH_STATISTICS_START,
});

export const fetchStatisticsSuccess = (response) => ({
  type: types.FETCH_STATISTICS_SUCCESS,
  payload: response.data,
});

export const fetchStatisticsFailure = (error) => ({
  type: types.FETCH_STATISTICS_FAILURE,
  payload: error,
});

export const fetchStatistics = () => async (dispatch) => {
  try {
    dispatch(fetchStatisticsStart());
    const response = await commonApi.loadStatistic();
    dispatch(fetchStatisticsSuccess(response));
  } catch (error) {
    dispatch(fetchStatisticsFailure(error));
    throw error;
  }
};

export const fetchAppStateStart = () => ({
  type: types.FETCH_APP_STATE_START,
});

export const fetchAppStateSuccess = (response) => ({
  type: types.FETCH_APP_STATE_SUCCESS,
  payload: response.data.data,
});
export const fetchMetadataSuccess = (response) => ({
  type: types.FETCH_METADATA_SUCCESS,
  payload: response.data.data.metadata,
});

export const fetchAppStateFailure = (error) => ({
  type: types.FETCH_APP_STATE_FAILURE,
  payload: error,
});

export const fetchAppStateAsync = () => async (dispatch) => {
  try {
    dispatch(fetchAppStateStart());
    const response = await commonApi.loadAppState();
    dispatch(fetchAppStateSuccess(response));
  } catch (error) {
    dispatch(fetchAppStateFailure(error));
    throw error;
  }
};

export const fetchMetadataAsync = () => async (dispatch) => {
  try {
    dispatch(fetchAppStateStart());
    const response = await commonApi.loadAppState();
    dispatch(fetchMetadataSuccess(response));
  } catch (error) {
    dispatch(fetchAppStateFailure(error));
    throw error;
  }
};

export const fetchProvincesAsync = () => async (dispatch) => {
  try {
    const response = await commonApi.loadProvinces();
    dispatch({ type: types.SET_PROVINCE_LIST, payload: response.data.data });
  } catch (err) {
    throw err;
  }
};
