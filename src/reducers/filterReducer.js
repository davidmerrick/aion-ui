import * as types from "../actions/ActionTypes";

const initialState = {
  summaryInclude: [{ key: 0, label: "foo" }],
  rsvpAttending: false,
  rsvpTentative: false,
  rsvpNeedsAction: false,
  rsvpDeclined: false
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SUMMARY_INCLUDE_FILTER:
      return Object.assign({}, state, {
        summaryInclude: action.payload.summaryInclude
      });
    case types.UPDATE_RSVP_ATTENDING:
      return Object.assign({}, state, {
        rsvpAttending: action.payload.rsvpAttending
      });
    default:
      return state;
  }
};

export default filterReducer;
