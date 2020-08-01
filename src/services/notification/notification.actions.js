import * as types from './notification.types';

export const notifyReloadAction = () => {
  return { type: types.NOTIFY_RELOAD };
};

export const notifyReload = () => (dispatch) => {
  dispatch(notifyReloadAction());
};
