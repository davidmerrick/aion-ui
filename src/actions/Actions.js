import * as types from "./ActionTypes";
import { createCalendar, createFilter } from "../external/aion/AionApi";
import AionCalendar from "../external/aion/models/AionCalendar";
import AionFilter from "../external/aion/models/AionFilter";

export const updateCalendarUrl = newUrl => dispatch => {
  dispatch({
    type: types.UPDATE_CALENDAR_URL,
    payload: {
      url: newUrl
    }
  });
};

export const updateFilterId = value => dispatch => {
  dispatch({
    type: types.UPDATE_FILTER_ID,
    payload: {
      filterId: value
    }
  });
};

// Todo: Perhaps rename this to an "rsvp filter"
export const updateRsvpStatuses = rsvpStatuses => dispatch => {
  dispatch({
    type: types.UPDATE_RSVP_STATUSES,
    payload: {
      rsvpStatuses: rsvpStatuses
    }
  });
};

export const submitForm = (calendarReducer, filterReducer) => dispatch => {
  new Promise((resolve, reject) => {
    dispatch({ type: types.APP_LOADING });
    return resolve();
  })
    .then(() => {
      let toCreate = new AionCalendar(calendarReducer.url);
      return createCalendar(toCreate);
    })
    .then(created => {
      dispatch({
        type: types.UPDATE_CALENDAR_ID,
        payload: { calendarId: created.id }
      });
    })
    .then(() => {
      let toCreate = new AionFilter(filterReducer);
      return createFilter(toCreate);
    })
    .then(created => {
      dispatch({
        type: types.UPDATE_FILTER_ID,
        payload: { filterId: created.id }
      });
    })
    .then(() => {
      dispatch({ type: types.APP_LOADING_COMPLETED });
    });
};
