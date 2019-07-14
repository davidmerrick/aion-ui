import * as types from "./ActionTypes";

export const updateCalendarUrl = newUrl => dispatch => {
  dispatch({
    type: types.UPDATE_CALENDAR_URL,
    payload: {
      url: newUrl
    }
  });
};

export const updateRsvpAttending = value => dispatch => {
  dispatch({
    type: types.UPDATE_RSVP_ATTENDING,
    payload: {
      rsvpAttending: value
    }
  });
};

export const submitForm = (calendarReducer, filterReducer) => dispatch => {
  new Promise((resolve, reject) => {
    dispatch({ type: types.APP_LOADING });
    return resolve();
  }).then(() => {
    // Todo: Submit calendar to Aion, submit filter, combine both ids to generate a calendar url
    setTimeout(() => {
      dispatch({ type: types.APP_LOADING_COMPLETED });
    }, 3000);
  });
};
