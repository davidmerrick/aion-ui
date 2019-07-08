import * as types from "./ActionTypes";
import { createCalendar } from "../external/AionApi";

export const updateCalendarUrl = newUrl => dispatch => {
  dispatch({
    type: types.UPDATE_CALENDAR_URL,
    payload: {
      url: newUrl
    }
  });
};

export const submitCalendar = calendarUrl => dispatch => {
  new Promise((resolve, reject) => {
    dispatch({ type: types.CALENDAR_LOADING });
    return resolve();
  })
    .then(() => {
      return createCalendar({
        url: calendarUrl
      });
    })
    .then(created => {
      dispatch({
        type: types.CALENDAR_LOADING_COMPLETED,
        payload: {
          aionResource: created.url
        }
      });
    });
};
