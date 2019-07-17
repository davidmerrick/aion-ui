import * as types from "../actions/ActionTypes";

const initialState = {
  url: "",
  validationMessage: null,
  isLoading: false
};

// Todo: Maybe change this to "calendarFormReducer"
const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CALENDAR_URL:
      return Object.assign({}, state, {
        url: action.payload.url
      });
    case types.RESET_CALENDAR_VALIDATION_MESSAGE:
      return Object.assign({}, state, {
        validationMessage: null
      });
    case types.UPDATE_CALENDAR_VALIDATION_MESSAGE:
      return Object.assign({}, state, {
        validationMessage: action.payload.validationMessage
      });
    case types.UPDATE_AION_CALENDAR_RESOURCE:
      return Object.assign({}, state, {
        aionResource: action.payload.aionResource
      });
    default:
      return state;
  }
};

export default calendarReducer;
