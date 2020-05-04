import * as types from './common.types';
import * as commonApi from '../../utils/api/commonApi';

export const fetchMakersStart = () => ({
    type: types.FETCH_MAKERS_START,
});

export const fetchMakersSuccess = (response) => ({
    type: types.FETCH_MAKERS_SUCCESS,
    payload: response.data,
});

export const fetchMakersFailure = (response) => ({
    type: types.FETCH_MAKERS_FAILURE,
    payload: response.errors,
});

export const fetchMakersStartAsync = () => {
    return (dispatch) => {
        dispatch(fetchMakersStart());
        commonApi
            .loadMakers()
            .then((response) => {
                console.log(response);
                dispatch(fetchMakersSuccess(response));
            })
            .catch((error) => dispatch(fetchMakersFailure(error)));
    };
};
