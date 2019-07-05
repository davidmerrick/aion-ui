import * as types from "../actions/ActionTypes";

const initialState = {
  url: "",
  aionResource: "",
  isLoading: false
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CALENDAR_URL:
      return Object.assign({}, state, {
        url: action.payload.url
      });
    case types.UPDATE_AION_CALENDAR_RESOURCE:
      return Object.assign({}, state, {
        aionResource: action.payload.aionResource
      });
    case types.CALENDAR_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.CALENDAR_LOADING_COMPLETED:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
};

export default calendarReducer;
