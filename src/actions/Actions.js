import * as types from "./ActionTypes";
import { createCalendar } from "../external/aion/AionApi";

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

export const updateFilterId = value => dispatch => {
  dispatch({
    type: types.UPDATE_RSVP_ATTENDING,
    payload: {
      filterId: value
    }
  });
};

export const submitForm = (calendarReducer, filterReducer) => dispatch => {
  new Promise((resolve, reject) => {
    dispatch({ type: types.APP_LOADING });
    return resolve();
  })
    .then(() => {
      let toCreate = {
        url: calendarReducer.url
      };
      return createCalendar(toCreate);
    })
    .then(created => {
      dispatch({
        type: types.UPDATE_CALENDAR_ID,
        payload: { calendarId: created.id }
      });
    })
    .then(() => {
      dispatch({ type: types.APP_LOADING_COMPLETED });
    });
};
