import * as types from "../actions/ActionTypes";

const initialState = {
  isLoading: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.APP_LOADING_COMPLETED:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
};

export default appReducer;
