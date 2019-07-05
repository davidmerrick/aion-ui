import * as types from "../actions/ActionTypes";

const initialState = {
  url: ""
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CALENDAR_URL:
      return Object.assign({}, state, {
        url: action.payload.url
      });
    default:
      return state;
  }
};

export default calendarReducer;
