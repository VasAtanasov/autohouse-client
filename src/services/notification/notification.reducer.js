import * as types from './notification.types';

const NOTIFICATION_INITIAL_STATE = {
  reload: false,
};

export const notification = (
  state = { ...NOTIFICATION_INITIAL_STATE },
  action
) => {
  switch (action.type) {
    case types.NOTIFY_RELOAD:
      return {
        ...state,
        reload: true,
      };
    default:
      return state;
  }
};
