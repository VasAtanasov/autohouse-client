import * as types from './notification.types';

export const notifyReloadAction = () => {
  return { type: types.NOTIFY_RELOAD };
};

export const resetReloadAction = () => {
  return { type: types.RESET_RELOAD };
};

export const notifyReload = () => (dispatch) => {
  dispatch(notifyReloadAction());
};

export const resetReload = () => (dispatch) => {
  dispatch(resetReloadAction());
};
