export const USER_INITIAL_STATE = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null,
};

export const user = (state = { ...USER_INITIAL_STATE }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
