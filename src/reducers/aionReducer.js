import * as types from "../actions/ActionTypes";

const initialState = {
  filterId: null,
  calendarId: null
};

const aionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CALENDAR_ID:
      return Object.assign({}, state, {
        calendarId: action.payload.calendarId
      });
    case types.UPDATE_FILTER_ID:
      return Object.assign({}, state, {
        filterId: action.payload.filterId
      });
    default:
      return state;
  }
};

export default aionReducer;
